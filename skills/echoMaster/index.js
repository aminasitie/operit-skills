/**
 * EchoMaster - Skill interaktif untuk percakapan cerdas dan respon kontekstual
 * 
 * Skill ini mendeteksi berbagai jenis input dan memberikan respon yang sesuai
 * berdasarkan konteks dan emosi pengguna.
 */

module.exports = {
  name: 'echoMaster',
  description: 'Skill interaktif untuk percakapan cerdas dan respon kontekstual',
  version: '1.0.0',
  author: 'Aminasitie',
  
  execute: async function(params) {
    const { input } = params;
    
    if (!input || typeof input !== 'string') {
      return {
        output: 'Halo! Saya EchoMaster, siap membantu Anda. Ketik sesuatu untuk kita mulai percakapan!',
        success: true,
        data: { mode: 'welcome' }
      };
    }
    
    const normalizedInput = input.toLowerCase().trim();
    const response = this.analyzeAndRespond(normalizedInput, input);
    
    return {
      output: response.message,
      success: true,
      data: {
        detectedIntent: response.intent,
        confidence: response.confidence,
        timestamp: new Date().toISOString()
      }
    };
  },
  
  analyzeAndRespond: function(normalized, original) {
    const patterns = {
      greeting: ['halo', 'hai', 'hello', 'hi', 'selamat', 'assalam', 'apa kabar'],
      farewell: ['bye', 'dadah', 'selamat tinggal', 'sampai jumpa', 'goodbye'],
      question: ['apa', 'bagaimana', 'kapan', 'dimana', 'siapa', 'mengapa', '?'],
      gratitude: ['terima kasih', 'makasih', 'thanks', 'thank you'],
      help: ['tolong', 'bantu', 'help', 'bisa', 'minta'],
      positive: ['bagus', 'hebat', 'keren', 'mantap', 'luar biasa'],
      negative: ['buruk', 'jelek', 'gagal', 'tidak suka', 'bad']
    };
    
    const scores = {};
    for (const [intent, keywords] of Object.entries(patterns)) {
      scores[intent] = keywords.filter(keyword => normalized.includes(keyword)).length;
    }
    
    let maxScore = 0;
    let detectedIntent = 'general';
    
    for (const [intent, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        detectedIntent = intent;
      }
    }
    
    const responses = {
      greeting: [
        'Halo juga! Senang bertemu dengan Anda. Ada yang bisa saya bantu hari ini?',
        'Hai! Saya EchoMaster, asisten percakapan cerdas Anda. Apa kabar?',
        'Hello! Selamat datang di percakapan interaktif. Mau ngobrol tentang apa?'
      ],
      farewell: [
        'Sampai jumpa! Senang bisa ngobrol dengan Anda. Jangan ragu untuk kembali lagi!',
        'Bye-bye! Semoga harimu menyenangkan. Sampai bertemu lagi!',
        'Selamat tinggal! Terima kasih sudah mengobrol dengan saya.'
      ],
      question: [
        'Pertanyaan yang menarik! Mari kita eksplorasi bersama. Bisa berikan detail lebih lanjut?',
        'Saya siap menjawab! Untuk memberikan jawaban terbaik, bisakah Anda menjelaskan lebih spesifik?',
        'Hmm, pertanyaan yang bagus! Ada beberapa cara untuk mendekati masalah ini.'
      ],
      gratitude: [
        'Sama-sama! Senang bisa membantu Anda.',
        'Dengan senang hati! Ada lagi yang bisa saya bantu?',
        'Terima kasih kembali! Senang bisa berguna.'
      ],
      help: [
        'Tentu! Saya siap membantu. Apa yang Anda butuhkan?',
        'Siap membantu! Ceritakan apa yang ingin Anda capai.',
        'Saya di sini untuk membantu. Jelaskan masalah Anda, dan kita cari solusinya bersama.'
      ],
      positive: [
        'Terima kasih! Senang mendengar respon positif Anda.',
        'Wah, terima kasih atas apresiasinya! Semoga saya bisa terus membantu.',
        'Anda juga hebat! Senang bisa berinteraksi dengan Anda.'
      ],
      negative: [
        'Saya mengerti kekhawatiran Anda. Mari kita cari solusi terbaik.',
        'Mohon maaf jika ada yang kurang berkenan. Bisa berikan masukan agar saya bisa lebih baik?',
        'Terima kasih atas umpan baliknya. Saya akan berusaha meningkatkan kualitas respon.'
      ],
      general: [
        `Anda mengatakan: "${original}". Menarik! Ada yang ingin Anda diskusikan lebih lanjut?`,
        `Saya memahami maksud Anda tentang: "${original}". Bagaimana menurut Anda?`,
        `Terima kasih telah berbagi: "${original}". Mari kita lanjutkan percakapan ini.`
      ]
    };
    
    const responseList = responses[detectedIntent] || responses.general;
    const randomIndex = Math.floor(Math.random() * responseList.length);
    
    return {
      message: responseList[randomIndex],
      intent: detectedIntent,
      confidence: maxScore > 0 ? Math.min(maxScore * 0.3, 1.0) : 0.5
    };
  }
};
