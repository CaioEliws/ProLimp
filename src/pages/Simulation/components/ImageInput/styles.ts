import styled from "styled-components";

interface ImageInputProps {
    $isSelected: boolean;
    $imageSrc: string;
}

export const ImageInputContainer = styled.div`
    margin-top: 5rem;
    gap: 1.2rem;

    > p {
        margin-bottom: 2rem; 
    }
`;

export const ImageInputContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`;

export const ImageInput = styled.button<ImageInputProps>`
    border-radius: 100px;

    width: 20rem;
    height: 20rem;

    border: 2px solid ${({ $isSelected }) => ($isSelected ? "#26acd8" : "#ccc")};
    box-shadow: ${({ $isSelected }) => ($isSelected ? '0 0 5px rgba(38, 172, 216, 0.6)' : 'none')};

    background-color: white; /* Adiciona fundo branco */
    background-image: url(${({ $imageSrc }) => $imageSrc});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    cursor: pointer;

    transition: .2s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    }
`;