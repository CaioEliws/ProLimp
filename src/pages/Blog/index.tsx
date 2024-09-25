import { useEffect } from "react";

import { ContactInfo } from "../../components/ContactInfo";
import { Header } from "../../components/Header";
import { BlogCards } from "../Home/components/BlogCards";
import { BackgroundContactWallpaper, BlogCardsContent, BlogContainer } from "./styles";

export function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <BackgroundContactWallpaper />

            <BlogContainer>
                <Header />

                <h1>Blog</h1>

                <BlogCardsContent>
                    <BlogCards title="Couro Cuidados" />
                    <BlogCards title="Limpeza Banco de Couro" />
                    <BlogCards title="Limpeza Estofado" />
                    
                    <BlogCards title="Anti Pulga" />
                    <BlogCards title="Estofado Limpo" />
                    <BlogCards title="Evitar Limpar à Vácuo" />

                    <BlogCards title="Acessórios Vácuo" />
                    <BlogCards title="Organização De Sapatos" />
                    <BlogCards title="Tênis Branco" />

                    <BlogCards title="Limpeza Colchão" />
                    <BlogCards title="Couro Hidratação" />
            
                    <BlogCards title="Couro Branco" />
                    <BlogCards title="Piso Limpeza" />
                    <BlogCards title="Estofado impermeabilizado" />
                </BlogCardsContent>

                <ContactInfo bgColor="white-500" />
            </BlogContainer>
        </>
    )
}