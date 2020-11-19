import axios from "axios";

export const get = (endpoint) => axios.get(endpoint);

export const post = (endpoint, data) => axios.post(endpoint, data);

export const getMovies = (endpoint, movieType) => axios.get(endpoint + `/?type=${movieType}`.toString().trim());

export const getMovie = (endpoint, id) => axios.get(endpoint + `/?id=${id}`.toString().trim());
