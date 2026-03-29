/**
 * Hello World Skill untuk Operit
 * 
 * Contoh skill sederhana yang menunjukkan cara kerja skill Operit.
 */

module.exports = {
  name: 'hello-world',
  description: 'Contoh skill sederhana untuk demonstrasi',
  version: '1.0.0',
  author: 'Aminasitie',
  
  /**
   * Fungsi utama yang dipanggil oleh Operit
   */
  execute: async function(params) {
    const { input } = params;
    
    // Respon berdasarkan input
    let response;
    
    if (!input) {
      response = 'Halo! Saya adalah Hello World skill. Ketik sesuatu untuk saya respon.';
    } else {
      const greetings = ['halo', 'hai', 'hello', 'hi', 'selamat'];
      const isGreeting = greetings.some(g => input.toLowerCase().includes(g));
      
      if (isGreeting) {
        response = `Halo juga! Senang bertemu dengan Anda. Anda berkata: "${input}"`;
      } else {
        response = `Anda mengatakan: "${input}". Terima kasih telah menggunakan Hello World skill!`;
      }
    }
    
    return {
      output: response,
      success: true,
      data: {
        inputReceived: input,
        timestamp: new Date().toISOString()
      }
    };
  }
};
