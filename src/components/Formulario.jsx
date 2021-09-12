import React, { useEffect, useState } from 'react'
import "./formulario.css"
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios from 'axios'
import Error from "./Error"
import PropTypes from "prop-types"

function Formulario({ setMoneda, setCriptomoneda }) {

  // state del listado de criptomonedas
  const [listacripto, setListacripto] = useState([])
  const [error, setError] = useState(false)
  const [cargandoCripto, setCargandoCripto] = useState(true)

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "COP", nombre: "Pesos Colombianos" },
  ]

  // Utilizar useMoneda
  const [ moneda, SelectMonedas ] = useMoneda('Elíge tu moneda', '', MONEDAS)

  // Utilizar useCriptomoneda
  const [ criptomoneda, SelectCripto ] = useCriptomoneda("Elíge tu criptomoneda", "", listacripto, cargandoCripto)

  //Ejecutar llamado a la API
  useEffect(() => {
    
    const consultarApi = async () =>{
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

      const resultado = await axios.get(url)
      setCargandoCripto(false)
      setListacripto(resultado.data.Data)
    }
    consultarApi()
  }, [])

  // CUando el usuario hace submit
  const cotizarMoneda = e => {
    e.preventDefault()

    //validar si ambos campos estan llenos

    if(moneda === "" || criptomoneda === ""){
      setError(true)
      return
    }

    //pasar los datos al componente principal

    setError(false)
    setMoneda(moneda)
    setCriptomoneda(criptomoneda)

  }

    return (
            <form 
              action=""
              onSubmit={cotizarMoneda}
            >
              { error ? <Error mensaje="Todos los campos son obligatorios" /> : null }

                <SelectMonedas />

                <SelectCripto />

                <button 
                  className="boton"
                  type="submit"
                >Calcular</button>
            </form>
    )
}

Formulario.propTypes = {
  setMoneda: PropTypes.func.isRequired,
  setCriptomoneda: PropTypes.func.isRequired
}

export default Formulario
