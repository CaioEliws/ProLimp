import styled from "styled-components";

export const CleaningCardContainer = styled.div`
    width: 100%;
    margin-top: 5rem;
`;

export const CleaningCardContent = styled.main`
    display: flex;
    align-items: center;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        flex-direction: column;
    }

    img {
        width: 50rem;
        border-radius: 16px;

        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
            width: 100%;

            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 27rem;

        background: ${props => props.theme["white-500"]};
        padding: 2rem;

        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
            width: 100%;

            border-bottom-right-radius: 8px;
            border-bottom-left-radius: 8px;
        }

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

        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
            p {
                font-size: 1.6rem;
            }
        }

        @media (max-width: ${props => props.theme.breakpoints.mobile}) {
            p {
                font-size: 1.2rem;
            }
        }
    }
`;