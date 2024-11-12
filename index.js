import express from 'express';
import dotenv from 'dotenv';

import { supabase } from './config/config.supabase.js';

const port = dotenv.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express');
}); 

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/contact', (req, res) => {
    res.send('Contact');
})

app.get('/products', (req, res) => {
    res.send('Products');
})

app.listen(4000, () => {
    console.log(`Express is running on http://localhost:${port}`);
})

app.get('/test', async (req, res) => {
    const { data, error } = await supabase.from('artists').select('*');

    if (error) {
        throw new Error(error);
    } else {
        res.send(data);

        console.log(data);
    }
})