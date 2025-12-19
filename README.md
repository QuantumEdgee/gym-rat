# Gym Rat - Kalkulator Gizi & Kalori Harian

Website modern dan interaktif untuk menghitung gizi dan kalori harian khusus untuk para gym enthusiast. Dibangun dengan HTML, Tailwind CSS, dan JavaScript vanilla.

## 🚀 Fitur Utama

### 1. **Kalkulator BMI (Body Mass Index)**
   - Menghitung BMI berdasarkan berat dan tinggi badan
   - Menampilkan kategori BMI (Underweight, Normal, Overweight, Obese)
   - Visualisasi dengan warna yang sesuai kategori

### 2. **Kalkulator BMR (Basal Metabolic Rate)**
   - Menghitung kalori yang dibutuhkan saat istirahat total
   - Menggunakan formula Mifflin-St Jeor yang akurat
   - Mempertimbangkan jenis kelamin, usia, berat, dan tinggi badan

### 3. **Kalkulator TDEE (Total Daily Energy Expenditure)**
   - Menghitung total kalori harian berdasarkan aktivitas
   - 5 level aktivitas: Sedentary, Light, Moderate, Active, Very Active
   - Menggunakan BMR sebagai dasar perhitungan

### 4. **Kalkulator Makronutrien**
   - Menghitung distribusi protein, karbohidrat, dan lemak
   - 3 mode tujuan: Cutting, Maintenance, Bulking
   - Menampilkan persentase dan gram untuk setiap makro

### 5. **Kalkulator Target Kalori**
   - Menentukan target kalori harian berdasarkan tujuan
   - Mode: Turun berat badan (-500 kal), Maintenance, Naik berat badan (+500 kal)
   - Dapat langsung diatur sebagai target harian

### 6. **Estimator Body Fat**
   - Estimasi persentase lemak tubuh
   - Menggunakan formula Deurenberg
   - Kategori berbeda untuk laki-laki dan perempuan

### 7. **Meal Planner & Food Tracker**
   - Database makanan Indonesia yang lengkap (100+ makanan)
   - Pencarian makanan dengan informasi nutrisi lengkap
   - Tracking makanan per waktu makan (Sarapan, Makan Siang, Makan Malam, Snack)
   - Progress bar kalori harian dengan visualisasi
   - Tracking makronutrien (Protein, Karbohidrat, Lemak)
   - Klik pada target kalori untuk mengubahnya

### 8. **Progress Tracker**
   - Mencatat berat badan dan body fat secara berkala
   - Menampilkan perubahan berat badan dari waktu ke waktu
   - Riwayat progress dengan tanggal dan detail lengkap
   - Data tersimpan di browser (localStorage)

## 🎨 Fitur Desain

- **Modern UI/UX**: Desain gradient purple dengan efek glassmorphism
- **Responsive Design**: Optimal di desktop, tablet, dan mobile
- **Smooth Animations**: Transisi dan animasi yang halus
- **Interactive Elements**: Hover effects dan feedback visual
- **Dark Theme**: Tema gelap yang nyaman untuk mata
- **Icon Integration**: Font Awesome icons untuk visualisasi yang lebih baik

## 📁 Struktur File

```
For Gym Rat/
├── index.html      # File HTML utama
├── styles.css      # Custom CSS styles
├── script.js       # JavaScript dengan semua fungsi
└── README.md      # Dokumentasi
```

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur website
- **Tailwind CSS**: Framework CSS utility-first (via CDN)
- **JavaScript (Vanilla)**: Logika aplikasi dan interaktivitas dengan konsep OOP
- **Font Awesome**: Icons
- **Google Fonts**: Font Inter
- **LocalStorage**: Penyimpanan data lokal

## 🏗️ Arsitektur OOP

Aplikasi ini menggunakan konsep Object-Oriented Programming (OOP) untuk struktur yang lebih rapi dan terorganisir:

### Class-Class Utama:

1. **FoodDatabase** - Mengelola database makanan dan pencarian
2. **BMICalculator** - Menghitung BMI (static methods)
3. **BMRCalculator** - Menghitung BMR (static methods)
4. **TDEECalculator** - Menghitung TDEE (static methods)
5. **MacroCalculator** - Menghitung distribusi makronutrien (static methods)
6. **CalorieGoalCalculator** - Menghitung target kalori (static methods)
7. **BodyFatCalculator** - Estimasi body fat (static methods)
8. **MealPlanner** - Mengelola meal planning dan tracking
9. **ProgressTracker** - Mengelola riwayat progress
10. **UIHandler** - Menangani semua update UI
11. **StorageManager** - Mengelola localStorage (static methods)
12. **GymRatApp** - Main application class yang mengkoordinasikan semua komponen

### Keuntungan Struktur OOP:

- ✅ **Separation of Concerns**: Setiap class memiliki tanggung jawab yang jelas
- ✅ **Reusability**: Method dapat digunakan kembali dengan mudah
- ✅ **Maintainability**: Lebih mudah untuk maintain dan update
- ✅ **Scalability**: Mudah untuk menambah fitur baru
- ✅ **Testability**: Setiap class dapat di-test secara independen

## 🚀 Cara Menggunakan

1. **Buka Website**
   - Buka file `index.html` di browser modern (Chrome, Firefox, Edge, Safari)
   - Tidak perlu server atau instalasi khusus

2. **Hitung BMI**
   - Masukkan berat badan (kg) dan tinggi badan (cm)
   - Klik "Hitung BMI"
   - Lihat hasil dan kategori BMI

3. **Hitung BMR & TDEE**
   - Isi data di kalkulator BMR (jenis kelamin, usia, berat, tinggi)
   - Salin hasil BMR ke kalkulator TDEE
   - Pilih level aktivitas
   - Dapatkan total kalori harian

4. **Hitung Makronutrien**
   - Masukkan total kalori harian
   - Pilih tujuan (Cutting/Maintenance/Bulking)
   - Lihat distribusi protein, karbohidrat, dan lemak

5. **Gunakan Meal Planner**
   - Cari makanan di search bar
   - Klik makanan yang diinginkan
   - Pilih waktu makan (1-4)
   - Masukkan jumlah dalam gram
   - Makanan akan otomatis ditambahkan ke tracker

6. **Catat Progress**
   - Masukkan tanggal, berat badan, dan body fat (opsional)
   - Klik "Tambah Progress"
   - Lihat riwayat progress dengan perubahan berat badan

## 💾 Penyimpanan Data

Semua data disimpan di browser menggunakan localStorage:
- Makanan harian yang sudah ditambahkan
- Riwayat progress
- Target kalori harian

Data akan tetap tersimpan meskipun browser ditutup.

## 🎯 Tips Penggunaan

1. **Untuk hasil akurat**: Gunakan kalkulator secara berurutan (BMI → BMR → TDEE → Macro)
2. **Target kalori**: Klik pada angka target kalori untuk mengubahnya
3. **Makanan**: Gunakan kata kunci umum seperti "nasi", "ayam", "telur" untuk pencarian
4. **Progress**: Catat progress secara konsisten untuk melihat tren perubahan

## 📝 Catatan

- Nilai nutrisi dalam database adalah perkiraan rata-rata
- Untuk hasil yang lebih akurat, konsultasikan dengan ahli gizi
- Formula perhitungan menggunakan standar internasional
- Website ini adalah alat bantu, bukan pengganti konsultasi medis

## 🔮 Fitur yang Bisa Ditambahkan

- Export data ke PDF/Excel
- Grafik progress visual
- Rekomendasi makanan berdasarkan tujuan
- Integrasi dengan API makanan
- Mode offline/PWA
- Multi-language support

## 📄 Lisensi

Proyek ini dibuat untuk keperluan edukasi dan penggunaan pribadi.

## 👨‍💻 Dibuat dengan ❤️

Untuk para gym enthusiast yang ingin mencapai tujuan fitness mereka dengan lebih terukur dan terencana.

---

**Selamat menggunakan dan semoga mencapai tujuan fitness Anda! 💪**

