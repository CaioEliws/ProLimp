import { FormBudget } from "../../components/FormBudget";
import { Pagination } from "../../components/Pagination";
import { Header } from "../Header";
import { BackgroundColor, BackgroundWrapper, BackgroundWrapper1, BackgroundWrapper2, BackgroundWrapper3, BackgroundWrapper4, Blog, BlogPages, Budgets, CardContent, CleaningCardsContentHome, Contact, ContactCard, ContactCardIcons, Copy, Evidences, HomeContainer, TextAndButton, TextAndIcons, TextBudgets } from "./styles";

import LogoImg from "../../assets/logo.svg"
import { Card } from "./components/Card";
import { CleaningCard } from "./components/CleaningCard";
import { TextAndP } from "./components/TextAndP";
import { YoutubeVideo } from "./components/YoutubeVideo";
import { BlogCards } from "./components/BlogCards";
import { FormContact } from "../../components/FormContact";
import { FacebookLogo, InstagramLogo, Phone, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";

export function Home() {
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

                    <Evidences>
                        <YoutubeVideo />

                        <div>
                            <h1>Adriano Pimenta</h1>
                            <p>“Eu estava precisando de higienização para sofás e poltronas na Leo Madeiras. Conhecemos a ProLimp que nos ajudou bastante, fez um trabalho fantástico e profissional. Inclusive aproveitei para fazer a limpeza do meu carro. Muito Obrigado ProLimp, eu recomendo!”</p>
                        </div>
                    </Evidences>

                    <Blog>
                        <h1>Blog</h1>

                        <div>
                            <BlogCards title="Couro Cuidados" />
                            <BlogCards title="Limpeza Banco de Couro" />
                            <BlogCards title="Limpeza Estofado" />
                        </div>

                        <BlogPages>
                            VEJA MAIS
                        </BlogPages>
                    </Blog>

                    <Contact>
                        <h1>Contato</h1>

                        <FormContact />
                    </Contact>

                    <ContactCard>
                        <TextAndIcons>
                            <h1>Ligue agora</h1>
                            <a><Phone size={24} />19 99256-4309</a>
                            <ContactCardIcons>
                                <button><FacebookLogo size={24} /></button>
                                <button><InstagramLogo size={24} /></button>
                                <button><YoutubeLogo size={24} /></button>
                                <button><WhatsappLogo size={24} /></button>
                            </ContactCardIcons>
                        </TextAndIcons>

                        <TextAndButton>
                            <h1>Gostou?</h1>
                            <p>Quer fazer um orçamento sem compromisso? Temos uma equipe qualificada para atendê-lo</p>
                            <button>FAÇA UM ORÇAMENTO</button>
                        </TextAndButton>
                    </ContactCard>
                </Copy>
            </HomeContainer>
        </>
    );
}