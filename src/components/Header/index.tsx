import { ContactContainer, HeaderContainer, Links1, Links2, LinksPages, LinksSocial, LogoImage, NavContainer } from "./styles";
import { FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react';
import logolimp from '../../assets/logo.svg';
import { Button } from "../Button";

import { Link } from 'react-router-dom';

export function Header() {
    return (
        <HeaderContainer>
            <ContactContainer>
                <Links1>
                    <a href="#">19 99889-6166</a>
                    <a href="#">somosprolimp@gmail.com</a>
                </Links1>

                <Links2>
                    {/* <LinkBudgets href="#">
                        <Clipboard size={24} />
                        Lista de Orçamento
                    </LinkBudgets> */}

                    <LinksSocial>
                        <a><FacebookLogo size={24}/></a>
                        <a href="https://www.instagram.com/_.prolimp/" target="_blank"><InstagramLogo size={24}/></a>
                        <a><YoutubeLogo size={24}/></a>
                        <a href="https://wa.me/5519998896166" target="_blank"><WhatsappLogo size={24}/></a>
                    </LinksSocial>
                </Links2>
            </ContactContainer>

            <NavContainer>
                <LogoImage src={logolimp} />

                <LinksPages>
                    <Link to="/">HOME</Link>
                    <Link to="/services">SERVIÇOS</Link>
                    {/* <Link to="/#evidences">DEPOIMENTOS</Link> */}
                    <Link to="/blog">BLOG</Link>
                    <Link to="/#contact">CONTATO</Link>
                    
                    <Button 
                        title="QUERO UM ORÇAMENTO" 
                        link="https://wa.me/5519998896166?text=Olá gostaria de fazer um orçamento"
                    />
                </LinksPages>
            </NavContainer>
        </HeaderContainer>
    )
}
