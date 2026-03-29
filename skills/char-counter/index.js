/**
 * Character Counter Skill untuk Operit
 * 
 * Menghitung jumlah karakter, kata, dan kalimat dalam teks.
 */

module.exports = {
  name: 'char-counter',
  description: 'Menghitung jumlah karakter, kata, dan kalimat dalam teks',
  version: '1.0.0',
  author: 'Aminasitie',
  
  execute: async function(params) {
    const { input } = params;
    
    if (!input || typeof input !== 'string') {
      return {
        output: 'Mohon berikan teks untuk dihitung.\nContoh: "Hitung karakter: Hello World"',
        success: false
      };
    }
    
    // Hitung statistik
    const charCount = input.length;
    const charNoSpaces = input.replace(/\s/g, '').length;
    const words = input.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;
    const sentences = input.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentenceCount = sentences.length;
    const paragraphs = input.split(/\n\n+/).filter(p => p.trim().length > 0);
    const paragraphCount = paragraphs.length;
    
    // Hitung rata-rata
    const avgWordLength = wordCount > 0 
      ? (words.reduce((sum, w) => sum + w.length, 0) / wordCount).toFixed(1)
      : 0;
    
    // Format output
    const output = `📊 **Statistik Teks**

` +
      `📝 Karakter: ${charCount} (tanpa spasi: ${charNoSpaces})\n` +
      `📖 Kata: ${wordCount}\n` +
      `📄 Kalimat: ${sentenceCount}\n` +
      `📃 Paragraf: ${paragraphCount}\n` +
      `📏 Rata-rata panjang kata: ${avgWordLength} karakter`;
    
    return {
      output: output,
      success: true,
      data: {
        characters: charCount,
        charactersNoSpaces: charNoSpaces,
        words: wordCount,
        sentences: sentenceCount,
        paragraphs: paragraphCount,
        avgWordLength: parseFloat(avgWordLength)
      }
    };
  }
};
