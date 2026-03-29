# Operit Skills Repository

Repositori resmi untuk mengembangkan dan mendistribusikan skill untuk Operit AI Assistant.

## 📁 Struktur Direktori

```
operit-skills/
├── skills/                    # Direktori skill yang tersedia
│   ├── contoh-skill/         # Contoh skill
│   │   ├── skill.json        # Konfigurasi skill
│   │   ├── index.js          # Implementasi skill
│   │   └── README.md         # Dokumentasi skill
│   └── ...
├── templates/                 # Template untuk skill baru
├── tools/                    # Utilitas pengembangan
├── docs/                     # Dokumentasi umum
└── scripts/                  # Skrip otomatisasi
```

## 🚀 Memulai Pengembangan Skill

### Prasyarat
- Node.js 18+ atau Python 3.8+
- Git
- Text editor/IDE (VS Code direkomendasikan)

### Membuat Skill Baru

1. **Fork repositori ini**
2. **Buat direktori skill**:
   ```bash
   mkdir skills/nama-skill-anda
   cd skills/nama-skill-anda
   ```

3. **Buat file konfigurasi** `skill.json`:
   ```json
   {
     "name": "nama-skill-anda",
     "version": "1.0.0",
     "description": "Deskripsi singkat skill Anda",
     "author": "Nama Anda",
     "category": "Kategori Skill",
     "keywords": ["kata-kunci", "terkait"],
     "main": "index.js",
     "engines": {
       "operit": ">=1.0.0"
     }
   }
   ```

4. **Implementasikan skill** dalam `index.js`:
   ```javascript
   // Contoh implementasi skill
   module.exports = {
     name: 'contoh-skill',
     description: 'Skill contoh untuk demonstrasi',
     
     // Fungsi yang akan dipanggil oleh Operit
     execute: async function(params) {
       const { input } = params;
       return {
         output: `Anda mengatakan: ${input}`,
         success: true
       };
     }
   };
   ```

5. **Tambahkan dokumentasi** dalam `README.md`

## 📚 Jenis Skill yang Tersedia

### 1. **Skill Komunikasi**
- Manajemen email
- Integrasi chat platform
- Notifikasi cerdas

### 2. **Skill Produktivitas**
- Manajemen tugas
- Kalender & penjadwalan
- Otomatisasi dokumen

### 3. **Skill Pengembangan**
- Integrasi Git
- Deploy aplikasi
- Manajemen server

### 4. **Skill Data & Analisis**
- Visualisasi data
- Pemrosesan dokumen
- Analisis statistik

### 5. **Skill Kehidupan Sehari-hari**
- Cuaca & lokasi
- Berita & informasi
- Hobi & hiburan

## 🔧 Alat Pengembangan

### Validasi Skill
```bash
node tools/validate-skill.js skills/nama-skill-anda
```

### Testing Skill
```bash
node tools/test-skill.js skills/nama-skill-anda
```

### Instalasi Skill Lokal
```bash
node tools/install-local.js skills/nama-skill-anda
```

## 🤝 Berkontribusi

### Alur Kontribusi
1. Fork repositori
2. Buat branch untuk fitur baru (`git checkout -b fitur/contoh`)
3. Commit perubahan (`git commit -m 'Tambahkan contoh fitur'`)
4. Push ke branch (`git push origin fitur/contoh`)
5. Buat Pull Request

### Panduan Kontribusi
- Ikuti struktur direktori yang sudah ada
- Sertakan dokumentasi yang jelas
- Tambahkan test untuk skill baru
- Pastikan kode mengikuti style guide
- Berikan deskripsi yang informatif

### Code of Conduct
Harap baca [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) sebelum berkontribusi.

## 📖 Dokumentasi

- [Panduan Memulai](docs/getting-started.md)
- [Referensi API](docs/api-reference.md)
- [Best Practices](docs/best-practices.md)
- [Troubleshooting](docs/troubleshooting.md)

## 🔍 Mencari Skill

Gunakan fitur pencarian Operit atau browse direktori `skills/` untuk menemukan skill yang Anda butuhkan.

## 📝 Licensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 📞 Kontak

- GitHub Issues: untuk bug dan fitur request
- Diskusi GitHub: untuk pertanyaan umum
- Email: aminasitie@gmail.com

## 🙏 Acknowledgments

- Tim pengembang Operit
- Kontributor komunitas
- Pengguna yang memberikan masukan

---

**Selamat mengembangkan skill untuk Operit!** 🚀
