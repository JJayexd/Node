import express from "express";
import { AlbumModel } from "../Models/AlbumModel.js";

export const AlbumController = express.Router();

AlbumController.get('/albums', async (req, res) => {
    const albums = await AlbumModel.getAlbums();
    res.send(albums);
    console.log(albums);
})

AlbumController.post('/albums', async (req, res) => {
    const data = await AlbumModel.createAlbum(req.body);
    res.send(data);
    console.log(data);
})

AlbumController.put('/albums', async (req, res) => {
    const data = await AlbumModel.updateAlbum(req.body);
    res.send(data);
    console.log(data);
})