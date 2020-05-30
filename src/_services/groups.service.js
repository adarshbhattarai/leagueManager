import { authHeader } from '../_helpers';
import axios from 'axios';

export const groupService = {
    fetchTable
};


function fetchTable(leagueId, groupId){
    return axios.get(`/${leagueId}/group-table/${groupId}`);
}