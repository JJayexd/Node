import { supabase } from "../Config/cfgSupabase.js";

export class AlbumModel {
    static getAlbums = async() => {
        try {
            const { data, error } = await supabase
            .from('albums')
            .select('id, title, artists ( name ), release_date');
        if (error) {
            throw new Error(error.message);
        }
        else {
            return data;
        }
    }
        catch(error) {
            console.log(error);
        }
    }

    static async createAlbum (formdata) {
        try {
            const { data, error } = await supabase.from('albums')
            .insert([
                {
                    title: formdata.title,
                    artist_id: formdata.artist_id,
                    description: formdata.description
                }
            ])
        }
        // Har prøvet noget nyt her for at teste om det giver samme resultat.
        catch (error) {
            throw new Error(error.message);
        }
    }
}