require('dotenv').config();
const { Client } = require('pg');

const testConnection = async () => {
    console.log('Testing connection to:', process.env.DATABASE_URL.split('@')[1]); // Sembunyikan password
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log('✅ Berhasil konek ke Supabase!');
        const res = await client.query('SELECT name FROM public.profile LIMIT 1');
        console.log('📊 Data Profile ditemukan:', res.rows[0].name);
    } catch (err) {
        console.error('❌ Koneksi Gagal:', err.message);
        if (err.message.includes('ENOTFOUND')) {
            console.log('💡 TIP: Gunakan Connection Pooler (Port 6543) dari Supabase Dashboard!');
        }
    } finally {
        await client.end();
    }
};

testConnection();
