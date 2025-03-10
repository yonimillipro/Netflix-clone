import axios from 'axios';

const instance = axios.create({ 
    baseURL:"https://api.themoviedb.org/3/",
});                     
 


 //inst.get('foo-bar');
 //baseURL:"https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

export default instance;