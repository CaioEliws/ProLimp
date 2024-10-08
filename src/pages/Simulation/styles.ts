import styled from "styled-components";

import CleaningWallpaper from "../../assets/ContactWallpaper.png"
import CarpeteTapeteWallpaper from "../../assets/carpete-tapete-background.jpg"

export const BackgroundColorWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150vh;
    background-color: ${props => props.theme["white-500"]};
`;

export const SimulationContainer = styled.main`
    width: 100%;
    height: 150vh;
    max-width: 1120px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    > h1 {
        font-size: 5.6rem;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 5rem;
        margin-bottom: 2rem;

        color: ${props => props.theme["blue-500"]};
    }

    #SpecialServiceContainer {
        margin-top: 20rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        > h3 {
            font-size: 3rem;
            color: ${props => props.theme["black"]};

            background-color: ${props => props.theme["blue-100"]};;
            padding: 2rem;
            border-radius: 8px;
        }

    }

    > span {
        font-size: 1.6rem;
        font-weight: bold;
    }

    #contactMargin {
        margin-top: 20rem;
    }

    #contactMargin2 {
        margin-top: 25rem;
    }
`;

export const BackgroundImageWallpaperSpecialService = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 1350px;
    background-image: url(${CarpeteTapeteWallpaper});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
`;


export const SimulationContent =  styled.div`
    width: 100%;  
`;

export const BackgroundContactWallpaper = styled.div`
    position: absolute;
    top: 1150px;
    left: 0;
    width: 100%;
    height: 420px;
    background-image: url(${CleaningWallpaper});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
`;