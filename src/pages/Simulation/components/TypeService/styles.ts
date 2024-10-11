import styled from "styled-components";

interface ServiceInputProps {
    $isSelected: boolean;  // Adicionando o prefixo $
}

export const TypeServices = styled.div`
    margin-top: 5rem;
`;

export const TypeServicesContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-top: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        flex-direction: column;
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        flex-direction: column;
    }
`;

export const ServiceInput = styled.input<ServiceInputProps>`
    border-radius: 100px;
    background: #fff;
    padding: 1rem;
    border: 2px solid ${({ $isSelected }) => ($isSelected ? '#26acd8' : '#ccc')};  // Use o prefixo $
    box-shadow: ${({ $isSelected }) => ($isSelected ? '0 0 7px rgba(38, 172, 216, 0.6)' : 'none')}; // Use o prefixo $
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    outline: none;
    cursor: pointer;

    transition: .2s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
`;
