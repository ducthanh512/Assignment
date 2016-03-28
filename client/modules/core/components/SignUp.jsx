import React from 'react';

class SignUp extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <form className="article" onSubmit={this.createPost.bind(this)}>

        <fieldset className="row">
        			<legend></legend>
        			<div id="registerdive">

        			<table id="tableFont">

        			<tr>
        			<td style={{width: '20%'}} id="registervaluetd"><label for="email">Email:<span class="required"></span></label></td>
        			<td id="registervaluetd"><label id= "lbemail"></label><input ref="emailRef" type="email" name="email" id="email" required maxlength="50" size="50" class="input-xlarge"/>


        			</td>
        			</tr>

        			<tr>
        			<td><label for="profileName">Profile Name:<span class="required"></span></label></td>
        			<td><label id= "lbprofileName"></label><input ref="profileNameRef" type="text" name="profileName" id="profileName" required maxlength="30" size="50"  class="input-xlarge"/></td>
        			</tr>


        			<tr>
        			<td><label for="password">Password:<span class="required"></span></label></td>
        			<td><label id= "lbpassword"></label><input ref="passwordRef" type="password" name="password" maxlength="20" id="password" required size="50"  class="input-xlarge"/></td>
        			</tr>

        			<tr>
        			<td><label for="cpassword">Confirm Password:<span class="required"></span></label></td>
        			<td><label id= "lbcpassword"></label><input ref="repasswordRef" type="password" name="cpassword" id="cpassword" required maxlength="20" size="50"  class="input-xlarge"/></td>
        			</tr>

        				<tr>
        			<td>
        			</td>

        			<td>
        			<input id="btnSubmit" type="submit" name="submit" class="primary" value="Register"/>
        			<input id="btnReset" type="reset" name="reset" class="primary" value="Reset"/>
        			</td>
        			</tr>

        			</table>
        			</div>


        			</fieldset>
      </form>
    );
  }

  createPost(event) {
    // Becaus the test cannot get event argument
    // so call preventDefault() on undefined cause an error
    if (event && event.preventDefault) {
      event.preventDefault();
    }

  //  const {create} = this.props;
  //  const {titleRef, contentRef} = this.refs;

//    create(titleRef.value, contentRef.value);
  }
}

export default SignUp;
