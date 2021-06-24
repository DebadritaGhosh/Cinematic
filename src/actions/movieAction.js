import axios from "axios";
import { popularMovie, recentMovie,searchMovie } from "../api";

export const fetchMovie = () => async (dispatch) => {
    const popularData = await axios.get(popularMovie());
    const recentData = await axios.get(recentMovie());

    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            popular: popularData.data.Search,
            current: recentData.data.Search,
        }
    })
}

export const fetchSearchMovie = (movie_name) => async (dispatch) => {
    const searchData = await axios.get(searchMovie(movie_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchData.data.Search,
        }
    })
}