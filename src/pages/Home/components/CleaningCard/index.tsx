import { CleaningCardContainer, CleaningCardContent } from "./styles";

import LimpezaProfundaImg from "../../assets/limpeza-sofa.jpeg"
import ImpermeabilizacaoImg from "../../assets/Impermeabilizacao.jpeg"
import HigienizaçãoImg from "../../assets/Limpeza-Profunda.jpeg"

const descriptions = {
    limpeza: "A higienização Semi-Seca da ProLimp oferece uma limpeza intensa e eficiente. Além disso, nossos produtos eliminam fungos, bactérias e ácaros, que são os principais responsáveis por problemas respiratórios. Portanto, se o seu sofá ou estofado está sujo, não hesite em nos contatar o quanto antes.",

    Impermeabilizacao: "Para manter a limpeza do seu estofado por mais tempo, recomendamos a impermeabilização, o que proporciona maior durabilidade e prolonga a vida útil do material. Entre os benefícios estão: proteção solar UV com fator 4, não inflamável, aumento da durabilidade, secagem rápida e preservação das características originais de cor e textura. Utilizamos o melhor impermeabilizante disponível no mercado.",

    Higienizacao: "Você sabia que cada grama de poeira em seu estofado pode abrigar até 10 mil ácaros? Para garantir um ambiente mais saudável, é recomendável realizar uma DESINFECÇÃO ou LAVAGEM A SECO regularmente. Nós fornecemos serviços completos de desinfecção e lavagem a seco para manter seus estofados impecáveis.",
}

interface CleaningCardProps {
    title: "Higienização" | "Impermeabilização" | "Limpeza Profunda";
    descriptionType: keyof typeof descriptions;
}

export function CleaningCard({ title, descriptionType }:CleaningCardProps) {
    const description = descriptions[descriptionType];

    let img;

    if (title === "Higienização") {
        img = HigienizaçãoImg;
    } else if (title === "Impermeabilização") {
        img = ImpermeabilizacaoImg;
    } else if (title === "Limpeza Profunda") {
        img = LimpezaProfundaImg;
    }

    return (
        <CleaningCardContainer>
            <CleaningCardContent>
                <img src={img} alt="" />

                <div>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </div>
            </CleaningCardContent>
        </CleaningCardContainer>
    )
}