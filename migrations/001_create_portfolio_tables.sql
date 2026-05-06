-- Create Profile table for Aira's Portfolio
CREATE TABLE IF NOT EXISTS public.profile (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255),
    age INT,
    birthday VARCHAR(50),
    major VARCHAR(255),
    grade VARCHAR(50),
    description TEXT,
    personality TEXT,
    socials JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Hobbies table
CREATE TABLE IF NOT EXISTS public.hobbies (
    id SERIAL PRIMARY KEY,
    profile_id INT REFERENCES public.profile(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL
);

-- Create Favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
    id SERIAL PRIMARY KEY,
    profile_id INT REFERENCES public.profile(id) ON DELETE CASCADE,
    category VARCHAR(50), -- food, drink, pet
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Insert Initial Data (Aira's Data)
INSERT INTO public.profile (name, nickname, age, birthday, major, grade, description, personality, socials)
VALUES (
    'Aira Maudy', 
    'Aira / Rara', 
    17, 
    '04-09-09', 
    'RPL (Rekayasa Perangkat Lunak)', 
    '10 SMK', 
    'nama aku aira maudy biasa di panggil aira atau rara, aira masih kelas 10 SMK dan dia itu jurusan RPL (REKAYASA PERANGKAT LUNAK). tahun ini aira usianya pas 17 tahun dan aku ulang tahun pada 04-09-09.',
    'aira itu paling suka makeup sama makan, aira juga suka tidur, tapi aira sekalinya tidur itu bisa lama banget kaya hibernasi, aira kalau udah tidur itu paling gabisa banget di bangunin, dia bakal ngomel² sendiri kalau di bangunin.',
    '{"tiktok": "@airaraaby", "instagram": "@airamaudy._", "whatsapp": "085691576503"}'
) ON CONFLICT DO NOTHING;
