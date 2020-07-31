import React from 'react'
import CalculoPuntaje from '../Utils/Utils'
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import Constants from '../Utils/const'



class Dieta extends React.Component {

    //This is for using a hook inside a class component
    UseStyleWrapper = (WrappedComponent) => {
        // eslint-disable-next-line react/display-name
        return function WrappedStyle() {
            const style = Constants.useStyles();
            
            return <WrappedComponent dataStyle={ style }/>;
         }    
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.update(event.target["calories"].value,         
            CalculoPuntaje.distribucionEnergica(parseInt(event.target["carbs"].value), parseInt(event.target["proteins"].value), parseInt(event.target["fat"].value), parseInt(event.target["sugar"].value)) + 
            CalculoPuntaje.conteoCalorias(parseInt(event.target["calories"].value))
        )     

    };
    render() {
        const classes = this.UseStyleWrapper(this)

        return (
            <Grid container className={classes.root} direction="column" alignItems="center">
                <Paper elevation={3} >                    
                    <form onSubmit={this.handleSubmit}>
                        <Grid item><TextField  id="calories"  label="Calorías" /></Grid>
                        {/* <p>Calorias consumidas: </p><input type="number" name="calories"></input> */}
                        <Grid item><TextField  id="proteins"  label="Proteínas" /></Grid>
                        <Grid item><TextField  id="carbs"  label="Carbohidratos" /></Grid>
                        <Grid item><TextField  id="fats"  label="Grasas" /></Grid>
                        <Grid item><TextField  id="sugar"  label="Azucares" /></Grid>
                        <Grid item p={2}><Button variant="contained" color="primary" size="small" startIcon={<SaveIcon />} >Agregar consumo</Button></Grid>
                    </form>
                </Paper>
            </Grid>
        )
    }
}

export default Dieta; 