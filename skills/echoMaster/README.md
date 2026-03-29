# EchoMaster 🎯

Skill interaktif untuk percakapan cerdas dan respon kontekstual.

## 🌟 Fitur

- **Deteksi Intent Otomatis**: Mengenali jenis pesan (sapaan, pertanyaan, bantuan, dll)
- **Respon Kontekstual**: Memberikan jawaban yang sesuai dengan konteks percakapan
- **Analisis Sentimen**: Mendeteksi sentimen positif/negatif dalam pesan
- **Variasi Respon**: Respon bervariasi untuk pengalaman yang lebih natural

## 📝 Cara Menggunakan

Kirim pesan ke Operit dan EchoMaster akan merespon dengan cerdas:

```
User: Halo!
EchoMaster: Hai! Saya EchoMaster, asisten percakapan cerdas Anda. Apa kabar?

User: Bagaimana cuaca hari ini?
EchoMaster: Pertanyaan yang menarik! Mari kita eksplorasi bersama. Bisa berikan detail lebih lanjut?

User: Terima kasih
EchoMaster: Sama-sama! Senang bisa membantu Anda.
```

## 🎯 Jenis Input yang Didukung

| Jenis | Contoh Kata Kunci |
|-------|-------------------|
| Sapaan | halo, hai, hello, selamat |
| Perpisahan | bye, dadah, sampai jumpa |
| Pertanyaan | apa, bagaimana, kapan, dimana |
| Terima Kasih | makasih, thanks, terima kasih |
| Bantuan | tolong, bantu, help, minta |
| Positif | bagus, hebat, keren, mantap |
| Negatif | buruk, jelek, gagal |

## 📊 Response Format

```json
{
  "output": "Respon dari EchoMaster",
  "success": true,
  "data": {
    "detectedIntent": "greeting",
    "confidence": 0.6,
    "timestamp": "2026-03-30T12:00:00.000Z"
  }
}
```

## 🔧 Pengembangan

### Menambah Intent Baru

Edit fungsi `analyzeAndRespond` untuk menambah kategori baru:

```javascript
const patterns = {
  // ... intent yang ada
  yourNewIntent: ['keyword1', 'keyword2']
};
```

### Menambah Respon

Tambahkan respon untuk intent baru:

```javascript
const responses = {
  // ... respon yang ada
  yourNewIntent: [
    'Respon 1',
    'Respon 2',
    'Respon 3'
  ]
};
```

## 📈 Roadmap

- [ ] Integrasi dengan API NLP untuk analisis lebih akurat
- [ ] Dukungan multi-bahasa
- [ ] Memori percakapan (context awareness)
- [ ] Personalisasi berdasarkan preferensi pengguna

## 📄 Lisensi

MIT License
