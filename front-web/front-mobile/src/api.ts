import axios from 'axios';

const API_URL = 'https://japadeliverv01.herokuapp.com';

export function fetchOrders(){
    return axios(`${API_URL}/orders`)
}
