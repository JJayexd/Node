import { supabase } from "../Config/cfgSupabase.js";
import { ArtistModel } from "./ArtistModel.js";

// export class SongModel {
//     static getSongs = async() => {
//         try {
//             const { data, error } = await supabase
//             .from('songs')
//             .select('id, title, content, created_at, artist_id, artists ( name )');
//         if (error) {
//             throw new Error(error.message);
//         }
//         else {
//             return data;
//         }
//     }
//         catch(error) {
//             console.log(error);
//         }
//     }
// }


/**
 * 
 * @param {string} id 
 * @returns {Promise}
 */
export class SongModel {
    static getSongsById = async id => {
        try {
            const { data, error } = await supabase
            .from('songs')
            .select('title')
            .eq('id', id)
            .single()
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