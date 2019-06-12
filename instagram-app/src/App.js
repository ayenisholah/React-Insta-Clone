import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/LoginPage/LoginPage'
import withAuthentication from './components/Authentication/Authentication';


class App extends Component {
  constructor() {
    console.log('Constructing....')
    super();
    this.state={
      data: []
    };
  }

  render() {
    console.log('rendering...')
    return (
      <div className='App'>
        <h1>You're Logged In: { this.props.isAuthed.toString() }</h1>
        {
          this.props.isAuthed === false &&
          <LoginPage login={this.props.login} />
        }
        {
          this.props.isAuthed === true &&
          <PostPage logout={this.props.logout} />
        }
      </div>
    );
  }
}

export default withAuthentication(App);