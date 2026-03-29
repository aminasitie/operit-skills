/**
 * TextMetricsPro - Analisis teks profesional
 * 
 * Memberikan statistik lengkap tentang teks termasuk karakter, kata,
 * kalimat, paragraf, waktu baca, dan analisis keterbacaan.
 */

module.exports = {
  name: 'textMetricsPro',
  description: 'Analisis teks profesional: karakter, kata, kalimat, paragraf, dan statistik lanjutan',
  version: '1.0.0',
  author: 'Aminasitie',
  
  execute: async function(params) {
    const { input } = params;
    
    if (!input || typeof input !== 'string' || input.trim().length === 0) {
      return {
        output: '📝 **TextMetricsPro**\n\nMohon berikan teks untuk dianalisis.\n\nContoh: "Analisis: Lorem ipsum dolor sit amet..."',
        success: false,
        data: { mode: 'help' }
      };
    }
    
    const stats = this.analyze(input);
    const output = this.formatOutput(stats);
    
    return {
      output: output,
      success: true,
      data: stats
    };
  },
  
  analyze: function(text) {
    // Karakter
    const charCount = text.length;
    const charNoSpaces = text.replace(/\s/g, '').length;
    const charAlpha = (text.match(/[a-zA-Z]/g) || []).length;
    const charNumeric = (text.match(/[0-9]/g) || []).length;
    const charSpecial = charNoSpaces - charAlpha - charNumeric;
    
    // Kata
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;
    const uniqueWords = new Set(words.map(w => w.toLowerCase()));
    const uniqueWordCount = uniqueWords.size;
    
    // Kalimat
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentenceCount = sentences.length;
    
    // Paragraf
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);
    const paragraphCount = Math.max(paragraphs.length, 1);
    
    // Rata-rata
    const avgWordLength = wordCount > 0 
      ? (words.reduce((sum, w) => sum + w.length, 0) / wordCount).toFixed(1)
      : 0;
    const avgSentenceLength = sentenceCount > 0
      ? (wordCount / sentenceCount).toFixed(1)
      : 0;
    
    // Waktu baca (asumsi 200 kata per menit)
    const readingTimeMinutes = Math.ceil(wordCount / 200);
    const readingTimeSeconds = Math.ceil((wordCount / 200) * 60);
    
    // Keterbacaan (Flesch-Kincaid approximation)
    const syllableCount = this.estimateSyllables(text);
    const fleschScore = wordCount > 0 && sentenceCount > 0
      ? Math.max(0, Math.min(100, 
          206.835 - (1.015 * (wordCount / sentenceCount)) - (84.6 * (syllableCount / wordCount))
        )).toFixed(1)
      : 0;
    
    return {
      characters: {
        total: charCount,
        withoutSpaces: charNoSpaces,
        alphabetic: charAlpha,
        numeric: charNumeric,
        special: charSpecial
      },
      words: {
        total: wordCount,
        unique: uniqueWordCount,
        avgLength: parseFloat(avgWordLength)
      },
      sentences: {
        total: sentenceCount,
        avgWords: parseFloat(avgSentenceLength)
      },
      paragraphs: {
        total: paragraphCount
      },
      reading: {
        minutes: readingTimeMinutes,
        seconds: readingTimeSeconds
      },
      readability: {
        fleschScore: parseFloat(fleschScore),
        level: this.getReadabilityLevel(fleschScore)
      }
    };
  },
  
  estimateSyllables: function(text) {
    const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 0);
    let count = 0;
    
    for (const word of words) {
      // Simple syllable estimation
      const vowels = word.match(/[aeiouy]+/g) || [];
      let syllables = vowels.length;
      
      // Adjustments
      if (word.endsWith('e') && syllables > 1) syllables--;
      if (syllables === 0) syllables = 1;
      
      count += syllables;
    }
    
    return count;
  },
  
  getReadabilityLevel: function(score) {
    const s = parseFloat(score);
    if (s >= 90) return '🟢 Sangat Mudah (SD)';
    if (s >= 80) return '🟢 Mudah (SMP)';
    if (s >= 70) return '🟡 Cukup Mudah (SMA)';
    if (s >= 60) return '🟡 Standar (Umum)';
    if (s >= 50) return '🟠 Cukup Sulit (Kuliah)';
    if (s >= 30) return '🔴 Sulit (Profesional)';
    return '🔴 Sangat Sulit (Akademis)';
  },
  
  formatOutput: function(stats) {
    return `📊 **TextMetricsPro - Analisis Teks**\n\n` +
      `**📝 Karakter**\n` +
      `• Total: ${stats.characters.total}\n` +
      `• Tanpa spasi: ${stats.characters.withoutSpaces}\n` +
      `• Alfabetis: ${stats.characters.alphabetic} | Numerik: ${stats.characters.numeric} | Spesial: ${stats.characters.special}\n\n` +
      `**📖 Kata**\n` +
      `• Total: ${stats.words.total}\n` +
      `• Unik: ${stats.words.unique}\n` +
      `• Rata-rata panjang: ${stats.words.avgLength} karakter\n\n` +
      `**📄 Kalimat**\n` +
      `• Total: ${stats.sentences.total}\n` +
      `• Rata-rata kata/kalimat: ${stats.sentences.avgWords}\n\n` +
      `**📃 Paragraf**\n` +
      `• Total: ${stats.paragraphs.total}\n\n` +
      `**⏱️ Waktu Baca**\n` +
      `• Perkiraan: ${stats.reading.minutes} menit (${stats.reading.seconds} detik)\n\n` +
      `**📈 Keterbacaan**\n` +
      `• Skor Flesch: ${stats.readability.fleschScore}/100\n` +
      `• Level: ${stats.readability.level}`;
  }
};
