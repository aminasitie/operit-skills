# Hello World Skill

Contoh skill sederhana untuk demonstrasi cara kerja skill Operit.

## Deskripsi

Skill ini menunjukkan struktur dasar dan cara implementasi skill untuk Operit AI Assistant.

## Cara Menggunakan

Setelah skill diinstal, Anda dapat berinteraksi dengannya melalui Operit:

```
User: Halo
Operit: Halo juga! Senang bertemu dengan Anda. Anda berkata: "Halo"

User: Apa kabar?
Operit: Anda mengatakan: "Apa kabar?". Terima kasih telah menggunakan Hello World skill!
```

## Parameter

| Parameter | Tipe | Keterangan |
|-----------|------|------------|
| `input` | string | Input dari pengguna |

## Response

```json
{
  "output": "Response text",
  "success": true,
  "data": {
    "inputReceived": "input pengguna",
    "timestamp": "2026-01-01T00:00:00.000Z"
  }
}
```

## Instalasi Manual

1. Clone repositori:
   ```bash
   git clone https://github.com/aminasitie/operit-skills.git
   ```

2. Copy skill ke direktori Operit:
   ```bash
   cp -r operit-skills/skills/hello-world ~/.operit/skills/
   ```

## Pengembangan

Skill ini dapat digunakan sebagai template untuk membuat skill baru:

1. Copy direktori `hello-world` ke nama skill baru
2. Ubah `skill.json` dengan informasi skill baru
3. Modifikasi `index.js` dengan logika skill baru
4. Update `README.md` dengan dokumentasi skill baru

## Lisensi

MIT License
