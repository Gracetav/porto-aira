const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    const data = {
        name: 'Aira Maudy',
        nickname: 'Aira / Rara',
        age: 17,
        birthday: '04-09-09',
        major: 'RPL (Rekayasa Perangkat Lunak)',
        grade: '10 SMK',
        description: 'nama aku aira maudy biasa di panggil aira atau rara, aira masih kelas 10 SMK dan dia itu jurusan RPL (REKAYASA PERANGKAT LUNAK). tahun ini aira usianya pas 17 tahun dan aku ulang tahun pada 04-09-09.',
        personality: 'aira itu paling suka makeup sama makan, aira juga suka tidur, tapi aira sekalinya tidur itu bisa lama banget kaya hibernasi, aira kalau udah tidur itu paling gabisa banget di bangunin, dia bakal ngomel² sendiri kalau di bangunin.',
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
        ],
        socials: {
            tiktok: '@airaraaby',
            instagram: '@airamaudy._',
            whatsapp: '085691576503'
        }
    };
    res.render('index', { data });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
