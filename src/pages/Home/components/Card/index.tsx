import { CardContainer } from "./styles";

import HigieneLogo from "../../assets/higienizacao.svg"
import ImpermeabilizacaoLogo from "../../assets/impermeabilizacao.svg"
import LimpezaLogo from "../../assets/limpeza-profunda.svg"

interface CardProps {
    title: "Higienização" | "Impermeabilização" | "Limpeza Profunda";
}

export function Card({ title }:CardProps) {
    let logo;

    if (title === "Higienização") {
        logo = HigieneLogo;
    } else if (title === "Impermeabilização") {
        logo = ImpermeabilizacaoLogo;
    } else if (title === "Limpeza Profunda") {
        logo = LimpezaLogo;
    }

    return (
        <CardContainer>
            <img src={logo} alt={title} />

            <p>{ title }</p>
        </CardContainer>
    )
}