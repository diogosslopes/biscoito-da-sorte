import React from "react";
import Sentences from "./Sentences";
import { useState } from "react";

const Button = () => {

    const sentences = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.']

    const [sentence, setSentence] = useState()

    function open(){
        const newSentence = Math.floor(Math.random() * sentences.length)
        document.querySelector('.sentence').classList.add('show')
        setSentence(sentences[newSentence])
    }

    return(
        <div className="button-sentence">
            <button onClick={open}>Abrir Biscoito</button>
            <Sentences sentence={sentence} />
        </div>
    )
}

export default Button