import { TextAndPContainer } from "./styles";

interface TextAndProps {
    title: string
    description: string
    colorTheme: 'light-blue' | 'dark-blue';
}

export function TextAndP ({ title, description, colorTheme }: TextAndProps) {
    return (
        <TextAndPContainer colorTheme={colorTheme}>
            <h1>
                { title }
            </h1>

            <p>
                { description }
            </p>
        </TextAndPContainer>
    )
}