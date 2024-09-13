import { PagesImages } from "../PagesImages";
import { PaginationContainer, Title } from "./styles";

export function Pagination() {
    return (
        <PaginationContainer>
            <Title>Escolha o item a ser limpo ou impermeabilizado</Title>
            
            
            <PagesImages title="Sofá" />
        </PaginationContainer>
    )
}