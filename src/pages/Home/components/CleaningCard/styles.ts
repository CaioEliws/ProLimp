import styled from "styled-components";

export const CleaningCardContainer = styled.div`
    width: 100%;
    margin-top: 5rem;
`;

export const CleaningCardContent = styled.main`
    display: flex;
    align-items: center;

    img {
        width: 50rem;
        border-radius: 16px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 27rem;

        background: ${props => props.theme["white-500"]};
        padding: 2rem;

        h1 {
            font-size: 2.4rem;
            text-align: center;
            
            color: ${props => props.theme["blue-500"]};

            margin-bottom: 2rem;
        }

        p {
            font-size: 1.8rem;
            text-align: center;

            color: ${props => props.theme["blue-500"]};
            font-weight: 500;
        }
    }
`;