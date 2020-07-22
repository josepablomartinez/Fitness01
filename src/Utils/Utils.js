const CalculosDieta = {

    //Carbohidratos: 50% - 55%
    //Proteínas: 10% - 15%
    //Grasas: 30% - 35%
    distribucionEnergica: (carbs, protein, fats, sugar) => {
        let puntaje= 0
        let total = [carbs, protein, fats, sugar].reduce((a, b) => a + b, 0);
        
        if ( 55 > carbs*100/total && carbs*100/total > 50) {
            puntaje++
        }

        if ( 15 > protein*100/total && protein*100/total  > 10) {
            puntaje++
        }

        if ( 35 > (fats + sugar)*100/total &&  (fats + sugar)*100/total > 30) {
            puntaje++
        }

        return puntaje
    },

    conteoCalorias: (calories) => {
        let puntaje= 0
        if (calories > 2200)  {
            puntaje++;
        }
        if (calories > 2500)  {
            puntaje++;
        }
        if (calories >= 3000)  {
            puntaje++;
        }

        return puntaje
    }
}

export default CalculosDieta