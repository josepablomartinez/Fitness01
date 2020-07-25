import React from 'react'
import { TextField } from '@material-ui/core';
import CalculoPuntaje from '../Utils/Utils'


class Descanso extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(CalculoPuntaje.puntajeDescando(parseInt(event.target["puntajeDescanso"].value),
            parseInt(event.target["hora"].value)*60 + parseInt(event.target["minutos"].value))
        )

    };
    render() {
        return(            
            <form onSubmit={this.handleSubmit}>
                <span>Horas de sueño: <TextField  type="number" name="hora"></TextField > Minutos de sueño: <TextField  type="number" name="minutos"></TextField ></span>
                <p>Puntaje de descanso: </p><TextField  type="number" name="puntajeDescanso" variant="filled" ></TextField >
                <button>Agregar descanso</button>
            </form>            
        )
    }

}

export default Descanso