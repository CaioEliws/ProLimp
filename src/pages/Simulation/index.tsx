import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { Header } from "../../components/Header";
import { BackgroundColorWrapper, BackgroundImageWallpaperSpecialService, SimulationContainer } from "./styles";
import { SimulationForm } from "./components/SimulationForm"
import { ContactInfo } from "../../components/ContactInfo";
import { FormBudget } from "../../components/FormBudget";

export function SimulationPage() {
    const { serviceType } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isSpecialService = serviceType === 'carpete' || serviceType === 'tapete' || serviceType === 'sofá';

    return (
        <>
            <BackgroundColorWrapper />
            {isSpecialService && (
                <BackgroundImageWallpaperSpecialService />
            )}

            <SimulationContainer>
                <Header />

                {isSpecialService ? (
                    <>
                        {/* <h1>Simulação de {serviceType.replace(/-/g, ' ')}</h1>

                        <span>Este serviço tem condições especiais, por favor, entre em contato para mais informações.</span> */}
                            <div id="SpecialServiceContainer">
                                <h3>A melhor limpeza de {serviceType.replace(/-/g, ' ')}.</h3>

                                <FormBudget hasTextArea title={`Faça um orçamento do seu ${serviceType.replace(/-/g, ' ')}`} />
                            </div>

                        <div className="content">
                            <ContactInfo bgColor="white" />
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Simulação de { (serviceType ?? 'serviço desconhecido').replace(/-/g, ' ')}</h1>

                        <span>
                            Isso será apenas uma simulação, o preço poderá sofrer alteração dependendo grau de sujidade
                        </span>

                        <SimulationForm serviceType={serviceType} />
                            
                        <div className="content">
                            <ContactInfo bgColor="white" />
                        </div>
                    </>
                )}
            </SimulationContainer>
        </>
    );
}