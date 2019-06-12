import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor(props) {
    console.log('Constructing....')
    super(props);
    this.state={
      instagram: [],
      currentComment: null
    };
  }

  componentDidMount() {
    console.log('Component Mounted!') 

    setTimeout(() => {
      this.setState({ instagram: dummyData })
    }, 1000);

  }

  likePhoto = id => {
    
  }

  addNewComment = id => {
    
  }

  render() {
    console.log('rendering...')
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