import styled from "styled-components";

export const ServicesCardContainer = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: ${props => props.theme["white"]};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;

    &:hover {
        background: ${props => props.theme["white-900"]};
    }

    border-radius: 16px;

    img {
        width: 34rem;
        height: 25rem;
        object-fit: contain;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 7rem 2.4rem 0 2.4rem;
    }

    h2 {
        font-size: 2.4rem;
        margin: 7rem 0 5rem; 

        color: ${props => props.theme["blue-500"]};
    }
`;