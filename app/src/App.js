import React, { useState } from "react";
import CepConsultado from "./CepConsultado";

export default function App(){
    const [evento, setEvento] = useState([])

    const submitHandler = (e) =>{
        e.preventDefault();

        const formData = new FormData(e.target)

        const data = Object.fromEntries(formData)

        console.log(data.nome)
        console.log(data.cep)

        fetch(`http://localhost:3011/?cep=${data.cep}`)
        .then(response => response.json())
        .then(data => {
            const array = convertToArray(data)
            console.log('Array: ', array)
            setEvento(array)
        })
        .catch(error => console.error)
    }

    const convertToArray = (obj) =>{
        console.log('Formato JSON: ', obj)
        const arr = [obj]
        console.log('Formato Array: ', arr)

        return arr
    }

    return(
        <>
            <div className='container'>
                <form onSubmit={submitHandler}>
                    <div className='form-group'>

                        <input type="text" name='nome' className='form-control' placeholder='Nome'></input>
                        <input type='text' name='cep' className='form-control' placeholder='CEP'></input>

                        <button type='submit' className='btn btn-success'>Consultar CEP</button>

                    </div>
                </form>
                <CepConsultado evento={evento}/>
            </div>
        </>
    )
}