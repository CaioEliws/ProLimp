import { FormEvent, useState } from "react";
import { Button } from "../Button";
import { Form, Title } from "./styles";

import emailJs from "@emailjs/browser";

interface FormBudgetProps {
    title: string;
    hasTextArea?: boolean;
}

export function FormBudget({ title, hasTextArea }: FormBudgetProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [service, setService] = useState<string>('Limpeza');
    const [textAreaValue, setTextAreaValue] = useState('');

    function sendEmail(event: FormEvent) {
        event.preventDefault();

        const templateParams = {
            from_name: name,
            email: email,
            tel: tel,
            service: hasTextArea ? textAreaValue : service,
        };

        emailJs.send("service_53kwuwe", "template_kh6ps97", templateParams, "ZzJTBA1rxuHC4Or-Y")
            .then((response) => {
                console.log("Email Enviado!", response.status, response.text);
                setName('');
                setEmail('');
                setTel('');
                setService('Limpeza');
                setTextAreaValue('');
            }, (error) => {
                console.log("ERROR: ", error);
            });
    }

    return (
        <Form onSubmit={sendEmail}>
            <Title>{title}</Title>

            <input 
                type="text" 
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />
            <input 
                type="email" 
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            <input 
                type="tel" 
                placeholder="Digite seu Whatsapp"
                onChange={(e) => setTel(e.target.value)}
                value={tel}
                required
            />

            {hasTextArea ? (
                <textarea
                    placeholder="Digite sua mensagem ou descrição do serviço"
                    onChange={(e) => setTextAreaValue(e.target.value)}
                    value={textAreaValue}
                    required
                />
            ) : (
                <select
                    value={service} 
                    onChange={(e) => setService(e.target.value)} 
                    required
                >
                    <option value="Limpeza">Limpeza</option>
                    <option value="Impermeabilização">Impermeabilização</option>
                    <option value="Limpeza Completa">Limpeza Completa</option>
                    <option value="Meia Limpeza">Meia Limpeza</option>
                </select>
            )}

            <Button title="Enviar" type="submit" />
        </Form>
    );
}
