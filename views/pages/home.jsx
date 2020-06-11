var React = require('react');
var DefaultLayout = require('../layouts/default');

function Home(props) {
  return (

<DefaultLayout title={"Home"}>
    <div className="index_div">
    <h1>Home</h1>
        <a href='/'>Main -></a>
        <ul className="home_ul">
            <li>Name: {props.user.name}</li>
            <li>Email: {props.user.email}</li>
        </ul>
        <img src={props.user.img} alt=""/>
    </div>
  </DefaultLayout>);
}

module.exports = Home;