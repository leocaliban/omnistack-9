import React, { useState } from 'react';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    function handleSubmit() {

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label id="thumbnail">
                    <input type="file" />
                    <img src={camera} alt="Selecionar imagem" />
                </label>


                <label htmlFor="company">EMPRESA</label>
                <input
                    id="company"
                    type="text"
                    placeholder="Sua empresa incrível"
                    value={company}
                    onChange={event => setCompany(event.target.value)}
                />

                <label htmlFor="techs">TECNOLOGIAS <span>(separadas por vírgula)</span></label>
                <input
                    id="techs"
                    type="text"
                    placeholder="Quais tecnologias usam?"
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                />

                <label htmlFor="price">VALOR DA DIÁRIA <span>(em branco para GRÁTIS)</span></label>
                <input
                    id="price"
                    type="text"
                    placeholder="Valor cobrado por dia"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />

                <button className="btn" type="submit">Cadastrar</button>
            </form>
        </>
    );
}