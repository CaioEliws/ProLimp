import { Form, FormSubmitButton } from "./styles";

export function FormContact() {
    return (
        <Form>
            <input 
                type="text" 
                placeholder="Digite seu nome"
                required
            />
            <div>
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail"
                    required
                />
                <input 
                    type="tel" 
                    placeholder="Digite seu Telefone"
                    required
                />
            </div>
            <textarea
                placeholder="Digite a sua mensagem"
            />

            <FormSubmitButton 
                type="submit"
            >
                Enviar
            </FormSubmitButton>
        </Form>
    )
}