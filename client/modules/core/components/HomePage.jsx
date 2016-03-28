import React from 'react';

class HomePage extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <form className="article">
        <h2 class="articletitle">Assignment Home Page</h2>

          <div class="line"></div>

                              <div class="articleBody clear">

          					  <div class="hompagetopleft">
          					  <p>Name: Duc Thanh Nguyen</p>
          					  <p>Student ID: 2095637</p>
          					  <p>Email: 2095637@student.swin.edu.au</p>

                                 <p>I declare that this assigment is my individual work. I have not worked collaboratively nor have I copied from any other student''s work or from any other source.</p>

          					</div>
                              </div>
      </form>
    );
  }

  createPost(event) {
    // Becaus the test cannot get event argument
    // so call preventDefault() on undefined cause an error
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export default HomePage;
