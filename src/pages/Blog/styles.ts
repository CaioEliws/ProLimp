import styled from "styled-components";

export const BlogContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    h1 {
        font-size: 5.6rem;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 5rem;
        margin-bottom: 5rem;

        color: ${props => props.theme["blue-500"]};

        @media (max-width: ${props => props.theme.breakpoints.mobile}) {
            text-align: center;
            margin-top: 0rem;
        }
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const BlogCardsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    justify-items: center;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;