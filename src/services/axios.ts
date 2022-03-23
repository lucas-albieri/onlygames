import axios from "axios";

export function getAPIClient() {

    const api = axios.create({
        baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/games'
    });
    api.defaults.headers.common['X-RapidAPI-Host'] = 'free-to-play-games-database.p.rapidapi.com'
    api.defaults.headers.common['X-RapidAPI-Key'] = '5117844750msh805b9305b3e787dp1b8babjsnf04f5c0bda9a'

    return api;
}