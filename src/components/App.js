import React from 'react';
import Dashboard from './Dashboard'

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

// class App extends App.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             date: new Date().getDate(),
//             month: new Date().getMonth()
//         }
//     }
// }


const Fitness = () => {
    return <Dashboard date={new Date().getDate()} month={new Date().getMonth()} />
}


export default Fitness