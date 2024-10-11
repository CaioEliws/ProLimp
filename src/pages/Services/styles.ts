import styled from "styled-components";

import CleaningWallpaper from "../../assets/ContactWallpaper.png"

export const ServicesContainer = styled.div`
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

export const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 255vh;
    background-color: ${props => props.theme["white-500"]};

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        height: 200vh;
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        height: 545vh;
    }
`;

export const ServicesCardContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    justify-items: center;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
    }
`;

export const BackgroundContactWallpaper = styled.div`
    position: absolute;
    top: 2250px;
    left: 0;
    width: 100%;
    height: 420px;
    background-image: url(${CleaningWallpaper});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
`;