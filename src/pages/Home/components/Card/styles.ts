import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    max-width: 30rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4rem;
    padding: 4rem 8rem;

    background: ${props => props.theme["white-500"]};
    gap: 3rem;

    border-radius: 12px;
    margin-bottom: 5rem;

    img {
        width: 150px;
    }

    p {
        text-align: center;
        font-size: 1.6rem;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: 5rem;

        margin-bottom: 0rem;
    }
`;
