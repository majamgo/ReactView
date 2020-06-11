var React = require('react');
var DefaultLayout = require('../layouts/default');

function Register() {
  return (

<DefaultLayout title={"Register"}>
    <div className="index_div">
    <h1>Register</h1>
        <form method='post' action='/register'>
            <input name='name' placeholder='Name' required  className="form_inp"/>
            <input type='email' name='email' placeholder='Email' required  className="form_inp"/>
            <input type='password' name='password' placeholder='Password' required  className="form_inp"/>
            <input type='submit'  className="form_btn"/>
        </form>
        <a href='/login'>Login -></a>
    </div>
  </DefaultLayout>);
}

module.exports = Register;