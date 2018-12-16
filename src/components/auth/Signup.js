import React, { Component } from "react";

class Signup extends Component {
  state = {};
  render() {
    return (
      <form>
        <fieldset>
          <label>Email</label>
        </fieldset>
        <fieldset>
          <label>Password</label>
        </fieldset>
      </form>
    );
  }
}

export default Signup;
