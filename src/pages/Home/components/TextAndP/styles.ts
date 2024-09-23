import styled from "styled-components";

export const TextAndPContainer = styled.div<{ colorTheme: 'light-blue' | 'dark-blue' }>`
    h1 {
        font-size: 5.6rem;
        text-align: center;

        color: ${props => props.colorTheme === 'light-blue' ? props.theme["blue-100"] : props.theme["blue-500"]};

        margin-bottom: 2rem;
    }

    p {
        font-size: 2.4rem;
        text-align: center;

        color: ${props => props.colorTheme === 'light-blue' ? props.theme["blue-100"] : props.theme["blue-500"]};
        font-weight: 500;
    }
`;
