# Kopi Kopian — Landing Page UMKM

Landing page modern premium untuk usaha kedai kopi **Kopi Kopian**, menggunakan warna cokelat kopi dan krem.

## Fitur
- Desain responsif untuk desktop, tablet, dan smartphone.
- Hero section, profil usaha, menu dan harga, galeri, testimoni, serta kontak.
- Navigasi mobile menggunakan Bootstrap 5.
- Tombol kontak WhatsApp.
- Tahun footer otomatis menggunakan JavaScript.
- Tidak menggunakan database atau backend.

## Teknologi
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3 (CDN)
- Google Fonts (DM Sans dan Playfair Display)

## Struktur Folder
```text
kopi-kopian/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── hero-coffee.svg
    ├── about-coffee.svg
    ├── menu-latte.svg
    ├── menu-americano.svg
    ├── menu-kopisusu.svg
    ├── menu-mocha.svg
    ├── gallery-1.svg
    ├── gallery-2.svg
    └── gallery-3.svg
```

## Cara Menjalankan
1. Ekstrak file ZIP.
2. Buka folder `kopi-kopian`.
3. Klik dua kali `index.html`, atau jalankan dengan ekstensi Live Server di Visual Studio Code.
4. Pastikan koneksi internet tersedia untuk memuat Bootstrap dan Google Fonts dari CDN.

## Kustomisasi Sebelum Dipublikasikan
- **Nomor WhatsApp:** ganti `6281234567890` pada tautan `wa.me` di `index.html` dengan nomor WhatsApp bisnis (format kode negara, tanpa tanda `+`).
- **Instagram:** ganti `@kopikopian` dengan akun resmi.
- **Alamat dan jam operasional:** sesuaikan informasi kontak pada bagian bawah halaman.
- **Menu dan harga:** edit nama, deskripsi, serta harga pada bagian `#menu`.
- **Foto:** ganti aset SVG di folder `images/` dengan foto produk atau kedai milik usaha. Pertahankan nama file atau sesuaikan jalur `src` di `index.html`.

## Catatan
Menu, harga, testimoni, jam operasional, dan kontak pada project ini merupakan konten contoh yang dapat disesuaikan. Aset ilustrasi SVG disertakan agar project tetap dapat dibuka tanpa mengunduh foto eksternal.
