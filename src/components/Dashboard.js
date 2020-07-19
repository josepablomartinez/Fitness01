import React from 'react';
import Button from '@material-ui/core/Button';


const Dashboard = props => {

    return (
        <div>
            <div id="botonera">
                <div><Button variant="contained" color="primary">Agregar dieta</Button>
                <Button variant="contained" color="primary">Agregar ejercisio</Button>
                <Button variant="contained" color="primary">Agregar descanso</Button></div>
            </div>
            <div>
                Mi puntaje del dia {props.date} de {props.month} es: 100
            </div>
        </div>
    );
}

export default Dashboard
