import React from 'react';
import Navigation from './navigation.jsx';
import InlineCss from "react-inline-css";
var App = React.createClass({
render: function()
{


const currentEmail = Meteor.user().emails[0].address;
  return(
    <InlineCss stylesheet={`
      & .card {
        padding-left: 70%;
        display:inline-block;
        text-align: center;
      }
      `}>
<div className="card"><h4>Welcome: {currentEmail}</h4></div>

	</InlineCss>
  )
}
})
const Layout = ({content = () => null }) => (
  <div>
    <header>
    <h1>Assignment</h1>
    <Navigation />
    <App/>

    </header>

    <div>
    {content()}
    </div>

    <footer>

    </footer>
  </div>
);

export default Layout;
