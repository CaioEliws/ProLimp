import { BlogCardsContainer } from "./styles";

import CouroImg from './Images/couro-image.jpg'
import CarroImg from './Images/carro-image.jpg'
import EstofadoImg from './Images/estofado-image.png'
import AntPulgaImg from './Images/pulga.jpg'
import EstofadoLimpezaImg from './Images/estofado.jpeg'
import NaoLimparImg from './Images/naolimpar.jpg'
import AcessoriosImg from './Images/acessorios.png'
import ArmarioImg from './Images/armario.png'
import SapatoBrancoImg from './Images/sapatobranco.jpg'
import ColchaoImg from './Images/colchao.png'
import CouroHidraImg from './Images/courohidra.jpg'
import CouroBrancoImg from './Images/courobranco.jpg'
import PisoImg from './Images/piso.jpg'
import EstofadoImperImg from './Images/estofadoimper.jpg'

interface BlogCardsProps {
    title: 
        "Couro Cuidados" | 
        "Limpeza Banco de Couro" | 
        "Limpeza Estofado" |
        "Anti Pulga" |
        "Estofado Limpo" |
        "Evitar Limpar à Vácuo" |
        "Acessórios Vácuo" | 
        "Organização De Sapatos" | 
        "Tênis Branco" | 
        "Limpeza Colchão" | 
        "Couro Hidratação" | 
        "Couro Branco" | 
        "Piso Limpeza" | 
        "Estofado impermeabilizado";
}


export function BlogCards({ title }: BlogCardsProps) {
    let img;

    if (title === "Couro Cuidados") {
        img = CouroImg;
    } else if (title === "Limpeza Banco de Couro") {
        img = CarroImg;
    } else if (title === "Limpeza Estofado") {
        img = EstofadoImg;
    } else if (title === "Anti Pulga") {
        img = AntPulgaImg;
    } else if (title === "Estofado Limpo") {
        img = EstofadoLimpezaImg;
    } else if (title === "Evitar Limpar à Vácuo") {
        img = NaoLimparImg;
    } else if (title === "Acessórios Vácuo") {
        img = AcessoriosImg;
    } else if (title === "Organização De Sapatos") {
        img = ArmarioImg;
    } else if (title === "Tênis Branco") {
        img = SapatoBrancoImg;
    } else if (title === "Limpeza Colchão") {
        img = ColchaoImg;
    } else if (title === "Couro Hidratação") {
        img = CouroHidraImg;
    } else if (title === "Couro Branco") {
        img = CouroBrancoImg;
    } else if (title === "Piso Limpeza") {
        img = PisoImg;
    } else if (title === "Estofado impermeabilizado") {
        img = EstofadoImperImg;
    }

    return (
        <BlogCardsContainer href="#">
            <img src={img} alt="" />

            <p>{ title }</p>
        </BlogCardsContainer>
    )
}