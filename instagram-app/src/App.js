import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import CommentSection from './components/CommentSection';

class App extends Component {
  constructor() {
    super();
    this.state= {
      instagram: dummyData,
    };
  }

  render() {
    return (
      <div className='App'>
        <SearchBar/>
        <PostContainer
          instagram={this.state.instagram}
        />
        <CommentSection
          instagram={this.state.instagram}
        />
      </div>
    );
  }
}

export default App;