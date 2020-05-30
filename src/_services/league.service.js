import { authHeader, handleResponse } from '../_helpers';
import axios from 'axios';

export const leagueService = {
    createLeague,
    fetchLeague,
    fetchTopGames,
    fetchHighestScorers,
};

function createLeague(leagueName,groups,formatId) {

    return axios.post('/league/create',{ leagueName, groups,formatId },{headers:authHeader()});

}

function fetchLeague(id) {
    return axios.get(`/league/${id}`);
}

function fetchTopGames(id){
    return axios.get(`/league/${id}/top-games`);
}

function fetchHighestScorers(id){
    return axios.get(`/league/${id}/highest-scorers`);
}