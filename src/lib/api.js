export default class MovieDbApi{
    apiBaseUrl= 'https://api.themoviedb.org/3';
    apiKey;

    constructor(apiKey){
        this.apiKey=apiKey;
    }

    getTrendingMovies = async(page=1) =>{
        const response = await fetch(
            `${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
        );
        return response.json();
    }

    getMovie = async(id) =>{
        const response = await fetch(
            `${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=recommendations`
        );
        return response.json();
    }

    getUpcomingMovies = async() =>{
        const response = await fetch(
            `${this.apiBaseUrl}/movie/upcoming?api_key=${this.apiKey}`
        );
        return response.json();
    }
}
