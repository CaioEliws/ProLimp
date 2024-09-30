import { FormEvent, useState } from "react";
import { Form, FormSubmitButton } from "./styles";

import emailJs from "@emailjs/browser"

export function FormContact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(event: FormEvent) {
        event.preventDefault();

        const templateParams = {
            from_name: name,
            email: email,
            tel: tel,
            message: message,
        }

        emailJs.send("service_53kwuwe", "template_f0xlbxc", templateParams, "ZzJTBA1rxuHC4Or-Y")
        .then((response) => {
            console.log("Email Enviado!", response.status, response.text)
            setName('')
            setEmail('')
            setTel('')
            setMessage('');
        }, (error) => {
            console.log("ERROR: ", error)
        })
    }

    return (
        <Form onSubmit={sendEmail} >
            <input 
                type="text" 
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />
            <div>
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <input 
                    type="tel" 
                    placeholder="Digite seu Telefone"
                    onChange={(e) => setTel(e.target.value)}
                    value={tel}
                    required
                    />
            </div>
            <textarea
                placeholder="Digite a sua mensagem"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />

            <FormSubmitButton 
                type="submit"
            >
                Enviar
            </FormSubmitButton>
        </Form>
    )
}