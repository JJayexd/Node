import express from "express";
import { AlbumModel } from "../Models/AlbumModel.js";

export const AlbumController = express.Router();

AlbumController.get('/albums', async (req, res) => {
    const albums = await AlbumModel.getAlbums();
    res.send(albums);
    console.log(albums);
})