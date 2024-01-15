import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://homolog.evnts.com.br',
});
