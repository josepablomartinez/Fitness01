import React from 'react'
import CalculosDieta from '../Utils/Utils'

class Dieta extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.update(event.target["calories"].value,         
            CalculosDieta.distribucionEnergica(parseInt(event.target["carbs"].value), parseInt(event.target["proteins"].value), parseInt(event.target["fat"].value), parseInt(event.target["sugar"].value)) + 
            CalculosDieta.conteoCalorias(parseInt(event.target["calories"].value))
            )     

    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Calorias consumidas: </p><input type="number" name="calories"></input>
                <p>Proteinas consumidas: </p><input type="number" name="proteins"></input>
                <p>Carbohidratos consumidas: </p><input type="number" name="carbs"></input>
                <p>Grasas consumidas: </p><input type="number" name="fat"></input>
                <p>Azucares consumidas: </p><input type="number" name="sugar"></input>
                <button>Agregar consumo</button>
            </form>
            
        )
    }
}

export default Dieta; 