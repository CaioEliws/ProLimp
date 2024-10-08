import { AmountInputContainer } from "./styles";
import React, { useState, useEffect } from "react";

interface AmountInputProps {
    onSimulate: () => void;
    onQuantityChange: (quantity: number) => void;
}

export function AmountInput({ onSimulate, onQuantityChange }: AmountInputProps) {
    const [inputValue, setInputValue] = useState<number | undefined>(undefined);

    useEffect(() => {
        const quantity = inputValue ?? 0;
        onQuantityChange(quantity);
    }, [inputValue, onQuantityChange]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericValue = Number(value);

        if (numericValue >= 1 || value === "") {
            setInputValue(value === "" ? undefined : numericValue);
        }
    };

    const handleClick = () => {
        if (inputValue !== undefined && inputValue >= 1) {
            onSimulate();
        }
    };

    return (
        <AmountInputContainer>
            <p>Quantidade?</p>
            <input 
                type="number" 
                value={inputValue === undefined ? "" : inputValue} 
                onChange={handleChange} 
                min={1} 
            />
            <button type="button" onClick={handleClick}>
                Fazer simulação
            </button>
        </AmountInputContainer>
    );
}
