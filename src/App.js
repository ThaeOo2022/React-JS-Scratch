import React from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  async onSub(term) {
    const response= await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID f2PN1oOQ2IDBWuFVbRNGmgr-6LH_HYBXhGzBG-u6HRE'
      }
    });
    console.log(response.data.results);

  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSu={this.onSub} />
      </div>
    );

  }
}
export default App;