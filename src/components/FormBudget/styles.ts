import styled from "styled-components";

export const Form = styled.form`
    width: 40rem;

    display: flex;
    flex-direction: column;

    background: ${props => props.theme["blue-800"]};

    padding: 5rem 3rem;
    gap: 1rem;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);

    input, select, textarea {
        width: 100%;

        padding: 1.2rem 2.4rem;

        background: ${props => props.theme["white-500"]};
        
        border: none;
        border-radius: 8px;

        font-size: 1.4rem;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    padding-bottom: 1rem;

    color: ${props => props.theme["white-500"]};
`;