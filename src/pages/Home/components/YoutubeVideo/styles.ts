import styled from "styled-components";

export const YoutubeVideoContent = styled.div`
    position: relative;
    width: 160rem;
    max-width: 100%;

    padding-bottom: 30rem;

    overflow: hidden;
    background: #000;

    border-radius: 8px;
    
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
`;
