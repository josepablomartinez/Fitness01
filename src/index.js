import React from 'react';
import ReactDOM from 'react-dom';
import '../p_style.css'

import App from './components/App';

ReactDOM.hydrate(
    <App />,
    document.getElementById('mountNode'),
);