import { supabase } from "../Config/cfgSupabase.js";

export class ArtistModel {
    static getArtistName = async() => {
        try {
            const { data, error } = await supabase
            .from('artists')
            .select('id, name');
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

    static async createArtist(formdata) {
        try {
            const { data, error } = await supabase.from('artists')
            .insert([
                {
                    name: formdata.name,
                    description: formdata.description
                }
            ])
        }
        catch(error) {
            console.log(error);
        }
    }
}