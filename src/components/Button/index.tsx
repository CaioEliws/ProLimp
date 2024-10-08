import { ButtonContainer } from "./styles";

interface ButtonProps {
    title: string
    type?: "submit"
    link?: string
}

export function Button({ title, type, link }: ButtonProps) {
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank");
        }
    };

    return (
        <ButtonContainer onClick={handleClick} type={type}>
            { title }
        </ButtonContainer>
    )
}