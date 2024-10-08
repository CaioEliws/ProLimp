import { Link } from "react-router-dom";

import styled from "styled-components";

export const PagesImagesContainer = styled.div`
    width: 20rem;
    height: 20rem;

    background: ${props => props.theme["white-500"]};

    border-radius: 12px;

    overflow: hidden;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;

    &:hover {
        background: ${props => props.theme["white-900"]};
        transform: scale(1.05)
    }
`;

export const PageImageContent = styled(Link)`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 2rem;
    gap: 2rem;

    text-align: center;

    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const PageImage = styled.div`
    display: flex;
    flex-direction: column;

    width: 120px;
    height: 120px;
`;

export const PageTitle = styled.p`
    font-size: 2rem;
    
    transition: color 0.3s ease-in-out;

    ${PagesImagesContainer}:hover & {
        color: ${props => props.theme["blue-100"]};
    }
`;