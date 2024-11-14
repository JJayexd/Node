import express from 'express';
import dotenv from 'dotenv';

import { supabase } from './Config/cfgSupbase.js';
import { ArtistModel } from './Models/ArtistModel.js';
import { SongModel } from './Models/songModel.js';

const port = dotenv.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express');
}); 

app.listen(4000, () => {
    console.log(`Express is running on http://localhost:${port}`);
})

app.get('/songs', async (req, res) => {
    const data = SongModel.getSongs();

    res.send(data);
    console.log(data);
})

app.get('/artists', async (req, res) => {
    const data = ArtistModel.getArtistName();

    res.send(data);
    console.log(data);
})

app.get('/albums', async (req, res) => {
    const { data, error } = await supabase.from('albums').select('id, title');

    if (error) {
        throw new Error(error);
    } else {
        res.send(data);

        console.log(data);
    }
})
