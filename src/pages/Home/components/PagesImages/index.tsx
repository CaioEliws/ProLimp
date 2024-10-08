import { PageImage, PageImageContent, PagesImagesContainer, PageTitle } from "./styles";

import sofaImg from '../../../../assets/Images/sofa.png'
import carroImg from '../../../../assets/Images/carro.png'
import puffImg from '../../../../assets/Images/puff.png'
import carpeteImg from '../../../../assets/Images/carpete.png'
import cadeiraImg from '../../../../assets/Images/cadeira.png'
import tapeteImg from '../../../../assets/Images/tapete.png'
import poltronaImg from '../../../../assets/Images/poltrona.png'
import divaImg from '../../../../assets/Images/diva.png'
import colchaoImg from '../../../../assets/Images/colchao.png'

const imageMap: { [key: string]: string } = {
    "Sofá": sofaImg,
    "Carro": carroImg,
    "Puff": puffImg,
    "Carpete": carpeteImg,
    "Cadeira": cadeiraImg,
    "Tapete": tapeteImg,
    "Poltrona": poltronaImg,
    "Divã": divaImg,
    "Colchão": colchaoImg,
};

interface PagesImages {
    title: "Sofá" | "Carro" | "Puff" | "Carpete" | "Cadeira" | "Tapete" | "Poltrona" | "Divã" | "Colchão";
}

export function PagesImages({ title }: PagesImages) {
    const imageSrc = imageMap[title];

    const serviceRoute = `services/simulation/${title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <PagesImagesContainer>
            <PageImageContent to={serviceRoute}>
                <PageImage>
                    <img src={imageSrc} alt="" />
                </PageImage>

                <PageTitle>
                    { title }
                </PageTitle>
            </PageImageContent>
        </PagesImagesContainer>
    )
}