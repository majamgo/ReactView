var React = require('react');
var DefaultLayout = require('./layouts/default');

function Index(props) {
  return (

<DefaultLayout title={"Site"}>
    <div className="index_div">
      <h1>Hello - {props.velkomst}</h1>
      {props.userId ?
        <>
            <a href='/home'>Home</a>
            <form method='post' action='/logout'>
                <button>Logout</button>
            </form>
        </>
       :
       <ul className="index_ul">
            <li><a href='/login'>Login</a></li>
            <li><a href='/register'>Register</a></li>
        </ul>
      }
    </div>
  </DefaultLayout>);
}

module.exports = Index;