import express from 'express';
import dotenv from 'dotenv';

import { supabase } from './Config/cfgSupabase.js';
// import { ArtistModel } from './Models/ArtistModel.js';
// import { SongModel } from './Models/SongModel.js';
// import { AlbumModel } from './Models/AlbumModel.js';

import { ArtistController } from './Controllers/ArtistController.js';
import { SongController } from './Controllers/SongController.js';
import { AlbumController } from './Controllers/AlbumController.js';

const port = dotenv.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from Express');
}); 

app.listen(4000, () => {
    console.log(`Express is running on http://localhost:${port}`);
})

// app.get('/artists', async (req, res) => {
//     const data = await ArtistModel.getArtistName();

//     res.send(data);
//     console.log(data);
// })

app.use(ArtistController);

// app.get('/songs', async (req, res) => {
//     const data = await SongModel.getSongs();  

//     res.send(data);
//     console.log(data);
// })

app.use(SongController);

// app.get('/albums', async (req, res) => {
//     const data = await AlbumModel.getAlbums();

//     res.send(data);
//     console.log(data);
// })

app.use(AlbumController);
