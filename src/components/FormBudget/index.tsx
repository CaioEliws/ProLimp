import { Button } from "../Button";
import { Form, Title } from "./styles";

interface FormBudgetProps {
    title: string;
}

export function FormBudget({ title }: FormBudgetProps) {
    return (
        <Form>
            <Title>{ title }</Title>

            <input 
                type="text" 
                placeholder="Digite seu nome"
                required
            />
            <input 
                type="email" 
                placeholder="Digite seu e-mail"
                required
            />
            <input 
                type="tel" 
                placeholder="Digite seu Whatsapp"
                required
            />
            <select required>
                <option value="Limpeza">Limpeza</option>
                <option value="Impermeabilização">Impermeabilização</option>
                <option value="Limpeza Completa">Limpeza Completa</option>
                <option value="Meia Limpeza">Meia Limpeza</option>
            </select>

            <Button title="Enviar" type="submit" />
        </Form>
    )
}