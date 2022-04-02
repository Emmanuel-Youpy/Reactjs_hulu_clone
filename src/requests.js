const API_KEY = "bf1e51bb38e2889e5b5d2cf7d1aeb55c";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,

  fetchScifi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,

  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,

  fetchTv: `/tv/{tv_id}/season/{season_number}?api_key=${API_KEY}&language=en-US`,

  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,

  fetchMovie: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,

  //   fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,

  //   fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,

  //   fetchSimilar: `/movie/{movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`,

  // fetchTrending: https: `/trending/all/day?api_key=<<api_key>>`
};
