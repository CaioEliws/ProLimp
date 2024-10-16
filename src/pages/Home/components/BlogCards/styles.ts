import styled from "styled-components";

import { Link } from "react-router-dom";

export const BlogCardsContainer = styled(Link)`
    width: 35rem;

    background: ${props => props.theme["white-500"]};
    border-radius: 16px;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        width: 24rem;
    }
    
    transition: .2s;
    &:hover {
        background: ${props => props.theme["white-900"]};

        img {
            transition: .2s;
            opacity: 0.8;
        }
    }

    img {
        width: 100%;
        height: 30rem;

        border-top-right-radius: 16px;
        border-top-left-radius: 16px;

        object-fit: cover;

        @media (max-width: ${props => props.theme.breakpoints.mobile}) {
            height: 20rem;
        }
    }

    p {
        font-size: 2.4rem;
        padding: 2.4rem;

        color: ${props => props.theme["blue-500"]};

        text-align: center;
        font-weight: 500;
    }
`;