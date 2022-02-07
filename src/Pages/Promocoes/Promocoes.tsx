import React from 'react';
import { isTemplateTail } from 'typescript';
import { PromoList } from './PromoList';
import { All } from './style';

export default function Promocoes() {
    return (
        <All>
            <h1>Promoções</h1>
            <div className='row'>
              {PromoList.map(promo => { 
                  return(
                      <div 
                          className='card'
                          key={promo.id}
                      >
                          <img src={promo.image}/>
                          <h1>Promoção para {promo.title}</h1>
                          <span>
                            <p>{promo.ida}</p>
                            <p>{promo.volta}</p>
                            <p>{promo.hotel}</p>
                            <p>{promo.pacote}</p>
                            <p>{promo.preco}</p>
                          </span>
                          <button>Comprar</button>
                      </div>
                  )
              })}
            </div>
        </All>
    );
}
