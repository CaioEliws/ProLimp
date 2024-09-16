import { PagesImages } from "../PagesImages";
import { PagesImagesContent, PaginationContainer, Title } from "./styles";

export function Pagination() {
    return (
        <PaginationContainer>
            <Title>Escolha o item a ser limpo ou impermeabilizado</Title>
            
            <PagesImagesContent>
                <PagesImages title="Sofá" />
                <PagesImages title="Carro" />
                <PagesImages title="Puff" />

                <PagesImages title="Carpete" />
                <PagesImages title="Cadeira" />
                <PagesImages title="Tapete" />

                <PagesImages title="Poltrona" />
                <PagesImages title="Divã" />
                <PagesImages title="Colchão" />
            </PagesImagesContent>
        </PaginationContainer>
    )
}