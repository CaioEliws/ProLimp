import { PageImage, PagesImagesContainer, PageTitle } from "./styles";

interface PagesImages {
    title: string;
}

export function PagesImages({ title }: PagesImages) {
    return (
        <PagesImagesContainer>
            <PageImage>
                <h1>TESTE IMAGEM</h1>
            </PageImage>

            <PageTitle>
                { title }
            </PageTitle>
        </PagesImagesContainer>
    )
}