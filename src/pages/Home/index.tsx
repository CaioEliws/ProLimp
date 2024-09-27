import { FormBudget } from "../../components/FormBudget";
import { Pagination } from "./components/Pagination";
import { Header } from "../../components/Header";
import { BackgroundColor, BackgroundWrapper, BackgroundWrapper1, BackgroundWrapper2, BackgroundWrapper3, BackgroundWrapper4, BlogHome, BlogPages, Budgets, CardContent, CleaningCardsContentHome, Contact, Copy, Evidences, HomeContainer, TextBudgets } from "./styles";

import LogoImg from "../../assets/logo.svg"
import { Card } from "./components/Card";
import { CleaningCard } from "./components/CleaningCard";
import { TextAndP } from "./components/TextAndP";
import { YoutubeVideo } from "./components/YoutubeVideo";
import { BlogCards } from "./components/BlogCards";
import { FormContact } from "../../components/FormContact";
import { ContactInfo } from "../../components/ContactInfo";

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import CouroImage from "./components/BlogCards/Images/couro-image.jpg"
import CarroImage from "./components/BlogCards/Images/carro-image.jpg"
import CouroBrancoImage from "./components/BlogCards/Images/courobranco.jpg"

export function Home() {
    const contactRef = useRef<HTMLDivElement>(null);
    const evidencesRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (location.hash === '#evidences' && evidencesRef.current) {
            evidencesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <BackgroundWrapper />
            <BackgroundWrapper1 />
            <BackgroundWrapper2 />
            <BackgroundWrapper3 />
            <BackgroundWrapper4 />
            <BackgroundColor />
            <HomeContainer>
                <Header />

                <Budgets>
                    <TextBudgets>
                        <div>
                            <h1>Limpeza completa com proteção impermeável e hidratação do couro.</h1>
                            <h2>Proporcionando conforto e bem-estar para sua família.</h2>
                        </div>
                    </TextBudgets>

                    <FormBudget title="Faça um orçamento" />
                </Budgets>

                <Pagination />

                <Copy>
                    <img src={LogoImg} alt="" />

                    <TextAndP 
                        title="Serviço de Limpeza para Sofás e Estofados em Indaiatuba"
                        description="Somos experts em limpeza de sofás e estofados. Realizamos uma limpeza profunda, incluindo impermeabilização e hidratação de couro para sofás, colchões, cadeiras, tapetes, poltronas e veículos. Garantimos a qualidade de nossos serviços."
                        colorTheme="light-blue"
                    />

                    <CardContent>
                        <Card title="Higienização" />
                        <Card title="Limpeza Profunda" />
                        <Card title="Impermeabilização" />
                    </CardContent>

                    <CleaningCardsContentHome>
                        <CleaningCard 
                            title="Limpeza Profunda" 
                            descriptionType="limpeza"
                        />
                        <CleaningCard 
                            title="Impermeabilização" 
                            descriptionType="Impermeabilizacao"
                        />
                        <CleaningCard 
                            title="Higienização" 
                            descriptionType="Higienizacao"
                        />
                    </CleaningCardsContentHome>

                    <TextAndP 
                        title="Depoimentos"
                        description="A ProLimp fez mais um ótimo serviço para uma cliente, por isso recebemos mais um depoimento feliz."
                        colorTheme="dark-blue"
                    />

                    <Evidences id="evidences" ref={evidencesRef}>
                        <YoutubeVideo />

                        <div>
                            <h1>Adriano Pimenta</h1>
                            <p>“Eu estava precisando de higienização para sofás e poltronas na Leo Madeiras. Conhecemos a ProLimp que nos ajudou bastante, fez um trabalho fantástico e profissional. Inclusive aproveitei para fazer a limpeza do meu carro. Muito Obrigado ProLimp, eu recomendo!”</p>
                        </div>
                    </Evidences>

                    <BlogHome>
                        <h1>Blog</h1>

                        <div>
                            <BlogCards title="Couro Cuidados" image={CouroImage} postId="couro-cuidados" />
                            <BlogCards title="Limpeza Banco de Couro" image={CarroImage} postId="limpeza-banco-couro" />
                            <BlogCards title="Limpeza Estofado" image={CouroBrancoImage} postId="limpeza-estofado" />
                        </div>

                        <BlogPages to="/blog">
                            VEJA MAIS
                        </BlogPages>
                    </BlogHome>

                    <Contact id="contact" ref={contactRef}>
                        <h1>Contato</h1>

                        <FormContact />
                    </Contact>

                    <ContactInfo bgColor="white-500" />
                </Copy>
            </HomeContainer>
        </>
    );
}