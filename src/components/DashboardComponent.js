import React, {useState, useRef, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dieta from './DietaComponent'
import Descanso from './DescansoComponent'

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
        <div>            
            <div id="botonera" >
                <div>
                    <Button style={buttonStyle} variant="contained" color="primary" 
                    onClick={() => setActiveComponent("dieta")}>
                        Agregar dieta
                    </Button>
                <Button style={buttonStyle} variant="contained" color="primary"
                onClick={() => setActiveComponent("ejercisio")}>
                    Agregar ejercisio
                    </Button>
                <Button  style={buttonStyle} variant="contained" color="primary"
                onClick={() => setActiveComponent("descanso")}>
                    Agregar descanso
                    </Button></div>
            </div>
            {activeComponent == "dieta" ? <Dieta update={actualizarCalorias}/> : 
            activeComponent == "ejercisio" ? <Dieta/> :
            activeComponent == "descanso" ? <Descanso update={actualizarPuntaje}/>  :             
            <ResumenDashboard date={props.date} month={props.month} calorias={calorias} puntos={puntaje}/>}
            
        </div>
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
