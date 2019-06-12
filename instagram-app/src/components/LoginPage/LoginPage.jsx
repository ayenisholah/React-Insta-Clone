import React from 'react';


const LoginPage = (props) => {
  return (
    <form>
      <div className='instagram-logo'>
      
      </div>
      <div className='page login'>
      <label for='uname'><b>Username</b></label>
      <input type='text' placeholder='Enter Username' name='uname' required/>

      <label for='psw'><b>Password</b></label>
      <input type='password' placeholder='Enter Password' name='uname' required/>

      <button onClick={props.login} type='submit'>Login</button>
      
      </div>
    </form>
  );
}

export default LoginPage;