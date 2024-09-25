import { FacebookLogo, InstagramLogo, Phone, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";
import { ContactCardIcons, ContactInfoContainer, TextAndButton, TextAndIcons } from "./styles";

interface ContactInfoProps {
    bgColor: "white" | "white-500";
}

export function ContactInfo({ bgColor }: ContactInfoProps) {
    return (
        <>
            <ContactInfoContainer color={bgColor}>
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
            </ContactInfoContainer>
        </>
    )
}