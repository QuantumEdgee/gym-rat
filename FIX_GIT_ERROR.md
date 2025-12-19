# 🔧 Fix: Repository Not Found Error

## ❌ Error yang Terjadi:
```
remote: Repository not found.
fatal: repository 'https://github.com/QuantumEdgee/gym-rat.git/' not found
```

## 🔍 Penyebab:
1. Repository belum dibuat di GitHub
2. Nama repository salah
3. Belum login ke GitHub via Git
4. Username tidak memiliki akses ke repository

---

## ✅ Solusi Step-by-Step:

### Step 1: Buat Repository di GitHub

1. **Buka GitHub:**
   - Pergi ke: https://github.com/new
   - Atau klik tombol **"New"** di GitHub

2. **Isi Form:**
   - **Repository name:** `gym-rat` (atau nama lain yang Anda inginkan)
   - **Description:** (opsional) "Website kalkulator gizi dan kalori harian"
   - **Visibility:** Pilih **Public** (untuk hosting gratis)
   - **JANGAN centang** "Add a README file"
   - **JANGAN centang** "Add .gitignore"
   - **JANGAN centang** "Choose a license"

3. **Klik "Create repository"**

4. **Copy URL repository** yang muncul (akan seperti: `https://github.com/QuantumEdgee/gym-rat.git`)

---

### Step 2: Setup Git Authentication

#### Opsi A: Personal Access Token (Recommended)

1. **Buka GitHub Settings:**
   - Pergi ke: https://github.com/settings/tokens
   - Atau: GitHub → Profile Picture → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token:**
   - Klik **"Generate new token"** → **"Generate new token (classic)"**
   - **Note:** `gym-rat-deploy`
   - **Expiration:** Pilih durasi (90 days atau No expiration)
   - **Scopes:** Centang **`repo`** (semua checkbox di bawah repo)
   - Klik **"Generate token"**

3. **Copy Token** (hanya muncul sekali! Simpan dengan baik)

4. **Setup Git Credential:**
   ```powershell
   git config --global credential.helper wincred
   ```

#### Opsi B: GitHub CLI (Lebih Mudah)

1. **Install GitHub CLI:**
   - Download: https://cli.github.com
   - Install dengan default settings

2. **Login:**
   ```powershell
   gh auth login
   ```
   - Pilih **GitHub.com**
   - Pilih **HTTPS**
   - Pilih **Login with a web browser**
   - Ikuti instruksi di browser

---

### Step 3: Verifikasi Remote URL

Pastikan URL repository benar:

```powershell
# Cek remote yang sudah di-set
git remote -v

# Jika salah, hapus dan tambah lagi
git remote remove origin
git remote add origin https://github.com/QuantumEdgee/gym-rat.git

# Verifikasi lagi
git remote -v
```

---

### Step 4: Push ke GitHub

Setelah repository dibuat dan authentication setup:

```powershell
# Pastikan Anda di folder project
cd "C:\Users\Windows\OneDrive\Documents\For Gym Rat"

# Cek status
git status

# Jika belum commit, commit dulu
git add .
git commit -m "Initial commit: Gym Rat website"

# Push ke GitHub
git push -u origin main
```

**Saat diminta username/password:**
- **Username:** `QuantumEdgee` (username GitHub Anda)
- **Password:** Gunakan **Personal Access Token** (bukan password GitHub!)

---

## 🎯 Alternatif: Via GitHub Desktop (Paling Mudah!)

Jika command line terlalu rumit:

1. **Download GitHub Desktop:**
   - https://desktop.github.com
   - Install dan login dengan akun GitHub

2. **Buat Repository:**
   - File → New Repository
   - Name: `gym-rat`
   - Local Path: `C:\Users\Windows\OneDrive\Documents\For Gym Rat`
   - Pilih **Public**
   - Klik **Create Repository**

3. **Publish ke GitHub:**
   - Klik **Publish repository**
   - Centang **"Keep this code private"** jika ingin private (tapi untuk hosting gratis harus Public)
   - Klik **Publish Repository**

4. **Selesai!** Repository sudah di GitHub

---

## 🔍 Troubleshooting

### Problem: Masih error "Repository not found"

**Solusi:**
1. Pastikan repository sudah dibuat di GitHub
2. Cek username benar: `QuantumEdgee`
3. Cek nama repository benar: `gym-rat`
4. Coba buka URL di browser: `https://github.com/QuantumEdgee/gym-rat`
   - Jika tidak bisa dibuka, repository belum dibuat

### Problem: Authentication failed

**Solusi:**
```powershell
# Clear credential cache
git credential-manager-core erase
# Atau untuk Windows:
git credential-manager erase

# Coba push lagi, akan minta login
git push -u origin main
```

### Problem: Permission denied

**Solusi:**
- Pastikan menggunakan Personal Access Token, bukan password
- Pastikan token memiliki permission `repo`
- Generate token baru jika perlu

---

## ✅ Checklist Sebelum Push:

- [ ] Repository sudah dibuat di GitHub
- [ ] Nama repository benar: `gym-rat`
- [ ] Username benar: `QuantumEdgee`
- [ ] Sudah login ke GitHub (via CLI atau Desktop)
- [ ] File sudah di-commit (`git commit`)
- [ ] Remote URL benar (`git remote -v`)

---

## 🚀 Setelah Berhasil Push:

1. **Buka repository di GitHub:**
   - https://github.com/QuantumEdgee/gym-rat

2. **Setup Auto-Deploy di Netlify/Vercel:**
   - Netlify: Add new site → Import from GitHub → Pilih `gym-rat`
   - Vercel: Add New Project → Import from GitHub → Pilih `gym-rat`

3. **Website otomatis deploy!** 🎉

---

## 💡 Tips:

- **Gunakan GitHub Desktop** jika command line terlalu rumit
- **Simpan Personal Access Token** dengan baik (jangan share!)
- **Repository harus Public** untuk hosting gratis di GitHub Pages
- **Nama repository** bisa berbeda, sesuaikan dengan URL yang Anda buat

---

**Masih error?** Coba langkah-langkah di atas satu per satu dan pastikan setiap step berhasil sebelum lanjut ke step berikutnya!

