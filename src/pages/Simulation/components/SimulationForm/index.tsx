import { SimulationFormContainer } from "./styles";
import { TypeService } from "../TypeService";
import { AmountInput } from "../AmountInput";
import { ImageInputService } from "../ImageInput";

import { useSimulation } from "../../../../context/SimulationContext";

interface SimulationFormProps {
    serviceType: string | undefined;
}

export function SimulationForm({ serviceType }: SimulationFormProps) {
    const {
        accumulatorPrice,
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
                    </span>
                )}
            </form>
        </SimulationFormContainer>
    );
}
