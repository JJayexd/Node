import { supabase } from "../Config/cfgSupbase.js";

export class SongModel {
    static getSongs = async() => {
        try {
            const { data, error } = await supabase
            .from('songs')
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