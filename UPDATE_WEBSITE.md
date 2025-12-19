# 🔄 Cara Update Website Setelah Hosting

Panduan lengkap untuk mengupdate website Anda setelah sudah di-host.

---

## 📋 Metode Update Berdasarkan Platform

### 🎯 **Metode 1: Drag & Drop (Netlify/Vercel Manual Upload)**

Jika Anda deploy dengan **drag & drop** tanpa Git:

#### Cara Update:
1. **Edit file** di folder lokal Anda (index.html, styles.css, script.js)
2. **Buka dashboard** Netlify/Vercel
3. **Drag & drop folder** yang sudah di-update
4. **Website otomatis update** dalam beberapa detik

**Kekurangan:** Harus upload manual setiap kali update

---

### ⚡ **Metode 2: Git Workflow (RECOMMENDED! ⭐)**

Jika Anda menggunakan **GitHub** untuk hosting:

#### Setup Git (Sekali Saja):

1. **Install Git** (jika belum):
   - Download: https://git-scm.com/download/win
   - Install dengan default settings

2. **Buka Terminal/PowerShell** di folder project:
   ```powershell
   cd "C:\Users\Windows\OneDrive\Documents\For Gym Rat"
   ```

3. **Inisialisasi Git** (jika belum):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Hubungkan ke GitHub:**
   ```bash
   git remote add origin https://github.com/USERNAME/gym-rat.git
   git branch -M main
   git push -u origin main
   ```

5. **Setup Auto-Deploy di Netlify/Vercel:**
   - **Netlify:** Settings → Build & deploy → Connect to Git
   - **Vercel:** Add New Project → Import from GitHub
   - Pilih repository Anda
   - Platform akan **otomatis deploy** setiap kali Anda push!

#### Cara Update (Setelah Setup Git):

1. **Edit file** di folder lokal (bisa pakai VS Code, Notepad++, dll)
2. **Buka Terminal** di folder project
3. **Commit dan Push:**
   ```bash
   git add .
   git commit -m "Update website: tambah fitur baru"
   git push
   ```
4. **Website otomatis update** dalam 30-60 detik! 🎉

**Keuntungan:** 
- ✅ Update sekali, deploy otomatis
- ✅ Riwayat perubahan tersimpan
- ✅ Bisa rollback jika ada masalah
- ✅ Bisa kolaborasi dengan tim

---

## 🛠️ Workflow Development yang Disarankan

### Setup Development Environment:

1. **Install VS Code** (Editor yang bagus):
   - Download: https://code.visualstudio.com
   - Install extension: "Live Server" untuk preview lokal

2. **Setup Git** (untuk auto-deploy):
   - Ikuti langkah di atas

3. **Workflow Harian:**
   ```
   Edit File → Test Lokal → Commit → Push → Auto Deploy
   ```

---

## 📝 Langkah Detail: Setup Git Workflow

### Step 1: Buat Repository di GitHub

1. Buka: https://github.com/new
2. Repository name: `gym-rat` (atau nama lain)
3. Pilih **Public**
4. **JANGAN** centang "Initialize with README"
5. Klik **Create repository**

### Step 2: Upload Project ke GitHub

**Opsi A: Via Command Line (Recommended)**

```powershell
# Buka PowerShell di folder project
cd "C:\Users\Windows\OneDrive\Documents\For Gym Rat"

# Inisialisasi Git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: Gym Rat website"

# Rename branch ke main
git branch -M main

# Hubungkan ke GitHub (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/gym-rat.git

# Push ke GitHub
git push -u origin main
```

**Opsi B: Via GitHub Desktop (Lebih Mudah)**

1. Download: https://desktop.github.com
2. Install dan login
3. File → Add Local Repository
4. Pilih folder "For Gym Rat"
5. Publish repository ke GitHub

### Step 3: Setup Auto-Deploy

#### Untuk Netlify:

1. Buka: https://app.netlify.com
2. Klik **Add new site** → **Import an existing project**
3. Pilih **GitHub**
4. Authorize Netlify
5. Pilih repository `gym-rat`
6. Klik **Deploy site**
7. **Selesai!** Setiap kali Anda push ke GitHub, Netlify akan otomatis deploy

#### Untuk Vercel:

1. Buka: https://vercel.com
2. **Add New Project**
3. Import dari GitHub
4. Pilih repository `gym-rat`
5. Klik **Deploy**
6. **Selesai!** Auto-deploy aktif

---

## 🔄 Cara Update Website (Setelah Setup Git)

### Metode 1: Via Command Line

```powershell
# 1. Buka PowerShell di folder project
cd "C:\Users\Windows\OneDrive\Documents\For Gym Rat"

# 2. Edit file Anda (bisa pakai VS Code, Notepad++, dll)
# Contoh: Edit index.html, styles.css, script.js

# 3. Lihat perubahan
git status

# 4. Tambahkan file yang diubah
git add .

# 5. Commit dengan pesan deskriptif
git commit -m "Update: tambah fitur kalkulator baru"

# 6. Push ke GitHub
git push

# 7. Website otomatis update dalam 30-60 detik!
```

### Metode 2: Via VS Code (Lebih Mudah)

1. **Buka folder** di VS Code:
   - File → Open Folder → Pilih "For Gym Rat"

2. **Edit file** yang diinginkan

3. **Commit & Push:**
   - Klik icon **Source Control** (sidebar kiri)
   - Ketik pesan commit (contoh: "Update website")
   - Klik **✓ Commit**
   - Klik **↑ Push**

4. **Website otomatis update!**

### Metode 3: Via GitHub Desktop

1. **Buka GitHub Desktop**
2. **Edit file** di VS Code atau editor lain
3. Di GitHub Desktop, Anda akan lihat perubahan
4. **Tulis commit message**
5. Klik **Commit to main**
6. Klik **Push origin**
7. **Website update otomatis!**

---

## 🎯 Best Practices

### 1. Commit Message yang Baik:
```bash
# ❌ Buruk
git commit -m "update"

# ✅ Baik
git commit -m "Update: tambah fitur BMI calculator"
git commit -m "Fix: perbaiki bug di meal planner"
git commit -m "Style: update warna background"
```

### 2. Test Sebelum Push:
- Buka `index.html` di browser lokal
- Test semua fitur
- Pastikan tidak ada error di console (F12)

### 3. Backup Sebelum Update Besar:
```bash
# Buat branch baru untuk eksperimen
git checkout -b experimental-feature

# Edit dan test
# Jika bagus, merge ke main
git checkout main
git merge experimental-feature
git push
```

---

## 🔍 Cara Cek Apakah Website Sudah Update

1. **Buka website** di browser
2. **Tekan Ctrl + F5** (hard refresh) untuk clear cache
3. Atau buka **Incognito/Private mode**
4. Cek perubahan Anda

**Note:** Kadang browser cache, jadi perlu hard refresh!

---

## 🐛 Troubleshooting

### Problem: Perubahan tidak muncul
**Solusi:**
- Hard refresh: `Ctrl + F5`
- Clear browser cache
- Cek di Incognito mode
- Tunggu 1-2 menit (deploy butuh waktu)

### Problem: Git push error
**Solusi:**
```bash
# Pull dulu sebelum push
git pull origin main

# Jika ada conflict, resolve dulu
# Lalu push lagi
git push
```

### Problem: Website error setelah update
**Solusi:**
- Cek browser console (F12) untuk error
- Rollback ke commit sebelumnya:
  ```bash
  git log  # Lihat history
  git checkout <commit-hash>  # Rollback
  git push --force
  ```

---

## 📊 Perbandingan Metode

| Metode | Kemudahan | Auto-Deploy | Riwayat | Recommended |
|--------|-----------|-------------|---------|-------------|
| Drag & Drop | ⭐⭐⭐⭐⭐ | ❌ | ❌ | Untuk sekali pakai |
| Git + Auto-Deploy | ⭐⭐⭐⭐ | ✅ | ✅ | ⭐ **BEST!** |

---

## 🎉 Kesimpulan

**Untuk update yang mudah dan otomatis:**

1. ✅ **Setup Git** (sekali saja)
2. ✅ **Connect ke GitHub**
3. ✅ **Setup Auto-Deploy** di Netlify/Vercel
4. ✅ **Edit → Commit → Push** setiap kali update

**Workflow:**
```
Edit File → git add . → git commit → git push → Auto Deploy! 🚀
```

---

**Butuh bantuan?** 
- Baca dokumentasi Git: https://git-scm.com/doc
- Baca dokumentasi GitHub: https://docs.github.com
- Baca dokumentasi Netlify: https://docs.netlify.com

