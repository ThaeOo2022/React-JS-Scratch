import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  }

  onVideoSelect = video => {
    console.log('From the App', video);
  }

  render() {

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
