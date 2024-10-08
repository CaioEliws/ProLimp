import styled from "styled-components";

export const AmountInputContainer = styled.div`
    margin-top: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 3rem;

    > input {
        text-align: center;
        
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 100px;

        border: 2px solid #ccc;

        padding: 0 0.5rem;
    }

    > input::-webkit-inner-spin-button,
    > input::-webkit-outer-spin-button {
        margin: 0;
    }

    > button {
        width: 24rem;
        padding: 1.6rem;

        color: white;
        background: #26acd8;

        font-size: 2rem;
        
        border: none;
        border-radius: 32px;

        cursor: pointer;

        transition: .2s;
        &:hover { 
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
            background: #0f4974;
        }
    }
`;