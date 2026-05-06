# Vercel Deployment Guide - Porto Aira

Gunakan nilai di bawah ini untuk dimasukkan ke **Vercel Dashboard > Settings > Environment Variables**. 
Pastikan **TIDAK ADA SPASI** di awal atau akhir nilai.

### 1. Database URL (PASTI PAKAI INI)
**Key:** `DATABASE_URL`
**Value:** (Copy dari Supabase Dashboard bagian **Pooler > Mode: Transaction/Session**)
Contoh format yang benar:
`postgresql://postgres:Gracetavv242925@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres`

> **PENTING:** Pastikan host-nya berakhiran `.pooler.supabase.com` dan port-nya `6543`. Jangan pakai `db....supabase.co`.

### 2. Node Environment
**Key:** `NODE_ENV`
**Value:** `production`

### 3. Application Name
**Key:** `APP_NAME`
**Value:** `Portfolio Aira Maudy`

---

### Langkah Redeploy:
1. Setelah simpan Environment Variables di atas, buka tab **Deployments** di Vercel.
2. Klik titik tiga (`...`) pada deployment yang gagal.
3. Pilih **Redeploy**.
4. Aktifkan centang **"Use existing Build Cache"** (jika ada) dan klik **Redeploy**.
