import React from 'react';
import InlineCss from "react-inline-css";

var Profile = React.createClass({
	render: function () {
		return (
			<InlineCss stylesheet={`
				& .card {
					margin-right : 100px;
          padding-left: 300px;
					display:inline-block;
					text-align: center;
				}
				`}>


        <div className="card"><a href="/add-Status">Post Status</a></div>
        <div className="card"><a href="logout.php">Log out</a></div>

			</InlineCss>
		);
	}
})


var StatusHeader = React.createClass({
render: function()
{
  return(
  <h2 className="articletitle">Kangaroo&rsquo;s Status Wall Page</h2>
  )
}
})

const StatusList = ({status}) => (

  <div className='articleBody clear'>
    <StatusHeader/>
      <table id="tableFont" width='100%'>
      			<tr><th style={{width: '25%'}}>User</th><th style={{width: '25%'}}>Date</th><th style={{width: '40%'}}>Status</th><th style={{width: '10%'}}></th></tr>

              {status.map(status => (

                <tr key={status._id}>
                  <td>{status.user}</td><td>{status.date.toLocaleDateString()}</td><td>{status.status}</td>

              <td></td></tr>

              ))}

  </table>
            								<br/><p></p><br/><br/>
                            <Profile/>




  </div>
);

export default StatusList;
