// Import react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Import subcomponents
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

// Pull in youtube API key and search lib
import youtube from '../config.js';

// Create new class component that produces some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch = this.videoSearch.bind(this);
  }

  componentDidMount() {
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: youtube, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    // Throttle dynamic search & refresh to 500ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}
        />
        <VideoDetail
          video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
        />
      </div>
    );
  }
};

// Take component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));