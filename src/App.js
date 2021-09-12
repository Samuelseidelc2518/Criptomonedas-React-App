import "./App.css"
import imagen from "./cryptomonedas.png"
import Formulario from "./components/Formulario"
import { useEffect, useState } from "react";
import axios from "axios";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner"

function App() {

  const [moneda, setMoneda] = useState("")
  const [criptomoneda, setCriptomoneda] = useState("")
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    
    const cotizar = async () =>{
        // evitamos la primera ejecucion
      if(moneda === "") return

      //consultar la api para obtener la cotizacions

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

      const resultado = await axios.get(url)

      //mostrar el spiner
      setCargando(true)

      //ocultar el spinner y mostrar el resultado
      setTimeout(()=>{
        //cambiar el estado de cargando
        setCargando(false)

        //guardar cotizacion
        const accesoALaApi = resultado.data.DISPLAY[criptomoneda][moneda]

        setCotizacion(accesoALaApi)
        
      },3000)

      
    }
    cotizar()
  }, [moneda, criptomoneda])


  let componente = cargando ? <Spinner /> : <Cotizacion cotizacion={cotizacion}/>

  return (
    <div className="contenedor">
      <div>
        <img 
          src={imagen}
          alt="imagen de criptomonedas" 
          className="imagen"
        />
      </div>
      <div>
        <h1 className="heading">
          Cotiza Criptomonedas al Instante
        </h1>
        <Formulario 
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
        />
        {componente}
      </div>
    </div>
  );
}

export default App;
