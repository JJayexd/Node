import express from "express"
import { SongModel } from "../Models/SongModel.js"

export const SongController = express.Router();

SongController.get('/songs', async (req, res) => {  
    const songs = await SongModel.getSongs();  
    res.send(songs);
    console.log(songs);
})  