import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../actions/movieAction";
import styled from "styled-components";
import Movie from "../components/Movie";
import { useLocation } from "react-router-dom";
const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    useState(() => dispatch(fetchMovie()),
        [dispatch]
    );

    //GETTING THE DATA
    const { popular, current, searched } = useSelector(state => state.movie)

    return (
        <Container>
            {searched.length ? (
                <div className="searched">
                    <TitleStyle>Searched Movies</TitleStyle>
                    <Movies>
                        {
                            searched.map((movie) => (<Movie
                                key={movie.imdbID}
                                id={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                type={movie.Type}
                                image={movie.Poster}
                            />))
                        }
                    </Movies>
                </div>
            ) : ("")}
            <TitleStyle>Popular Movies</TitleStyle>
            <Movies>
                {
                    popular.map((movie) => <Movie
                        key={movie.imdbID}
                        id={movie.imdbID}
                        title={movie.Title}
                        year={movie.Year}
                        type={movie.Type}
                        image={movie.Poster}
                    />)
                }
            </Movies>
            <TitleStyle>Recent Movies</TitleStyle>
            <Movies>
                {
                    current.map((movie) => <Movie
                        key={movie.imdbID}
                        id={movie.imdbID}
                        title={movie.Title}
                        year={movie.Year}
                        type={movie.Type}
                        image={movie.Poster}
                    />)
                }
            </Movies>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
`

const Movies = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
const TitleStyle = styled.h1`
    margin: 1.5rem;
    
`;
export default Home;