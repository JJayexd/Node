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
}