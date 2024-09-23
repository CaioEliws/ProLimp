import styled from "styled-components";
import WallpaperImage from "./assets/wallpaper2.png"
import WallpaperImage2 from "./assets/wallpaper3.png"
import WallpaperImage3 from "./assets/wallpaper4.png"
import WallpaperImage4 from "./assets/wallpaper5.png"
import WallpaperImage5 from "./assets/wallpaper6.png"

export const HomeContainer = styled.main`
    width: 100%;
    height: 700vh;
    max-width: 1120px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
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

    img {
        width: 30rem;
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
    display: flex;
    justify-content: space-around;
    
    gap: 3rem;
`;

export const CleaningCardsContentHome = styled.div`
    margin-bottom: 20rem;
`;

export const BackgroundWrapper2 = styled.div`
    position: absolute;
    top: 3500px;
    left: 0;
    width: 100%;
    height: 1100px;
    background-image: url(${WallpaperImage3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -4;
`;

export const BackgroundWrapper3 = styled.div`
    position: absolute;
    top: 3500px;
    left: 0;
    width: 100%;
    height: 3550px;
    background-image: url(${WallpaperImage4});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -5;
    background-size: 110%;

`;

export const BackgroundWrapper4 = styled.div`
    position: absolute;
    top: 3750px;
    left: 0;
    width: 100%;
    height: 3300px;
    background-image: url(${WallpaperImage5});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -7;
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
`;

export const Blog = styled.div`
    width: 100%;
    margin-top: 20rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        justify-content: space-between;

        margin-top: 5rem;
        gap: 3rem;
    }

    h1 {
        font-size: 5.6rem;
        text-align: center;
        
        color: ${props => props.theme["blue-100"]};
    }
`;

export const BlogPages = styled.button`
    width: 17rem;
    height: 5rem;

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
`;

export const ContactCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 5rem;
    margin-top: 20rem;
    border-radius: 16px;

    background: ${props => props.theme["white-500"]};

    h1 {
        font-size: 5.6rem;

        color: ${props => props.theme["blue-500"]};
    }

    p {
        font-size: 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;

        font-weight: 500;

        svg {
            color: ${props => props.theme["blue-500"]};
        }
    }

    a {
        width: 18rem;
        display: flex;
        align-items: center;

        font-size: 2rem;
        font-weight: 500;

        gap: 1rem;
        cursor: pointer;

        svg {
            color: ${props => props.theme["blue-500"]};
        }
    }
`;

export const TextAndIcons = styled.div`
    display: flex;
    flex-direction: column;

    gap: 4rem;
`;

export const TextAndButton = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    gap: 2rem;

    button {
        width: 25rem;
        height: 5rem;

        margin-top: 1rem;

        border: none;
        background: ${props => props.theme["white-500"]};
        color: ${props => props.theme["blue-500"]};

        border-radius: 30px;
        border: 3px solid ${props => props.theme["blue-500"]};

        font-size: 1.6rem;
        font-weight: 500;


        cursor: pointer;
        transition: .2s;

        &:hover {
            color: ${props => props.theme["white-500"]};
            background: ${props => props.theme["blue-500"]};
        }
    }
`;

export const ContactCardIcons = styled.div`
    display: flex;
    gap: 2rem;

    button {
        display: flex;

        background: transparent;
        border: none;

        cursor: pointer;
        transition: .3s;

        color: ${props => props.theme["blue-500"]};

        &:hover {
            transform: scale(1.2)
        }
    }
`;