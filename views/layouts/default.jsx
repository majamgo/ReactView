var React = require('react');

function DefaultLayout(props) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Session Auth | {props.title}</title>
        <link rel="stylesheet" href="/public/css/style.css" />
      </head>
      <body>

          {props.children}
          
          </body>
    </html>
  );
}

module.exports = DefaultLayout;
