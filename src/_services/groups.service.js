import { authHeader } from '../_helpers';
import axios from 'axios';

export const groupService = {
    fetchLeague,
    fetchTopGames
};


function fetchLeague(id) {
    return axios.get(`/league/${id}`);
}

function fetchTopGames(id){
    return axios.get(`/league/${id}/top-games`);
}