import React, { Component } from 'react';
import dummy from './dummy-data';
import SearchBar from './components/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state= {
      dummy,
    };
  }

  render() {
    return (
      <div className='App'>
        <SearchBar/>
      </div>
    );
  }
}

export default App;