import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";

class App extends React.Component {

  state = { images: [] };
   onSub=async (term) =>{
    const res = await unsplash.get('/search/photos', {
      params: { query: term },
     
    });

    console.log(res);
    this.setState({ images: res.data.results });
    //this.setState=this.setState({ images: response.data.results});

  }
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSu={this.onSub} />
        Found:{this.state.images.length} images
      </div>
    );

  }
}
export default App;