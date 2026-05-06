const express = require('express');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Supabase Connection
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/debug-images', (req, res) => {
    const fs = require('fs');
    const imagesDir = path.join(__dirname, 'public', 'images');
    try {
        const files = fs.readdirSync(imagesDir);
        res.json({ dir: imagesDir, files });
    } catch (err) {
        res.json({ error: err.message, dir: imagesDir });
    }
});

app.get('/', async (req, res) => {
    try {
        // Fetch basic profile using Supabase SDK
        const { data: profile, error } = await supabase
            .from('profile')
            .select('*')
            .single();

        if (error || !profile) {
            console.error('Supabase error:', error);
            return res.status(404).send('Profile data not found in database.');
        }

        // Hardcoded data for items not yet in tables
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
            dislikes: [],
            socials: {
                tiktok: profile.socials.tiktok,
                instagram: profile.socials.instagram
            }
        };

        res.render('index', { data: dynamicData });
    } catch (err) {
        console.error('Internal Error:', err.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
