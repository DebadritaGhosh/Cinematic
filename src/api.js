const key = '&apikey=cb2059a6';

export const popularMovie = () => `https://www.omdbapi.com/?s=captain${key}`; 
export const recentMovie = () => `https://www.omdbapi.com/?s=hulk${key}`;
export const searchMovie = (movie_name) => `https://www.omdbapi.com/?s=${movie_name}${key}`;