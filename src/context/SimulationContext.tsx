import React, { createContext, useContext, useState, useEffect } from "react";

interface SimulationContextType {
    accumulatorPrice: number;
    selectedService: number | null;
    imagePrice: number | null;
    quantity: number; // Adicionando estado para a quantidade
    isResultVisible: boolean;
    handlePriceSelect: (price: number | null) => void;
    handleServiceSelect: (serviceType: string) => void;
    handleQuantityChange: (quantity: number) => void; // Nova função
    handleSimulateClick: () => void;
}

const SimulationContext = createContext<SimulationContextType | undefined>(undefined);

export const SimulationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [accumulatorPrice, setAccumulatorPrice] = useState<number>(0);
    const [selectedService, setSelectedService] = useState<number | null>(null);
    const [imagePrice, setImagePrice] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number>(1); // Inicializando a quantidade
    const [isResultVisible, setIsResultVisible] = useState<boolean>(false);

    useEffect(() => {
        if (imagePrice !== null) {
            let finalPrice = imagePrice * quantity; // Multiplicando pelo valor da quantidade

            if (selectedService === 3) {
                finalPrice += imagePrice * 0.4;
            } else if (selectedService === 4) {
                finalPrice += imagePrice * 0.2;
            }

            setAccumulatorPrice(finalPrice);
        }
    }, [imagePrice, selectedService, quantity]); // Adicionando quantity como dependência

    const handlePriceSelect = (price: number | null) => {
        setImagePrice(price);
    };

    const handleServiceSelect = (serviceType: string) => {
        let serviceIndex = null;

        if (serviceType === "Limpeza") serviceIndex = 1;
        else if (serviceType === "Impermeabilização") serviceIndex = 2;
        else if (serviceType === "Limpeza + Impermeabilização") serviceIndex = 3;
        else if (serviceType === "Limpeza + Hidratação de couro") serviceIndex = 4;

        setSelectedService(serviceIndex);
    };

    const handleQuantityChange = (quantity: number) => { // Função para atualizar a quantidade
        setQuantity(quantity);
    };

    const handleSimulateClick = () => {
        setIsResultVisible(true);
    };

    return (
        <SimulationContext.Provider value={{
            accumulatorPrice,
            selectedService,
            imagePrice,
            quantity,
            isResultVisible,
            handlePriceSelect,
            handleServiceSelect,
            handleQuantityChange, // Adicionando a função ao contexto
            handleSimulateClick
        }}>
            {children}
        </SimulationContext.Provider>
    );
};

export const useSimulation = () => {
    const context = useContext(SimulationContext);
    if (!context) {
        throw new Error("useSimulation must be used within a SimulationProvider");
    }
    return context;
};
