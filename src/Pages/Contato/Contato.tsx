import React from 'react';
import { All } from './style';

export default function Contato() {
    return (
        <All>
            <h1>Contato</h1>
            <div className='infos'>
                <h1>Email: <strong> contato@viaja53.com</strong></h1>
                <h1>Telefone:  <strong> (XX) xxxxx-xxxx</strong></h1>
            </div>
            <form 
                onSubmit={(e) => console.log(e.preventDefault())}
                className="contact_box"
            >
                <input className="name" placeholder="Seu Nome" type='text'/>
                <input className="email" placeholder="E-mail" type='email'/>
                <input className="phone" placeholder="Telefone" type='tel'/>
                <textarea className="mensage" placeholder="Sua Mensagem"/>
                <input type='submit' aria-label='Formulário de contato com a Hiiatus'/>
            </form>
        </All>
    );
}
