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
 * @param {?} id 
 * @returns {?}
 */
export class SongModel {
    static getSongsById = async id => {
        try {
            const { data, error } = await supabase
            .from('songs')
            .select('title, artists( name )')
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

    static async createSong(formdata) {
        try {
            const { data, error } = await supabase.from('songs')
            .insert([
                {
                    title: formdata.title,
                    content: formdata.content,
                    lyrics: formdata.lyrics,
                    artist_id: formdata.artist_id
                }
            ])
        }
        catch(error) {
            console.log(error);
        }
    }
}