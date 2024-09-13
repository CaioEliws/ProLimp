import { ButtonContainer } from "./styles";

interface ButtonProps {
    title: string
    type?: "submit"
}

export function Button({ title }: ButtonProps) {
    return (
        <ButtonContainer>
            { title }
        </ButtonContainer>
    )
}