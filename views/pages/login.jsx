var React = require('react');
var DefaultLayout = require('../layouts/default');

function Login() {
  return (

<DefaultLayout title={"Login"}>
    <div className="index_div">
    <h1>Login</h1>
        <form method='post' action='/login'>
            <input type='email' name='email' placeholder='Email' required className="form_inp"/>
            <input type='password' name='password' placeholder='Password' required  className="form_inp"/>
            <input type='submit' className="form_btn"/>
        </form>
        <a href='/register'>Register -></a>
    </div>
  </DefaultLayout>);
}

module.exports = Login;