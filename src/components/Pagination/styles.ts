import styled from "styled-components";

export const PaginationContainer = styled.div`
    max-width: 1120px;
    height: 870px; 

    background: ${props => props.theme["blue-800"]};

    border-radius: 30px;
    box-shadow: 0 6px 15px rgba(10, 10, 10, 2);
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    padding: 4rem 0 6rem;

    color: ${props => props.theme["white-500"]};
`;

export const PagesImagesContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    justify-items: center;

    padding-left: 80px;
    padding-right: 80px;
`;