import axios from 'axios';
import { authHeader} from '../_helpers';

export const gameService = {
    _gameUpdate
};


function _gameUpdate(formdata){
  
    return axios.post('/games/upload',formdata,{headers:authHeader()});
}
