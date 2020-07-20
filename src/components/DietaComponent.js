import React from 'react'

class Dieta extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();   
        this.props.update(event.target["calories"].value)     

    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Calorias consumidas: </p><input type="text" name="calories"></input>
                <p>Proteinas consumidas: </p><input type="text" name="proteins"></input>
                <p>Carbohidratos consumidas: </p><input type="text" name="carbs"></input>
                <button>Agregar consumo</button>
            </form>
            
        )
    }
}

export default Dieta; 