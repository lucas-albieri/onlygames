import axios from "axios";
import { api } from "./api";

export const ListGames = async () => {
    const result = await api.get('');
    return result.data;
};