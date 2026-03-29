# Character Counter Skill

Skill untuk menghitung statistik teks: karakter, kata, kalimat, dan paragraf.

## Deskripsi

Character Counter menganalisis teks yang diberikan dan menghitung berbagai statistik seperti jumlah karakter (dengan dan tanpa spasi), kata, kalimat, paragraf, serta rata-rata panjang kata.

## Cara Menggunakan

### Contoh Penggunaan

```
User: Hitung karakter: "Hello World! Ini adalah contoh kalimat."

Operit: 📊 **Statistik Teks**

📝 Karakter: 43 (tanpa spasi: 37)
📖 Kata: 7
📄 Kalimat: 2
📃 Paragraf: 1
📏 Rata-rata panjang kata: 5.0 karakter
```

### Input

Kirimkan teks yang ingin dianalisis. Skill akan otomatis mendeteksi apakah itu kalimat atau paragraf.

### Output

Skill mengembalikan:
- **Karakter**: Total karakter termasuk spasi
- **Karakter tanpa spasi**: Total karakter tanpa spasi
- **Kata**: Jumlah kata yang dipisahkan spasi
- **Kalimat**: Jumlah kalimat (dipisahkan ., !, ?)
- **Paragraf**: Jumlah paragraf (dipisahkan baris kosong)
- **Rata-rata panjang kata**: Panjang rata-rata setiap kata

## Parameter

| Parameter | Tipe | Keterangan | Wajib |
|-----------|------|------------|-------|
| `input` | string | Teks yang akan dianalisis | Ya |

## Response

```json
{
  "output": "📊 **Statistik Teks**\n\n📝 Karakter: 43 (tanpa spasi: 37)\n📖 Kata: 7\n📄 Kalimat: 2\n📃 Paragraf: 1\n📏 Rata-rata panjang kata: 5.0 karakter",
  "success": true,
  "data": {
    "characters": 43,
    "charactersNoSpaces": 37,
    "words": 7,
    "sentences": 2,
    "paragraphs": 1,
    "avgWordLength": 5.0
  }
}
```

## Use Cases

1. **Editor Teks**: Memeriksa panjang artikel atau esai
2. **Media Sosial**: Memastikan teks tidak melebihi batas karakter
3. **SEO**: Menghitung statistik konten untuk optimasi
4. **Penulisan**: Menganalisis kualitas penulisan

## Limitasi

- Tanda baca dihitung sebagai karakter
- Kata-kata dengan tanda hubung (-) dihitung sebagai satu kata
- Kalimat tanpa tanda akhir (.!?) mungkin tidak terhitung

## Pengembangan

Anda dapat memperluas skill ini dengan:
- Menambahkan analisis readability score
- Mendeteksi bahasa teks
- Menghitung frekuensi kata
- Memberikan saran perbaikan penulisan

## Lisensi

MIT License
