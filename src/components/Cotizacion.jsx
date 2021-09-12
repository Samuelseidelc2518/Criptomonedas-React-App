import React from 'react'
import "./cotizacion.css"
import PropTypes from "prop-types"

function Cotizacion({ cotizacion }) {
    if(Object.keys(cotizacion).length === 0) return null

    console.log(cotizacion)

    return (
        <div className="resultadoDiv">
        <p className="precio">El precio es: <span>{cotizacion.PRICE}</span></p>
        <p className="resultadoP">El precio más alto del día es: <span>{cotizacion.HIGHDAY}</span></p>
        <p className="resultadoP">El precio más bajo del día es: <span>{cotizacion.LOWDAY}</span></p>
        <p className="resultadoP">Variación en las últimas 24 horas: <span>{cotizacion.CHANGEPCT24HOUR}%</span></p>
        <p className="resultadoP">Última actualización: <span>{cotizacion.LASTUPDATE}</span></p>
        </div>
    )
}

Cotizacion.propTypes = {
    cotizacion: PropTypes.object.isRequired
}

export default Cotizacion
