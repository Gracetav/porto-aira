const express = require('express');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', async (req, res) => {
    try {
        // Fetch basic profile
        const profileRes = await pool.query('SELECT * FROM public.profile LIMIT 1');
        const profile = profileRes.rows[0];

        if (!profile) {
            return res.status(404).send('Profile data not found in database.');
        }

        // Hardcoded data for items not yet in tables (matching the initial PDF content)
        // You can add these to the database tables later if you want total control.
        const dynamicData = {
            ...profile,
            hobbies: ['Makeup', 'Dengerin Musik', 'Menggambar'],
            music: ['Kahitna', 'Sheila on 7', 'Dewa', 'Ari Lasso', 'Afgan'],
            foods: ['CUMI', 'Nasi Goreng', 'Kwetiau', 'Soto Tangkar', 'Bakso'],
            drinks: ['Matcha', 'Vanilla'],
            pets: [
                { name: 'Kucing', count: 5, desc: 'tidur aja sama 5 kucing di kamarnya' },
                { name: 'Monyet', count: 1, desc: 'agak aneh si tapi aira juga suka sama hewan hewan unik' }
            ],
            dislikes: [
                'Ditinggal tiba-tiba (saat chat)',
                'Cowo yang suka liat cewe random di sosmed',
                'Cowo yang suka follow/like cewe random atau simpen video cewe geol'
            ]
        };

        res.render('index', { data: dynamicData });
    } catch (err) {
        console.error('Error fetching data:', err.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
