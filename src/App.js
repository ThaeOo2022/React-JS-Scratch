import React from "react";
import SearchBar from "./components/SearchBar";
class App extends React.Component {
onSub(t){
console.log(t);
}
    render() {
      return(
        <div className="ui container" style={{marginTop:"20px"}}>
         <SearchBar onSu={this.onSub}/>
        </div>
      );
      
    }
  }
  export default App;