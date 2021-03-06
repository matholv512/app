import React from "react";

export default function CepConsultado({evento}){
    return(
        <>
            <h2>CEP Encontrado</h2>

            <ul>
                {evento.map(item =>
                    <li className="list-group-item"
                    key={item.cep}>
                        <span> Mostrando Cep </span>
                        <span> CEP: {item.cep} </span>
                        <span> Logradouro: {item.logradouro} </span>
                        <span> Bairro: {item.bairro} </span>
                        <span> Localidade: {item.localidade} </span>
                        <span> UF: {item.uf} </span>
                    </li>
                )}

            </ul>
        </>
    )
}