import { authHeader } from '../_helpers';
import axios from 'axios';

export const groupService = {
    fetchTable,
    getGames
};


function fetchTable(leagueId, groupId){
    return axios.get(`/${leagueId}/group-table/${groupId}`);
}

function getGames(leagueId, groupId){
    return axios.get(`/${leagueId}/group-games/${groupId}`);
}