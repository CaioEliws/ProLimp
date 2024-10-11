import { FacebookLogo, InstagramLogo, Phone, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";
import { BackgroundWrapper4, ContactCardIcons, ContactInfoContainer, TextAndButton, TextAndIcons } from "./styles";

interface ContactInfoProps {
    bgColor: "white" | "white-500";
}

export function ContactInfo({ bgColor }: ContactInfoProps) {
    return (
        <>
            <ContactInfoContainer color={bgColor}>
                <TextAndIcons>
                    <h1>Ligue agora</h1>
                    <div id="divLinkPhone">
                        <a><Phone size={24} />19 99889-6166</a>
                    </div>
                    <ContactCardIcons>
                        <a><FacebookLogo size={24}/></a>
                        <a href="https://www.instagram.com/_.prolimp/" target="_blank"><InstagramLogo size={24}/></a>
                        <a><YoutubeLogo size={24}/></a>
                        <a href="https://wa.me/5519998896166" target="_blank"><WhatsappLogo size={24}/></a>
                    </ContactCardIcons>
                </TextAndIcons>

                <TextAndButton>
                    <h1>Gostou?</h1>
                    <p>Quer fazer um orçamento sem compromisso? Temos uma equipe qualificada para atendê-lo</p>
                    <a href="https://wa.me/5519998896166?text=Olá gostaria de fazer um orçamento" target="_blank">
                        FAÇA UM ORÇAMENTO
                    </a>
                </TextAndButton>
            </ContactInfoContainer>

            <BackgroundWrapper4 />
        </>
    );
}
