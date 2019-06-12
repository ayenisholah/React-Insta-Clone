import React from 'react';
import '../../App.css';
import LoginPage from '../LoginPage/LoginPage';

const PostPage = (props) => {
  return (
    <div className='page post'>
      <div>Placeholder</div>
      <div>Placeholder</div>
      <button onClick={props.logout}>Log Out</button>
    </div>
  );
}

export default PostPage