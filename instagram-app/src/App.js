import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state= {
      instagram: dummyData,
      currentUser: null
    };
  }

  render() {
    return (
      <div className='App'>
        <SearchBar/>
        <PostContainer
          instagram={this.state.instagram}
        />
      </div>
    );
  }
}

export default App;