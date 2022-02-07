import React from 'react';

import { All } from './style';

import Contato from '../Contato/Contato';
import Destino from '../Destino/Destino';
import Promocoes from '../Promocoes/Promocoes';
import { CardList } from './CardList';

export default function Home() {
    return (
        <All>
            <header>
                <img src='https://cdn.discordapp.com/attachments/811466540460802095/939294439900336158/favicon.jpeg'/>
                <h1>Agência Viaja53</h1> 
                <p>Bem vindo(a) a mais nova agencia de viagens do Brasil!</p>   
            </header>
            <section>
                {CardList.map((card, index) => {
                    return(
                        <div className='card' key={index}>
                            <h1>{card.title}</h1>
                            <p>{card.text}</p>
                        </div>
                    )
                })}
            </section>      
            <Destino/>
            <Promocoes/>
            <Contato/>
        </All>
    );
}
