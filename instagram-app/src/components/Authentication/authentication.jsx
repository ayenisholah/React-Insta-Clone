import React from 'react';

export default function withAuthentication(Component) {
  return class Authentication extends React.Component {
    constructor() {
      super();
      this.state = {
        isAuthed: false
      }
    }

    render() {
      return (
        <>
        </>
      )
    }
  }
}