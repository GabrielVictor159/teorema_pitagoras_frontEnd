import React from "react";
import { useState } from "react";
import Keys from "../../keys";
import { ToastContainer, toast } from "react-toastify";
const name = "TeoremaPitagoras"
import "./TeoremaPitagoras.scss"
export default function TeoremaPitagoras(props) {
    const [result, setResult] = useState("");
    const [valor1, setValor1] = useState(null);
    const [valor2, setValor2] = useState(null);

    const calcular = ()=>{
        if(valor1 !== null || isNaN(valor1)===true){
            if(valor2 !== null || isNaN(valor2)===true){
        fetch(`${Keys.linkApi}/pitagoras/${parseFloat(valor1).toFixed(2)}/${parseFloat(valor2).toFixed(2)}`)
        .then((res)=>res.json())
        .then((data)=>{
            setResult(`${parseFloat(data.c).toFixed(2)}`)
        })
        }
        else{
            alert("por favor insira um valor no numero 2")
        }
    }
    else{
        alert("por favor insira um valor no numero 1")
    }
}
    return (
        <>
        <div className={`${name}_body`}>
            <div className={`${name}_box`}>
                <div className={`${name}_box_result`}>
                <h1>{result}</h1>
                </div>
                <div className="inputbox">
                    <input type="number" onChange={e=>setValor1(e.target.value)} name="text" className="input" placeholder="Primeiro valor"></input>
                    <br />
                    <input type="number" onChange={e=>setValor2(e.target.value)} name="text" className="input" placeholder="Segundo valor"></input>
                </div>
                <br />
                <div className="button-borders">
                    <button onClick={calcular} className="primary-button"> CALCULAR
                    </button>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    );
}