# API Reference untuk Skill Operit

Dokumentasi API untuk mengembangkan skill Operit.

## Struktur Skill

Setiap skill harus mengekspor objek dengan properti berikut:

```javascript
module.exports = {
  // Metadata (wajib)
  name: string,           // Nama unik skill
  description: string,    // Deskripsi skill
  version: string,        // Versi semantic (e.g., "1.0.0")
  
  // Metadata (opsional)
  author: string,         // Nama pembuat
  category: string,       // Kategori skill
  keywords: string[],     // Kata kunci untuk pencarian
  license: string,        // Lisensi (e.g., "MIT")
  
  // Fungsi utama (wajib)
  execute: Function       // Fungsi yang dipanggil Operit
};
```

## Fungsi Execute

Fungsi utama yang dipanggil oleh Operit.

### Signature

```javascript
execute(params: Object): Promise<Object>
```

### Parameter

| Nama | Tipe | Keterangan | Wajib |
|------|------|------------|-------|
| `input` | string | Input dari pengguna | Ya |
| `context` | Object | Konteks percakapan | Tidak |
| `user` | Object | Info pengguna | Tidak |

### Return Value

Fungsi harus mengembalikan Promise yang resolve ke objek:

```javascript
{
  output: string,      // Teks output untuk pengguna
  success: boolean,    // Status keberhasilan
  data?: any,          // Data tambahan (opsional)
  metadata?: Object    // Metadata tambahan (opsional)
}
```

### Contoh

```javascript
execute: async function(params) {
  const { input, context } = params;
  
  try {
    // Proses input
    const result = processInput(input);
    
    return {
      output: `Hasil: ${result}`,
      success: true,
      data: { result },
      metadata: {
        timestamp: new Date().toISOString()
      }
    };
  } catch (error) {
    return {
      output: `Error: ${error.message}`,
      success: false,
      data: { error: error.message }
    };
  }
}
```

## Error Handling

Selalu tangani error dan return format yang konsisten:

```javascript
try {
  // Logika skill
} catch (error) {
  return {
    output: `Terjadi kesalahan: ${error.message}`,
    success: false,
    data: {
      error: error.message,
      stack: error.stack // Hanya untuk debugging
    }
  };
}
```

## Best Practices

### Validasi Input

```javascript
execute: async function(params) {
  // Validasi parameter
  if (!params) {
    return {
      output: 'Parameter tidak valid',
      success: false
    };
  }
  
  const { input } = params;
  
  // Validasi input
  if (!input || typeof input !== 'string') {
    return {
      output: 'Input harus berupa string',
      success: false
    };
  }
  
  // Proses
}
```

### Async Operations

```javascript
// Untuk operasi async, gunakan async/await
execute: async function(params) {
  const data = await fetchData();
  return {
    output: `Data: ${data}`,
    success: true
  };
}
```

### Formatting Output

```javascript
// Gunakan markdown untuk formatting
return {
  output: `**Hasil Analisis**\n\n- Item 1\n- Item 2`,
  success: true
};
```

## Fungsi Helper (Opsional)

Anda dapat menambahkan fungsi helper:

```javascript
module.exports = {
  name: 'my-skill',
  
  execute: async function(params) {
    return this.process(params.input);
  },
  
  // Fungsi helper
  process: function(input) {
    return {
      output: input.toUpperCase(),
      success: true
    };
  }
};
```

## Lifecycle

1. **Loading**: Operit memuat skill dari `skill.json`
2. **Discovery**: Skill ditemukan berdasarkan kata kunci
3. **Execution**: `execute()` dipanggil dengan parameter
4. **Response**: Output dikembalikan ke pengguna

## Limitasi

- Skill harus berjalan dalam sandbox
- Tidak ada akses ke filesystem secara langsung
- Operasi network terbatas
- Timeout eksekusi: 30 detik

## Referensi

- [Getting Started](getting-started.md)
- [Best Practices](best-practices.md)
- [Contoh Skill](../skills/hello-world/README.md)
