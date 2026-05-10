/**
 * HanVerse VS — Audio Module (Web Speech API)
 * =============================================
 * Módulo de TTS para mandarim, pinyin e português.
 * 100% client-side, sem custo, sem dependências, funciona offline.
 *
 * Uso básico:
 *   HanVerseAudio.speak('你好');                    // pt-BR padrão? não — autodetecta
 *   HanVerseAudio.speakChinese('你好');             // força zh-CN
 *   HanVerseAudio.speakPinyin('Nǐ hǎo');           // pt-BR para pinyin lido
 *   HanVerseAudio.speakSequence(char, py, pt);     // sequência didática completa
 *
 * Configuração:
 *   HanVerseAudio.config.rate.chinese = 0.8;      // mais devagar para iniciantes
 *   HanVerseAudio.config.preferredVoice.zh = 'Tingting'; // se quiser voz específica
 */

(function (global) {
  'use strict';

  // ============ ESTADO INTERNO ============
  const state = {
    voices: [],
    voicesLoaded: false,
    speaking: false,
    queue: [],
    currentUtterance: null,
  };

  // ============ CONFIGURAÇÃO ============
  const config = {
    rate: {
      chinese: 0.85,    // mais devagar — fundamental para aprendizado
      pinyin: 0.95,
      portuguese: 1.0,
      example: 0.9
    },
    pitch: {
      chinese: 1.0,
      pinyin: 1.0,
      portuguese: 1.0
    },
    volume: 1.0,
    preferredVoice: {
      zh: null,    // se null, escolhe a melhor automaticamente
      'pt-BR': null,
      'pt-PT': null
    },
    pauseBetweenSequence: 600,   // ms entre char/pinyin/translation
    fallbackToEN: true            // se zh-CN indisponível, tenta zh-* qualquer
  };

  // ============ CARREGAMENTO DE VOZES ============
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      state.voices = voices;
      state.voicesLoaded = true;
    }
  }

  // Browsers (especialmente Chrome) carregam vozes assincronamente
  if ('speechSynthesis' in window) {
    loadVoices();
    if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  // ============ SELEÇÃO DE VOZ ============
  function pickVoice(langPrefix) {
    if (!state.voicesLoaded) loadVoices();
    if (state.voices.length === 0) return null;

    // 1. Voz nomeada explicitamente em config
    const preferred = config.preferredVoice[langPrefix];
    if (preferred) {
      const v = state.voices.find(v => v.name === preferred || v.name.includes(preferred));
      if (v) return v;
    }

    // 2. Match exato pelo lang
    let candidates = state.voices.filter(v => v.lang === langPrefix);

    // 3. Match por prefixo (zh-CN → zh-* se zh-CN não existir)
    if (candidates.length === 0) {
      const prefix = langPrefix.split('-')[0];
      candidates = state.voices.filter(v => v.lang.startsWith(prefix));
    }

    if (candidates.length === 0) return null;

    // Prioriza vozes locais (default não é uma flag confiável em todos os browsers)
    const local = candidates.filter(v => v.localService);
    if (local.length > 0) return local[0];
    return candidates[0];
  }

  // ============ DISPONIBILIDADE ============
  function isAvailable() {
    return 'speechSynthesis' in window;
  }

  function isChineseAvailable() {
    if (!isAvailable()) return false;
    if (!state.voicesLoaded) loadVoices();
    return state.voices.some(v => v.lang.startsWith('zh'));
  }

  // ============ SPEAK CORE ============
  function _speakInternal(text, lang, opts = {}) {
    if (!text || !isAvailable()) return Promise.reject(new Error('TTS indisponível'));

    return new Promise((resolve, reject) => {
      try {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang;
        u.rate = opts.rate || 1.0;
        u.pitch = opts.pitch || 1.0;
        u.volume = opts.volume || config.volume;

        const langPrefix = lang.startsWith('zh') ? 'zh' : lang;
        const voice = pickVoice(langPrefix);
        if (voice) u.voice = voice;

        u.onend = () => {
          state.speaking = false;
          state.currentUtterance = null;
          resolve();
        };
        u.onerror = (e) => {
          state.speaking = false;
          state.currentUtterance = null;
          reject(e);
        };

        state.currentUtterance = u;
        state.speaking = true;
        window.speechSynthesis.speak(u);
      } catch (err) {
        reject(err);
      }
    });
  }

  // ============ API PÚBLICA ============

  /** Fala em chinês (zh-CN). Caracteres ou frase. */
  function speakChinese(text, opts = {}) {
    return _speakInternal(text, 'zh-CN', {
      rate: opts.rate || config.rate.chinese,
      pitch: opts.pitch || config.pitch.chinese,
      ...opts
    });
  }

  /** Fala pinyin com pronúncia portuguesa (apenas referencial). */
  function speakPinyin(text, opts = {}) {
    return _speakInternal(text, 'pt-BR', {
      rate: opts.rate || config.rate.pinyin,
      pitch: opts.pitch || config.pitch.pinyin,
      ...opts
    });
  }

  /** Fala tradução em português. */
  function speakPortuguese(text, opts = {}) {
    return _speakInternal(text, 'pt-BR', {
      rate: opts.rate || config.rate.portuguese,
      ...opts
    });
  }

  /** Detecta automaticamente: chinês se contém hanzi, senão português. */
  function speak(text, opts = {}) {
    if (/[\u4e00-\u9fff]/.test(text)) return speakChinese(text, opts);
    return speakPortuguese(text, opts);
  }

  /** Sequência didática: caractere → pinyin → tradução, com pausas. */
  async function speakSequence(chinese, pinyin, portuguese, opts = {}) {
    const pauseMs = opts.pauseMs || config.pauseBetweenSequence;
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    try {
      await speakChinese(chinese);
      if (pinyin) {
        await sleep(pauseMs);
        await speakPinyin(pinyin);
      }
      if (portuguese) {
        await sleep(pauseMs);
        await speakPortuguese(portuguese);
      }
    } catch (err) {
      // Continua o resto mesmo se uma falhar
      console.warn('[HanVerseAudio] Sequência interrompida:', err);
    }
  }

  /** Fala uma frase de exemplo: zh duas vezes (rápido + devagar) + tradução. */
  async function speakExample(zh, py, pt) {
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    try {
      await speakChinese(zh, { rate: config.rate.example });
      await sleep(config.pauseBetweenSequence);
      await speakChinese(zh, { rate: 0.65 }); // bem devagar
      await sleep(config.pauseBetweenSequence);
      if (pt) await speakPortuguese(pt);
    } catch (err) {
      console.warn('[HanVerseAudio] Exemplo interrompido:', err);
    }
  }

  /** Para qualquer áudio em curso. */
  function stop() {
    if (!isAvailable()) return;
    window.speechSynthesis.cancel();
    state.speaking = false;
    state.currentUtterance = null;
    state.queue = [];
  }

  /** Lista vozes disponíveis (útil para UI de configuração). */
  function listVoices(langPrefix = null) {
    if (!state.voicesLoaded) loadVoices();
    if (!langPrefix) return state.voices.slice();
    return state.voices.filter(v => v.lang.startsWith(langPrefix));
  }

  /** Retorna o status atual (útil para UI). */
  function getStatus() {
    return {
      available: isAvailable(),
      chineseAvailable: isChineseAvailable(),
      speaking: state.speaking,
      voicesLoaded: state.voicesLoaded,
      totalVoices: state.voices.length,
      chineseVoices: state.voices.filter(v => v.lang.startsWith('zh')).length,
      portugueseVoices: state.voices.filter(v => v.lang.startsWith('pt')).length
    };
  }

  // ============ HELPER: criar botão play ============
  /**
   * Cria um botão de play que fala um texto. Retorna o elemento <button>.
   * Útil para injetar nos cards e quizzes.
   */
  function createPlayButton(text, mode = 'auto', label = '🔊') {
    const btn = document.createElement('button');
    btn.className = 'hv-audio-btn';
    btn.type = 'button';
    btn.textContent = label;
    btn.setAttribute('aria-label', `Reproduzir áudio de ${text}`);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      btn.classList.add('playing');
      const promise = mode === 'chinese' ? speakChinese(text)
                    : mode === 'pinyin' ? speakPinyin(text)
                    : mode === 'portuguese' ? speakPortuguese(text)
                    : speak(text);
      promise
        .catch(err => console.warn('[HanVerseAudio] Erro:', err))
        .finally(() => btn.classList.remove('playing'));
    });
    return btn;
  }

  // ============ EXPORT ============
  global.HanVerseAudio = {
    config,
    speak,
    speakChinese,
    speakPinyin,
    speakPortuguese,
    speakSequence,
    speakExample,
    stop,
    listVoices,
    getStatus,
    isAvailable,
    isChineseAvailable,
    createPlayButton
  };

})(typeof window !== 'undefined' ? window : this);
