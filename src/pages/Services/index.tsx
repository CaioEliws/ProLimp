import { useEffect } from "react";
import { ContactInfo } from "../../components/ContactInfo";
import { Header } from "../../components/Header";
import { ServicesCard } from "./components/ServicesCard";
import { BackgroundWrapper, ServicesCardContent, ServicesContainer } from "./styles";

export function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <BackgroundWrapper />
            <ServicesContainer>
                <Header />

                <h1>Selecione o tipo de serviço</h1>

                <ServicesCardContent>
                    <ServicesCard title="Limpeza de Sofá" />
                    <ServicesCard title="Limpeza de Cadeira" />
                    <ServicesCard title="Limpeza de Colchão" />

                    <ServicesCard title="Limpeza de Tapete" />
                    <ServicesCard title="Limpeza de Divã" />
                    <ServicesCard title="Limpeza de Carro" />

                    <ServicesCard title="Limpeza de Poltrona" />
                    <ServicesCard title="Limpeza de Almofada" />
                    <ServicesCard title="Limpeza de Puff" />
                    <ServicesCard title="Carpete" />
                </ServicesCardContent>

                <div className="content">
                    <ContactInfo bgColor="white" />
                </div>
            </ServicesContainer>
        </>
    )
}   