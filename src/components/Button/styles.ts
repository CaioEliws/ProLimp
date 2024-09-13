import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 100%;
    height: 5.6rem;

    background: ${props => props.theme["blue-100"]};
    color: ${props => props.theme["white"]};

    border: none;
    border-radius: 8px;

    padding: 1.2rem 2rem;

    cursor: pointer;

    transition: .3s;

    &:hover {
        background: ${props => props.theme["blue-500"]};
    }
`;