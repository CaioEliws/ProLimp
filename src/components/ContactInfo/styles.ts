import styled from "styled-components";

export const ContactInfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 5rem;
    margin-top: 10rem;
    border-radius: 16px;

    background: ${(props) => 
        props.color === 'white' ? props.theme["white"] : props.theme["white-500"]
    };

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
`;

export const TextAndIcons = styled.div`
    display: flex;
    flex-direction: column;

    gap: 4rem;

    > a {
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

export const ContactCardIcons = styled.div`
    display: flex;
    gap: 2rem;

    a {
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

export const TextAndButton = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    gap: 2rem;

    a {
        width: 25rem;
        height: 5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

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