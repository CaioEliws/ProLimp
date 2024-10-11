import styled from "styled-components";

// import CleaningWallpaper from "../../assets/ContactWallpaper.png"

export const BlogPostContainer = styled.div`
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
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        text-align: center;
        margin-top: -10rem;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const BlogPostContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 50rem;
        object-fit: cover;
    }
`;

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        width: 100%;
        text-align: left;

        font-size: 2.4rem;
        margin-top: 7rem;
        margin-bottom: 3rem;

        color: ${props => props.theme["blue-500"]};
    }

    p {
        font-size: 1.8rem;
        white-space: pre-line;
    }
`;

export const BackgroundWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme["white-500"]};
    z-index: 0;
    margin-bottom: 5rem;
`;