require('dotenv').config();
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const migrate = async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        await client.connect();
        console.log('Connected to Supabase PostgreSQL');

        const migrationPath = path.join(__dirname, 'migrations', '001_create_portfolio_tables.sql');
        const sql = fs.readFileSync(migrationPath, 'utf8');

        console.log('Running migration...');
        await client.query(sql);
        console.log('Migration successful!');

    } catch (err) {
        console.error('Migration failed:', err.message);
    } finally {
        await client.end();
    }
};

migrate();
