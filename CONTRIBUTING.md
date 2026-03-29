# Contributing to Operit Skills Repository

Terima kasih atas minat Anda untuk berkontribusi! Berikut adalah panduan untuk berkontribusi ke repositori ini.

## Cara Berkontribusi

### 1. Fork dan Clone
```bash
# Fork repositori melalui GitHub, lalu clone
git clone https://github.com/your-username/operit-skills.git
cd operit-skills
```

### 2. Buat Branch Baru
```bash
git checkout -b skill/nama-skill-anda
```

### 3. Struktur Skill
Setiap skill harus memiliki struktur berikut:
```
skills/nama-skill/
├── skill.json       # Metadata skill
├── index.js         # Implementasi utama
└── README.md        # Dokumentasi
```

### 4. Format skill.json
```json
{
  "name": "nama-skill",
  "version": "1.0.0",
  "description": "Deskripsi skill",
  "author": "Nama Anda",
  "category": "Kategori",
  "keywords": ["keyword1", "keyword2"],
  "main": "index.js",
  "engines": {
    "operit": ">=1.0.0"
  }
}
```

### 5. Implementasi Skill
```javascript
module.exports = {
  name: 'nama-skill',
  description: 'Deskripsi skill',
  
  execute: async function(params) {
    // Implementasi skill
    return {
      output: 'Hasil',
      success: true
    };
  }
};
```

### 6. Commit dan Push
```bash
git add .
git commit -m "Add skill: nama-skill"
git push origin skill/nama-skill-anda
```

### 7. Buat Pull Request
Buka GitHub dan buat Pull Request dari branch Anda ke main.

## Standar Kode

- Gunakan ESLint untuk JavaScript
- Tulis dokumentasi yang jelas
- Sertakan contoh penggunaan
- Pastikan skill berjalan tanpa error

## Review Process

1. Pull Request akan direview oleh maintainer
2. Pastikan semua test lulus
3. Perbaiki feedback jika ada
4. Setelah disetujui, PR akan di-merge

## Pertanyaan?

Buka Issue di GitHub atau hubungi maintainer.
