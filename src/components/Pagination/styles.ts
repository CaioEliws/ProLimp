import styled from "styled-components";

export const PaginationContainer = styled.div`
    max-width: 1080px;
    height: 700px; 

    background: ${props => props.theme["blue-800"]};

    border-radius: 12px;
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    padding: 4rem 0 4rem;

    color: ${props => props.theme["white-500"]};
`;