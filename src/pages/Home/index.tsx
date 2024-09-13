import { FormBudget } from "../../components/FormBudget";
import { Pagination } from "../../components/Pagination";
import { Header } from "../Header";
import { Budgets, HomeContainer, TextBudgets } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Header />

            <Budgets>
                <TextBudgets>
                    <div>
                        <h1>Limpeza completa com proteção impermeável e hidratação do couro.</h1>
                        <h2>Proporcionando conforto e bem-estar para sua família.</h2>
                    </div>
                </TextBudgets>

                <FormBudget title="Faça um orçamento" />
            </Budgets>

            <Pagination />
        </HomeContainer>
    )
}