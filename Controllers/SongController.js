import express from "express"
import { SongModel } from "../Models/SongModel.js"

export const SongController = express.Router();

// SongController.get('/songs', async (req, res) => {  
//     const songs = await SongModel.getSongs();  
//     res.send(songs);
//     console.log(songs);
// })

SongController.get('/songs/:id([0-9A-Za-z]*)', async (req, res) => {  
    const single = await SongModel.getSongsById(req.params.id);  
    res.send(single);
    console.log(single);
})

SongController.post('/songs', async (req, res) => {  
    const data = await SongModel.createSong(req.params.id);
    res.send(data);
    console.log(data);
})