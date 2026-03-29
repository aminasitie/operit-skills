# Template Skill Operit

Template ini menyediakan struktur dasar untuk membuat skill Operit baru.

## File yang Tersedia

- `skill.json` - Metadata dan konfigurasi skill
- `index.js` - Implementasi skill utama
- `README.md` - Dokumentasi skill (file ini)

## Cara Menggunakan Template

1. **Salin direktori template**
   ```bash
   cp -r templates/skill-template skills/nama-skill-anda
   ```

2. **Modifikasi file konfigurasi**
   Edit `skill.json` dengan informasi skill Anda:
   ```json
   {
     "name": "nama-skill-anda",
     "version": "1.0.0",
     "description": "Deskripsi skill Anda",
     "author": "Nama Anda",
     "category": "Kategori",
     "keywords": ["keyword1", "keyword2"],
     "main": "index.js",
     "engines": {
       "operit": ">=1.0.0"
     }
   }
   ```

3. **Implementasikan skill**
   Edit `index.js` dengan logika skill Anda:
   ```javascript
   module.exports = {
     name: 'nama-skill-anda',
     description: 'Deskripsi skill',
     
     execute: async function(params) {
       const { input, context } = params;
       
       // Logika skill Anda
       const result = `Anda mengatakan: ${input}`;
       
       return {
         output: result,
         success: true
       };
     }
   };
   ```

4. **Perbarui dokumentasi**
   Edit `README.md` dengan dokumentasi skill Anda.

## Struktur Skill yang Direkomendasikan

```
skills/nama-skill-anda/
├── skill.json        # Metadata skill
├── index.js          # Implementasi utama
├── README.md         # Dokumentasi
├── lib/              # Library tambahan (opsional)
│   └── helper.js
└── tests/            # Test cases (opsional)
    └── test-skill.js
```

## Best Practices

1. **Gunakan nama yang deskriptif**
   - Nama skill harus jelas menggambarkan fungsinya
   - Hindari nama yang terlalu umum

2. **Dokumentasi yang lengkap**
   - Jelaskan cara penggunaan
   - Berikan contoh input dan output
   - Cantumkan prasyarat jika ada

3. **Error handling**
   - Tangani error dengan baik
   - Berikan pesan error yang informatif
   - Log error untuk debugging

4. **Testing**
   - Tulis test untuk fungsi utama
   - Test berbagai skenario input
   - Pastikan edge case tertangani

5. **Performance**
   - Optimalkan proses yang berat
   - Hindari blocking operation
   - Gunakan async/await dengan benar

## Contoh Skill Sederhana

```javascript
// Skill untuk menghitung karakter
module.exports = {
  name: 'char-counter',
  description: 'Menghitung jumlah karakter dalam teks',
  
  execute: async function(params) {
    const { input } = params;
    
    if (!input) {
      return {
        output: 'Mohon berikan teks untuk dihitung',
        success: false
      };
    }
    
    const charCount = input.length;
    const wordCount = input.split(/\s+/).filter(w => w).length;
    
    return {
      output: `Teks memiliki ${charCount} karakter dan ${wordCount} kata.`,
      success: true,
      data: {
        characters: charCount,
        words: wordCount
      }
    };
  }
};
```

## Pertanyaan?

Jika Anda memiliki pertanyaan tentang penggunaan template ini, silakan buka issue di repositori utama.
