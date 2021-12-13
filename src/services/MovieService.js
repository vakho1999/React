import axios from 'axios';
import DATA, {DATA2} from '../injectedData';

const USER_API_BASE_URL = 'https://api.imovies.cc/api/v1/trailers/trailer-day';

class MovieService {
    async getMoviesByDefault(){
        let headers = new Headers();
        headers.append('User-Agent', 'PostmanRuntime/7.26.8');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', '*/*');
        headers.append('Host','http://azet.com');

        let per_page = 20 // defaultad 20 chanaweri
        let page = 1 // defaultad pirveli gverdi
        let queryParams = {
            "per_page": per_page,
            "page": page
        }
        // return DATA;
        return await axios.get(USER_API_BASE_URL + "?page="+queryParams.page+"&per_page="+queryParams.per_page ).then( res => res.data)

    }
    async getMoviesByFilter({query}){
        let headers = new Headers();
        headers.append('User-Agent', 'PostmanRuntime/7.26.8');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', '*/*');
        headers.append('Host','http://azet.com');
        let per_page = 10 // defaultad 20 chanaweri
        let page = 1 
        let queryParams = {

            "per_page": per_page,
            "page": page,
            "keywords": query,
            
        }
        //  return  await DATA2;
       
        return await axios.get(`https://api.imovies.cc/api/v1/multi-search?keywords=${query}&filters%5Btype%5D=movie%2Ccast&page=1&per_page=10`).then( res => res.data)

    }
}

export default MovieService;