//import imagenes from './assets/imagenes';
//import moto from '../src/assets/img/moto.jpg';
import { React, useState } from 'react';
import './App.css';
//import moto from '../public/moto.jpg';
//import mrincre from './assets/img/img2.jpg';

//const fotos = require.context('./assets/img/moto.jpg',true);

function App() {
  const [valor, setValor] = useState(0)

  const [valor2, setValor2] = useState(0)

  const sumar = () =>{
    setValor(valor+1);
  }

  const Restar = () =>{
    setValor(valor-1);
  }

  const Restablecer = () =>{
    setValor(0);
  } 

  const sumar2 = () =>{
    setValor2(valor2+1);
  }

  const Restar2 = () =>{
    setValor2(valor2-1);
  }

  const Restablecer2 = () =>{
    setValor2(0);
  } 


  return (
    <>
      <div className='app'>

        <h1>Contador de boludos</h1>
        <h2>{valor}</h2>
        <button onClick={sumar}>sumar un boludo</button>
        <button onClick={Restar}>restar un boludo</button>

        <button onClick={Restablecer}> volver a cero</button>
        {/* <img src={mrincre}></img> */}
        

        <h1>Contador de buena gente</h1>
        <h2>{valor2}</h2>
        <button onClick={sumar2}>Aumentar</button>
        <button onClick={Restar2}>Restar</button>

        <button onClick={Restablecer2}> empezar de cero</button>
      </div>
      
      
      {/* <img src="data:image/jpeg;base64,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" alt="" /> */}

     


    </>
  )
}

export default App
