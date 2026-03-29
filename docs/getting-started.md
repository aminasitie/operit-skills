# Panduan Memulai Pengembangan Skill Operit

Selamat datang di repositori skill Operit! Panduan ini akan membantu Anda memulai mengembangkan skill untuk Operit AI Assistant.

## Prasyarat

Sebelum memulai, pastikan Anda memiliki:

1. **Node.js 18+** atau **Python 3.8+** (tergantung bahasa yang digunakan)
2. **Git** untuk version control
3. **Text editor/IDE** (VS Code direkomendasikan)
4. **Akun GitHub** untuk berkontribusi

## Langkah 1: Fork dan Clone Repositori

### Fork Repositori
1. Buka https://github.com/aminasitie/operit-skills
2. Klik tombol **Fork** di pojok kanan atas
3. Pilih akun GitHub Anda sebagai tujuan fork

### Clone Repositori
```bash
git clone https://github.com/username-anda/operit-skills.git
cd operit-skills
```

## Langkah 2: Memahami Struktur Repositori

```
operit-skills/
├── skills/              # Direktori skill yang tersedia
├── templates/           # Template untuk skill baru
├── tools/              # Utilitas pengembangan
├── docs/               # Dokumentasi
└── scripts/            # Skrip otomatisasi
```

## Langkah 3: Membuat Skill Baru

### Opsi A: Menggunakan Template

1. **Salin template**:
   ```bash
   cp -r templates/ skills/nama-skill-anda
   ```

2. **Ubah nama file** (jika perlu):
   ```bash
   cd skills/nama-skill-anda
   mv skill-template.json skill.json
   mv index-template.js index.js
   ```

3. **Edit skill.json**:
   ```json
   {
     "name": "nama-skill-anda",
     "version": "1.0.0",
     "description": "Deskripsi singkat skill Anda",
     "author": "Nama Anda",
     "category": "Kategori Skill",
     "keywords": ["kata-kunci1", "kata-kunci2"],
     "main": "index.js",
     "engines": {
       "operit": ">=1.0.0"
     }
   }
   ```

### Opsi B: Membuat dari Awal

1. **Buat direktori skill**:
   ```bash
   mkdir skills/nama-skill-anda
   cd skills/nama-skill-anda
   ```

2. **Buat file skill.json** (lihat format di atas)

3. **Buat file index.js** (lihat contoh di bawah)

## Langkah 4: Mengimplementasikan Skill

### Struktur Dasar index.js

```javascript
module.exports = {
  // Metadata
  name: 'nama-skill-anda',
  description: 'Deskripsi skill',
  version: '1.0.0',
  author: 'Nama Anda',
  
  // Fungsi utama yang dipanggil oleh Operit
  execute: async function(params) {
    // 1. Ekstrak parameter
    const { input, context } = params;
    
    // 2. Validasi input
    if (!input) {
      return {
        output: 'Error: Input diperlukan',
        success: false
      };
    }
    
    // 3. Proses input
    const result = await this.process(input);
    
    // 4. Return response
    return {
      output: result.message,
      success: true,
      data: result.data
    };
  },
  
  // Fungsi helper (opsional)
  process: async function(input) {
    // Implementasi logika
    return {
      message: `Hasil: ${input}`,
      data: {}
    };
  }
};
```

### Contoh Skill Sederhana

```javascript
// skills/celsius-to-fahrenheit/index.js
module.exports = {
  name: 'celsius-to-fahrenheit',
  description: 'Konversi suhu dari Celsius ke Fahrenheit',
  
  execute: async function(params) {
    const { input } = params;
    
    // Ekstrak angka dari input
    const match = input.match(/(-?\d+(?:\.\d+)?)/);
    
    if (!match) {
      return {
        output: 'Mohon berikan suhu dalam Celsius. Contoh: "25 C ke F"',
        success: false
      };
    }
    
    const celsius = parseFloat(match[1]);
    const fahrenheit = (celsius * 9/5) + 32;
    
    return {
      output: `${celsius}°C = ${fahrenheit.toFixed(1)}°F`,
      success: true,
      data: {
        celsius,
        fahrenheit: parseFloat(fahrenheit.toFixed(1))
      }
    };
  }
};
```

## Langkah 5: Testing Skill

### Testing Manual

Anda dapat menguji skill dengan menambahkan fungsi test:

```javascript
// Tambahkan di index.js
if (require.main === module) {
  // Test skill
  const testParams = { input: 'Hello World' };
  module.exports.execute(testParams)
    .then(result => console.log(result))
    .catch(err => console.error(err));
}
```

Jalankan:
```bash
node skills/nama-skill-anda/index.js
```

### Testing dengan Alat

```bash
node tools/test-skill.js skills/nama-skill-anda
```

## Langkah 6: Menambahkan Dokumentasi

Buat file `README.md` dalam direktori skill Anda:

```markdown
# Nama Skill

Deskripsi singkat skill.

## Cara Menggunakan

[Contoh penggunaan]

## Parameter

| Parameter | Tipe | Keterangan |
|-----------|------|------------|
| input | string | Input dari pengguna |

## Response

[Format response]
```

## Langkah 7: Commit dan Push

1. **Stage perubahan**:
   ```bash
   git add skills/nama-skill-anda/
   ```

2. **Commit**:
   ```bash
   git commit -m "Add skill: nama-skill-anda"
   ```

3. **Push ke GitHub**:
   ```bash
   git push origin main
   ```

## Langkah 8: Membuat Pull Request

1. Buka repositori fork Anda di GitHub
2. Klik **Compare & pull request**
3. Isi deskripsi PR dengan:
   - Deskripsi skill
   - Contoh penggunaan
   - Screenshot (jika relevan)
4. Klik **Create pull request**

## Best Practices

### Naming Convention
- Gunakan **kebab-case** untuk nama skill: `my-skill-name`
- Nama harus deskriptif dan singkat
- Hindari prefix `operit-` atau `skill-`

### Code Quality
- Gunakan ES6+ syntax
- Tambahkan komentar untuk logika kompleks
- Handle error dengan baik
- Gunakan async/await untuk operasi asinkron

### Dokumentasi
- Jelaskan cara penggunaan dengan contoh
- Cantumkan semua parameter yang diperlukan
- Berikan contoh response
- Dokumentasikan error yang mungkin terjadi

### Testing
- Test berbagai skenario input
- Test edge cases
- Test error handling
- Pastikan output konsisten

## Troubleshooting

### Skill Tidak Muncul di Operit
1. Pastikan file `skill.json` valid
2. Pastikan `main` menunjuk ke file yang benar
3. Restart Operit setelah menambahkan skill

### Error saat Menjalankan Skill
1. Cek console untuk error message
2. Pastikan semua dependency terinstal
3. Pastikan format return sesuai standar

### Pull Request Ditolak
1. Baca review comment dengan seksama
2. Perbaiki issue yang disebutkan
3. Update PR dan request review ulang

## Referensi

- [Contoh Skill](skills/hello-world/README.md)
- [Template Skill](templates/README.md)
- [API Reference](api-reference.md)
- [Best Practices](best-practices.md)

## Pertanyaan?

Buka Issue di GitHub atau tanya di Diskusi.
