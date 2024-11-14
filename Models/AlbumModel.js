import { supabase } from "../Config/cfgSupabase.js";

export class AlbumModel {
    static getAlbums = async() => {
        try {
            const { data, error } = await supabase
            .from('albums')
            .select('*');
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