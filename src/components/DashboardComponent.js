import React, {useState, useRef, useEffect} from 'react';

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Dieta from './DietaComponent'
import Descanso from './DescansoComponent'
import { withStyles } from '@material-ui/core/styles/withStyles'

import * as Constants from '../Utils/const'

const buttonStyle = {
        margin: '10px',
};

// function previousPoints(value) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
// }


const Dashboard = props => {
    
    const [activeComponent, setActiveComponent] = useState("")
    const [calorias, setCalories] = useState(0)
    const [puntaje, setPuntaje] = useState(0)
    
    const refPuntaje = useRef();
    useEffect(() => {
        refPuntaje.current = puntaje;
    });

    const classes = Constants.useStyles();
    
    const actualizarCalorias = (cal, pts) => {
        setCalories(cal);
        setPuntaje(pts)
        setActiveComponent("dashboard")
    }

    const actualizarPuntaje = (pts) => {
        setPuntaje(refPuntaje.current + pts)
        setActiveComponent("dashboard")
    }

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" direction="row" aligntems="center" spacing={10}>                    
                    <Grid item><Button  style={buttonStyle} variant="contained" color="primary" 
                        onClick={() => setActiveComponent("dieta")}>
                            Agregar dieta
                        </Button></Grid>
                        <Grid item><Button style={buttonStyle} variant="contained" color="primary"
                    onClick={() => setActiveComponent("ejercisio")}>
                        Agregar ejercisio
                        </Button></Grid>
                        <Grid item><Button  style={buttonStyle} variant="contained" color="primary"
                    onClick={() => setActiveComponent("descanso")}>
                        Agregar descanso
                        </Button></Grid>
                </Grid>                            
                {activeComponent == "dieta" ? <Dieta update={actualizarCalorias}/> : 
                activeComponent == "ejercisio" ? <Dieta/> :
                activeComponent == "descanso" ? <Descanso update={actualizarPuntaje}/>  :                             
                <ResumenDashboard date={props.date} month={props.month} calorias={calorias} puntos={puntaje}/>}
            </Grid>            
        </Grid>
    );
}

const ResumenDashboard = props => {
    return (
        <div>
            Mi puntaje del dia {props.date} de {props.month} es: {props.puntos}
            <br></br>
            Calories: {props.calorias}
        </div>
    )

}

export default Dashboard
