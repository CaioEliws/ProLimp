import styled from "styled-components";
import WallpaperImage from "./assets/wallpaper2.png"
import WallpaperImage2 from "./assets/wallpaper3.png"
import WallpaperImage3 from "./assets/wallpaper4.png"
import WallpaperImage4 from "./assets/wallpaper5.png"
import { Link } from "react-router-dom";

export const HomeContainer = styled.main`
    width: 100%;
    height: auto;
    max-width: 1120px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        height: auto;
    }
`;

export const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1100px;
    background-image: url(${WallpaperImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    margin-top: 80px;

    @media (max-width: 425px) {
        margin-top: 2px;
        height: 500px;
    }
`;

export const Budgets = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 10rem;
    margin-bottom: 22rem;

    @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;

        margin-top: 0rem;
        margin-bottom: 5rem;
    }
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

    @media (max-width: 425px) {
        width: 100%;
        margin-bottom: 5rem;

        margin-top: 30rem;
    }
`;

export const BackgroundWrapper1 = styled.div`
    position: absolute;
    top: 900px;
    left: 0;
    width: 100%;
    height: 1100px;
    background-image: url(${WallpaperImage2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -2;
`;


export const Copy = styled.div`
    width: 100%;
    margin-top: 20rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
        width: 30rem;

        @media (max-width: 425px) {
            width: 100%;
        }
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: 5rem;
    }
`;

export const BackgroundColor = styled.div`
    position: absolute;
    top: 900px;
    left: 0;
    width: 100%;
    height: 2650px;
    z-index: -3;
    background: ${props => props.theme["blue-800"]};;
`;

export const CardContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    
    gap: 3rem;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const CleaningCardsContentHome = styled.div`
    margin-bottom: 20rem;
`;

export const BackgroundWrapper2 = styled.div`
    position: absolute;
    top: 3500px;
    left: 0;
    width: 100%;
    height: 900px;
    background-image: url(${WallpaperImage3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
`;

export const Evidences = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;
    margin-top: 8rem;

    div {
        width: 500px;

        display: flex;
        flex-direction: column;
        text-align: center;

        gap: 1rem;

        color: ${props => props.theme["blue-500"]};

        p {
            font-weight: 500;
            font-size: 1.6rem;
        }
    }

    scroll-margin-top: 35rem;
`;

export const BlogHome = styled.div`
    width: 100%;
    margin-top: 20rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 5.6rem;
        text-align: center;
        color: ${props => props.theme["blue-100"]};
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: -10rem;
    }
`;

export const BackgroundWrapper3 = styled.div`
    position: relative;
    width: 99.2vw;
    height: 900px;
    background-image: url(${WallpaperImage4});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;

    margin-top: -80rem;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: -150rem;
        height: 1850px;
    }
`;

export const BlogCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 5rem;
    gap: 3rem;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin: 20px;
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        margin: 20px;
    }
`;

export const BlogPages = styled(Link)`
    width: 17rem;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 7rem;

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

export const Contact = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 20rem;

    h1 {
        font-size: 5.6rem;
        text-align: center;
        
        color: ${props => props.theme["blue-500"]};
    }

    scroll-margin-top: 12rem;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: -15rem;
    }
`;