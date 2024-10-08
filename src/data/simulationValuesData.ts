import testImage2 from "./Images/simulations/testeImage2.png"

import Sofa2Lugar from "./Images/simulations/sofa2lugar.jpg"
import Sofa3Lugar from "./Images/simulations/sofa3lugar.png"

import cadeiraAssento from "./Images/simulations/cadeira-assento.png"
import cadeiraEncosto from "./Images/simulations/cadeira-encosto.png"

import ColchaoSolteiro from "./Images/simulations/colchao-solteiro.jpg"
import ColchaoCriança from "./Images/simulations/colchaocriança.jpg"
import ColchaoQueen from "./Images/simulations/colchao-queen.jpg"
import ColchaoKing from "./Images/simulations/colchao-king.png"
import BoxColchao from "./Images/simulations/box-colchao.png"

import Diva from "./Images/simulations/diva.png"

import PoltronaPequena from "./Images/simulations/poltrona-pequena.jpg"
import PoltronaMedia from "./Images/simulations/poltrona-media.png"
import PoltronaGrande from "./Images/simulations/poltrona-grande.jpeg"

import PuffPequeno from "./Images/simulations/puff-pequeno.png"
import PuffMedio from "./Images/simulations/puff-medio.png"
import PuffGrande from "./Images/simulations/puff-grande.jpg"

import Almofada from "./Images/simulations/almofada.png"

import CincoBancos from "./Images/simulations/5-bancos.png"
import PortaMalas from "./Images/simulations/porta-malas.png"
import Teto from "./Images/simulations/teto.jpg"
import Assoalho from "./Images/simulations/assoalho.png"

interface SimulationValuesDataProps {
    id: string
    src: string; 
    title: string; 
    price: number
}

export const simulationValuesData: Record<string, SimulationValuesDataProps[]> = {
    almofada: [
        {
            id: "almofada",
            src: Almofada,
            title: "Almofada",
            price: 15,
        }
    ],
    cadeira: [
        {
            id: "cadeira-assento",
            src: cadeiraAssento,
            title: "Cadeira somente assento",
            price: 20,
        },
        {
            id: "cadeira-assento-encosto",
            src: cadeiraEncosto,
            title: "Cadeira assento e encosto",
            price: 50,
        }
    ],
    sofá: [
        {
            id: "sofa-2-lugares",
            src: Sofa2Lugar,
            title: "Sofá 2 lugares",
            price: 100,
        },
        {
            id: "sofa-3-lugares",
            src: Sofa3Lugar,
            title: "Sofá 3 lugares",
            price: 150,
        }
    ],
    carro: [
        {
            id: "5-bancos",
            src: CincoBancos,
            title: "5 Bancos do Carro",
            price: 200,
        },
        {
            id: "porta-mala",
            src: PortaMalas,
            title: "Porta Malas",
            price: 50,
        },
        {
            id: "teto",
            src: Teto,
            title: "Teto",
            price: 50,
        },
        {
            id: "assoalho",
            src: Assoalho,
            title: "Assoalho",
            price: 50,
        }
    ],
    puff: [
        {
            id: "puff-pequeno",
            src: PuffPequeno,
            title: "Puff Pequeno",
            price: 60,
        },
        {
            id: "puff-medio",
            src: PuffMedio,
            title: "Puff Médio",
            price: 70,
        },
        {
            id: "puff-grande",
            src: PuffGrande,
            title: "Puff Grande",
            price: 80,
        }
    ],
    poltrona: [
        {
            id: "poltrona-pequena",
            src: PoltronaPequena,
            title: "Poltrona Pequena",
            price: 70,
        },
        {
            id: "poltrona-media",
            src: PoltronaMedia,
            title: "Poltrona Média",
            price: 95,
        },
        {
            id: "poltrona-grande",
            src: PoltronaGrande,
            title: "Poltrona Grande",
            price: 95,
        }
    ],
    divã: [
        {
            id: "diva",
            src: Diva,
            title: "Divã",
            price: 120,
        }
    ],
    colchão: [
        {
            id: "Colchão-de-solteiro",
            src: ColchaoSolteiro,
            title: "Colchão de solteiro/viuvo",
            price: 100,
        },
        {
            id: "Colchão-de-criança",
            src: ColchaoCriança,
            title: "Colchão de criança",
            price: 70,
        },
        {
            id: "Colchão-queen",
            src: ColchaoQueen,
            title: "Colchão queen",
            price: 180,
        },
        {
            id: "Colchão-King",
            src: ColchaoKing,
            title: "Colchão King",
            price: 200,
        },
        {
            id: "Box-para-colchão",
            src: BoxColchao,
            title: "Box para colchão",
            price: 70,
        }
    ],
}