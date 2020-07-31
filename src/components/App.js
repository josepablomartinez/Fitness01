import React from 'react';
import Dashboard from './DashboardComponent'


// export default function App() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             Mi puntaje del dia:
//             <br />
//             <button onClick={() => setCount(count + 1)}>{count}</button>
//         </div>
//     );
// }


const Fitness = () => {  
    return <Dashboard date={new Date().getDate()} month={new Date().getMonth()} />
}

export default Fitness