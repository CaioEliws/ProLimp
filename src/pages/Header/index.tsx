import { ContactContainer, HeaderContainer, LinkBudgets, Links1, Links2, LinksPages, LinksSocial, LogoImage, NavContainer } from "./styles";

import { Clipboard, FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

import logolimp from '../../assets/logo.svg'
import { Button } from "../../components/Button";

export function Header() {
    return (
        <HeaderContainer>
            <ContactContainer>
                <Links1>
                    <a href="#">19 99256-4309</a>
                    <a href="#">contato@prolimp.com</a>
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
                <LogoImage src={logolimp}/>

                <LinksPages>
                    <a href="#">HOME</a>
                    <a href="#">SERVIÇOS</a>
                    <a href="#">DEPOIMENTOS</a>
                    <a href="#">BLOG</a>
                    <a href="#">CONTATO</a>
                    
                    <Button title="QUERO UM ORÇAMENTO" />
                </LinksPages>
            </NavContainer>
        </HeaderContainer>
    )
}