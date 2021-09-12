import React, { Fragment, useState } from 'react'
import "./useMoneda.css"
import PropTypes from "prop-types"

function useCriptomoneda(label, stateInicial, opciones, cargando) {

    // console.log(opciones)

    //state de nuestro custom hook
    const [state, setState] = useState(stateInicial)

    const SelectCripto = () => (
        <Fragment>
            <label htmlFor="seleccionaCripto" className="label">{label}</label>
            <select 
              name="seleccionaCripto" 
              id="seleccionaCripto"
              onChange={ e => setState(e.target.value) }
              value={state}
              className="select"
            >
                { cargando ? <option value="">-- Cargando: --</option> : <option value="">-- Seleccione: --</option> }
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </select>
        </Fragment>
    )

    //retornar state, interfaz y funcion que modifica el state

    return [state, SelectCripto, setState]

}

useCriptomoneda.propTypes = {
    label: PropTypes.string.isRequired,
    stateInicial: PropTypes.string.isRequired,
    opciones: PropTypes.array.isRequired,
    cargando: PropTypes.bool.isRequired
}

export default useCriptomoneda

