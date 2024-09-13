import styled from "styled-components";


export const HomeContainer = styled.main`
    width: 100%;
    height: 200vh;
    max-width: 1120px;
    margin: 0 auto;
`;

export const Budgets = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 10rem;
    margin-bottom: 22rem;
`;

export const TextBudgets = styled.div`
    width: 50rem;
    text-align: start;

    display: flex;
    align-items: center;
    
    h1 {
        font-size: 2rem;
        font-weight: 400;
    }

    h2 {
        font-size: 2rem;
        font-weight: 600;
        color: ${props => props.theme["blue-800"]};
    }
`;