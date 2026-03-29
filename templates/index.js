/**
 * Template Skill untuk Operit
 * 
 * Skill ini menunjukkan struktur dasar skill Operit.
 * Anda dapat memodifikasi template ini untuk membuat skill kustom.
 */

module.exports = {
  name: 'skill-template',
  description: 'Template untuk membuat skill Operit baru',
  version: '1.0.0',
  author: 'Your Name',
  
  /**
   * Fungsi utama yang akan dipanggil oleh Operit
   * @param {Object} params - Parameter yang diterima dari Operit
   * @param {string} params.input - Input dari pengguna
   * @param {Object} params.context - Konteks percakapan
   * @returns {Promise<Object>} - Hasil eksekusi skill
   */
  execute: async function(params) {
    try {
      const { input, context } = params;
      
      // Logika skill Anda di sini
      // Contoh: memproses input dan menghasilkan output
      const result = await this.processInput(input, context);
      
      return {
        output: result.output,
        success: true,
        data: result.data || null,
        metadata: {
          skill: this.name,
          timestamp: new Date().toISOString()
        }
      };
    } catch (error) {
      return {
        output: `Error: ${error.message}`,
        success: false,
        error: error.message
      };
    }
  },
  
  /**
   * Fungsi pemrosesan input (opsional)
   * Anda dapat menambahkan fungsi helper di sini
   */
  processInput: async function(input, context) {
    // Implementasi pemrosesan input
    return {
      output: `Anda mengatakan: ${input}`,
      data: {
        processed: true,
        inputLength: input.length
      }
    };
  },
  
  /**
   * Fungsi validasi (opsional)
   * Untuk memvalidasi input sebelum diproses
   */
  validate: function(params) {
    if (!params.input || typeof params.input !== 'string') {
      throw new Error('Input harus berupa string');
    }
    return true;
  }
};
