import { TypeServices, TypeServicesContent, ServiceInput } from "./styles";

interface TypeServiceProps {
    onSelect: (serviceType: string) => void;
    selectedService: number | null;
}

export function TypeService({ onSelect, selectedService }: TypeServiceProps) {
    const handleServiceClick = (serviceName: string) => {
        onSelect(serviceName);
    };

    return (
        <TypeServices>
            <p>Escolha o tipo de serviço:</p>

            <TypeServicesContent>
                <ServiceInput
                    type="button"
                    value="Limpeza"
                    onClick={() => handleServiceClick("Limpeza")}
                    $isSelected={selectedService === 1}
                />
                <ServiceInput
                    type="button"
                    value="Impermeabilização"
                    onClick={() => handleServiceClick("Impermeabilização")}
                    $isSelected={selectedService === 2}
                />
                <ServiceInput
                    type="button"
                    value="Limpeza + Impermeabilização"
                    onClick={() => handleServiceClick("Limpeza + Impermeabilização")}
                    $isSelected={selectedService === 3}
                />
                <ServiceInput
                    type="button"
                    value="Limpeza + Hidratação de couro"
                    onClick={() => handleServiceClick("Limpeza + Hidratação de couro")}
                    $isSelected={selectedService === 4}
                />
            </TypeServicesContent>
        </TypeServices>
    );
}
