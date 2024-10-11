import { ServicesCardContainer } from "./styles";

import SofaImg from "../../images/sofa.png";
import CadeiraImg from "../../images/cadeira.png";
import ColchaoImg from "../../images/colchao.png";
import TapeteImg from "../../images/tapete.png";
import DivaImg from "../../images/diva.png";
import CarroImg from "../../images/carro.png";
import PoltronaImg from "../../images/poltrona.png";
import AlmofadaImg from "../../images/almofada.png";
import PuffImg from "../../images/puff.png";
import CarpeteImg from "../../images/carpete.png";

interface ServicesCardProps {
    title: 
      | "Limpeza de Sofá" 
      | "Limpeza de Cadeira" 
      | "Limpeza de Colchão" 
      | "Limpeza de Tapete" 
      | "Limpeza de Carro" 
      | "Limpeza de Divã" 
      | "Limpeza de Poltrona" 
      | "Limpeza de Almofada" 
      | "Limpeza de Puff" 
      | "Carpete";
}

export function ServicesCard({ title }: ServicesCardProps) {
    const imagesMap: { [key: string]: string } = {
        "Limpeza de Sofá": SofaImg,
        "Limpeza de Cadeira": CadeiraImg,
        "Limpeza de Colchão": ColchaoImg,
        "Limpeza de Tapete": TapeteImg,
        "Limpeza de Carro": CarroImg,
        "Limpeza de Divã": DivaImg,
        "Limpeza de Poltrona": PoltronaImg,
        "Limpeza de Almofada": AlmofadaImg,
        "Limpeza de Puff": PuffImg,
        "Carpete": CarpeteImg,
    };

    const img = imagesMap[title] || CarroImg;

    const serviceRoute = `/services/simulation/${title.replace(/Limpeza de /, '').replace(/ /g, "-").toLowerCase()}`;


    return (
        <ServicesCardContainer to={serviceRoute}>
            <img src={img} alt={title} />
            <h2>{title}</h2>
        </ServicesCardContainer>
    );
}
