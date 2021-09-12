import React from 'react'
import "./error.css"
import PropTypes from "prop-types"

function Error({mensaje}) {
    return (
        <p className="error">{mensaje}</p>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error
