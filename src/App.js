import "./App.css"
import imagen from "./cryptomonedas.png"

function App() {
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
      </div>
    </div>
  );
}

export default App;
