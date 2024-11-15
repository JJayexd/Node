import express from "express";
import { ArtistModel } from "../Models/ArtistModel.js";

export const ArtistController = express.Router();

ArtistController.get('/artists', async (req, res) => {
    const artists = await ArtistModel.getArtistName();
    res.send(artists);
    console.log(artists);
})