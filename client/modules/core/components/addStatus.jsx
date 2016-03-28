import React from 'react';

class AddStatus extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <form onSubmit={this.createStatus.bind(this)}>
        <h2>Add New Status</h2>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}

          <input style={{color:'black'}} ref="statusRef" type="Text" placeholder="Enter your status." /> <br/> <br/>

          <button style={{color:'blue'}} type="submit">Add New</button>
        </form>
    );
  }

  createStatus(event) {
    // Becaus the test cannot get event argument
    // so call preventDefault() on undefined cause an error
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create} = this.props;
    const {statusRef} = this.refs;

    create(statusRef.value);
  }
}

export default AddStatus;
