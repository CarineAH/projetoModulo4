import React from 'react';
import { Link } from 'react-router-dom';
import { All } from './style';

export default function Header() {
    return (
        <All>
            <div>
                <img src='https://cdn.discordapp.com/attachments/811466540460802095/939294439900336158/favicon.jpeg'/>
                <Link className='title' to='/'>Home</Link>
                <Link className='title' to='/destino'>Destino</Link>
                <Link className='title' to='/promocoes'>Promoções</Link>
                <Link className='title' to='/contato'>Contato</Link>
            </div>
        </All>
    );
}