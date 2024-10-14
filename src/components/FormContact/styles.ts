import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5rem;
    padding: 8rem 6rem;
    
    background: ${props => props.theme["blue-800"]};
    border-radius: 16px;
    
    margin-top: 7rem;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        padding: 5rem 3rem;
    }

    input {
        width: 100%;

        padding: 1.2rem 2.4rem;

        background: ${props => props.theme["white-500"]};

        border: none;
        border-radius: 8px;

        font-size: 1.8rem;
    }

    div {
        width: 100%;
        display: flex;
        gap: 5rem;

        @media (max-width: 425px) {
            flex-direction: column;
        }
    }

    textarea {
        width: 100%;
        height: 120px;

        padding: 1.2rem 2.4rem;

        background: ${props => props.theme["white-500"]};

        border: none;
        border-radius: 8px;

        font-size: 1.8rem;
        resize: none;
    }
`;

export const FormSubmitButton = styled.button`
    width: 17rem;
    height: 5rem;

    border: none;
    background: ${props => props.theme["white-500"]};
    color: ${props => props.theme["blue-500"]};

    border-radius: 30px;
    border: 3px solid ${props => props.theme["blue-500"]};

    font-size: 1.8rem;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

    cursor: pointer;
    transition: .2s;

    &:hover {
        color: ${props => props.theme["white-500"]};
        background: ${props => props.theme["blue-500"]};
    }
`;