import styled from "styled-components";

// import CleaningWallpaper from "../../assets/ContactWallpaper.png"
import CarpeteTapeteWallpaper from "../../assets/carpete-tapete-background.jpg";

export const BackgroundColorWrapper = styled.div`
    position: absolute; /* Alterado para relative */
    top: 0;
    left: 0;
    width: 100%;
    height: auto; /* Mantido como auto para cobrir todo o conteúdo */
    background-color: ${props => props.theme["white-500"]};

    padding: 0 20px;
`;

export const SimulationContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    > h1 {
        font-size: 5.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        margin-bottom: 2rem;
        color: ${props => props.theme["blue-500"]};

        @media (max-width: ${props => props.theme.breakpoints.mobile}) {
            margin-top: -5rem;
        }
    }

    #SpecialServiceContainer {
        margin-top: 20rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h3 {
            font-size: 3rem;
            color: ${props => props.theme["black"]};
            background-color: ${props => props.theme["blue-100"]};
            padding: 2rem;
            border-radius: 8px;
        }

        @media (max-width: ${props => props.theme.breakpoints.mobile}) {
            flex-direction: column;
            margin-top: -5rem;
            gap: 5rem;
        }
    }

    > span {
        font-size: 1.6rem;
        font-weight: bold;
    }
`;

export const BackgroundImageWallpaperSpecialService = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 1350px; /* Você pode ajustar isso se necessário */
    background-image: url(${CarpeteTapeteWallpaper});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
`;

export const SimulationContent = styled.div`
    width: 100%;  
`;
