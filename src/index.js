import React from 'react';
import ReactDOM from 'react-dom/client';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: null };



  }

  render() {

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude});
     
      },
      (err) => {this.setState({errorMessage:err.message})}
    );
     if(this.state.errorMessage && ! this.state.lat ){
      return <div>Error:{this.state.errorMessage}</div>
     }
     if(!this.state.errorMessage &&  this.state.lat ){
      return <div>Latitude:{this.state.lat}</div>
     }
    

   
  }
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

