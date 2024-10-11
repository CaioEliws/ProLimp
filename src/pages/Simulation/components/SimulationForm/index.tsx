import { SimulationFormContainer } from "./styles";
import { TypeService } from "../TypeService";
import { AmountInput } from "../AmountInput";
import { ImageInputService } from "../ImageInput";

import { useSimulation } from "../../../../context/SimulationContext";
import { WhatsappLogo } from "@phosphor-icons/react";

interface SimulationFormProps {
    serviceType: string | undefined;
}

export function SimulationForm({ serviceType }: SimulationFormProps) {
    const {
        accumulatorPrice,
        selectedServiceName,
        selectedService,
        handlePriceSelect,
        handleServiceSelect,
        handleQuantityChange,
        handleSimulateClick,
        isResultVisible
    } = useSimulation();

    return (
        <SimulationFormContainer>
            <form>
                <ImageInputService serviceType={serviceType} onSelect={handlePriceSelect} />

                <TypeService selectedService={selectedService} onSelect={handleServiceSelect} />
                
                <AmountInput 
                    onSimulate={handleSimulateClick} 
                    onQuantityChange={handleQuantityChange}
                />
                
                {isResultVisible && (
                    <span>
                        <h4>R$</h4>
                        <h3>{accumulatorPrice.toFixed(2)}</h3>

                        <a 
                            href={`https://wa.me/5519998896166?
                                text=Olá, acabei de realizar um orçamento para o serviço: ${serviceType}.
                                O serviço selecionada foi: ${selectedServiceName}.
                                O valor total ficou em: R$ ${accumulatorPrice.toFixed(2)}.`}
                            target="_blank"                            
                        >
                            <WhatsappLogo size={24} />Entrar em contato
                        </a>
                    </span>
                )}
            </form>
        </SimulationFormContainer>
    );
}