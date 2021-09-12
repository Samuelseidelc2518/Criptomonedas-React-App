import React, { Fragment, useState } from 'react'
import "./useMoneda.css"
import PropTypes from "prop-types"

function useMoneda(label, stateInicial, opciones) {

    //state de nuestro custom hook
    const [state, setState] = useState(stateInicial)

    const Seleccionar = () => (
        <Fragment>
            <label htmlFor="seleccionaMoneda" className="label">{label}</label>
            <select 
              name="seleccionaMoneda" 
              id="seleccionaMoneda"
              onChange={ e => setState(e.target.value) }
              value={state}
              className="select"
            >
                <option value="">-- Seleccione: --</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    )

    //retornar state, interfaz y funcion que modifica el state

    return [state, Seleccionar, setState]

}

useMoneda.propTypes = {
    label: PropTypes.string.isRequired,
    stateInicial: PropTypes.string.isRequired,
    opciones: PropTypes.array.isRequired
}

export default useMoneda
