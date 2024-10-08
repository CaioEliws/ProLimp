import { useState } from "react";
import { ImageInput, ImageInputContainer, ImageInputContent } from "./styles";
import { simulationValuesData } from "../../../../data/simulationValuesData";

interface ServiceItem {
    id: string;
    src: string;
    title: string;
    price: number | null;
}

interface ImageInputServiceProps {
    serviceType: string | undefined;
    onSelect: (price: number | null) => void;
}

export function ImageInputService({ serviceType, onSelect }: ImageInputServiceProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

    const serviceData: ServiceItem[] = simulationValuesData[serviceType || ""] || [];

    const handleImageClick = (id: string) => {
        setSelectedId(id);

        const selectedItem = serviceData.find(item => item.id === id);
        onSelect(selectedItem?.price || null);

        setSelectedTitle(selectedItem?.title || null);
    };

    return (
        <ImageInputContainer>
            <p>{selectedTitle ? `Escolha uma opção:  ${selectedTitle}` : "Escolha uma opção:"}</p>

            <ImageInputContent>
                {serviceData.map((data) => (
                    <ImageInput
                        key={data.id}
                        onClick={(e) => {
                            e.preventDefault();
                            handleImageClick(data.id);
                        }}
                        $isSelected={selectedId === data.id}
                        $imageSrc={data.src}
                    >
                        <img src={data.src} alt={data.title} style={{ display: "none" }} />
                    </ImageInput>
                ))}
            </ImageInputContent>
        </ImageInputContainer>
    );
}
