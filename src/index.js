import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const App=()=>{
  return(
    <div>Hello from React Js Class Based Component! This is introduction. Seee you next commit.</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

