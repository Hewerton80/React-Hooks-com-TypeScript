import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContext from "./appContext";
import AppReducer from "./appReducer";
ReactDOM.render(
<>
<App />
<AppContext />
<AppReducer/>
</>
    , document.getElementById('root'));

