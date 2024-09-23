import { BlogCardsContainer } from "./styles";

import CouroImg from '../../assets/couro-image.jpg'
import CarroImg from '../../assets/carro-image.jpg'
import EstofadoImg from '../../assets/estofado-image.png'

interface BlogCardsProps {
    title: 
        "Couro Cuidados" | 
        "Limpeza Banco de Couro" | 
        "Limpeza Estofado" |
        "Anti Pulga" | 
        "Acessórios Vácuo" | 
        "Tênis Branco" | 
        "Limpeza Colchão" | 
        "Couro Hidratação" | 
        "Sapatos Organização" | 
        "Couro Branco" | 
        "Piso Limpeza" | 
        "Estofado Impermeabilização";
}


export function BlogCards({ title }: BlogCardsProps) {
    let img;

    if (title === "Couro Cuidados") {
        img = CouroImg;
    } else if (title === "Limpeza Banco de Couro") {
        img = CarroImg;
    } else if (title === "Limpeza Estofado") {
        img = EstofadoImg;
    }

    return (
        <BlogCardsContainer href="#">
            <img src={img} alt="" />

            <p>{ title }</p>
        </BlogCardsContainer>
    )
}