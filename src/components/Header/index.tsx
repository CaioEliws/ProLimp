import { ContactContainer, HeaderContainer, LinkBudgets, Links1, Links2, LinksPages, LinksSocial, LogoImage, NavContainer } from "./styles";
import { Clipboard, FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react';
import logolimp from '../../assets/logo.svg';
import { Button } from "../Button";

import { Link } from 'react-router-dom';

export function Header() {
    return (
        <HeaderContainer>
            <ContactContainer>
                <Links1>
                    <a href="#">19 99256-4309</a>
                    <a href="#">somosprolimp@gmail.com</a>
                </Links1>

                <Links2>
                    <LinkBudgets href="#">
                        <Clipboard size={24} />
                        Lista de Orçamento
                    </LinkBudgets>

                    <LinksSocial>
                        <button><FacebookLogo size={24} /></button>
                        <button><InstagramLogo size={24} /></button>
                        <button><YoutubeLogo size={24} /></button>
                        <button><WhatsappLogo size={24} /></button>
                    </LinksSocial>
                </Links2>
            </ContactContainer>

            <NavContainer>
                <LogoImage src={logolimp} />

                <LinksPages>
                    <Link to="/">HOME</Link>
                    <Link to="/services">SERVIÇOS</Link>
                    <Link to="/#evidences">DEPOIMENTOS</Link>
                    <Link to="/blog">BLOG</Link>
                    <Link to="/#contact">CONTATO</Link>
                    
                    <Button title="QUERO UM ORÇAMENTO" />
                </LinksPages>
            </NavContainer>
        </HeaderContainer>
    )
}
