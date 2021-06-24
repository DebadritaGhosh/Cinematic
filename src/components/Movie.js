import styled from "styled-components";
import { useDispatch } from "react-redux";

const Movie = ({ title, year, id, image }) => {
    return (
        <MovieStyle >
            <MovieInfo>
                <h3>{title}</h3>
                <h2>{year}</h2>
            </MovieInfo>
            <Image>
                <img src={image} alt={image} />
            </Image>
        </MovieStyle>
    );
}

const MovieStyle = styled.div`
    flex: 1 1 20rem;
    min-height: 32rem;
    margin: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    border-radius: 5px;
    border: 1px solid #CAD5E2;
    cursor: pointer;
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 23rem;
        width: 70%;
        object-fit: cover;
    }
`;
const MovieInfo = styled.div`
    text-align: center;
    margin-bottom: 1rem;
`;

export default Movie;