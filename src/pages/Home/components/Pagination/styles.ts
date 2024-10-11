import styled from "styled-components";

export const PaginationContainer = styled.div`
    max-width: 1120px;
    height: 870px; 

    background: ${props => props.theme["blue-800"]};

    border-radius: 30px;
    box-shadow: 0 6px 15px rgba(10, 10, 10, 2);

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        height: 1350px; 
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        height: auto;
        padding-bottom: 5rem; 
    }
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    padding: 4rem 0 5rem;

    color: ${props => props.theme["white-500"]};

    font-size: 3.6rem;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        font-size: 2rem;
    }
`;

export const PagesImagesContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    justify-items: center;

    margin: 0 5rem;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);

        margin: 0 10rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
    }
`;