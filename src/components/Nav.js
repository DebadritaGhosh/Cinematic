import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {fetchSearchMovie} from "../actions/movieAction";
const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");
    const inputHandler = (e) => {
        setTextInput(e.target.value);

    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchSearchMovie(textInput));
        setTextInput("");
        
    }
    return (
        <NavStyle>
            <h1>Cinematic</h1>
                <input value={textInput} type="text" onChange={inputHandler} />
                <button onClick={submitHandler}>Search</button>
        </NavStyle>
    );
}

const NavStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Great Vibes', cursive;
        color: #E03B8B;
        font-size: 3rem;
    }
    input{
        padding: 0.5rem;
        width: 30%;
    }
    button{
        width: 15%;
        padding: 0.5rem;
        margin-top: 1rem;
        border: 1px solid #758283;
        cursor: pointer;
        background-color: #CAD5E2;
        border-radius: 5px;
    }
`;

export default Nav;