import axios from 'axios';

export function tabPlaylist(){
    return {
        type: 'TAB_PLAYLIST',
        payload: axios({
            method: 'GET',
            url: 'localhost:8000/api/music/'
        })
    }
}

// export function creatTabPlaylist(value){
//     return {
//         type: 'CREATE_TAB_PLAYLIST',
//         payload: axios({
//             method: 'POST',
//             url: 'localhost:8000/api/music/',
//             data: value
//         })
//     }
// }