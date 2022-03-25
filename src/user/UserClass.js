import React from "react";

export default class UserClass extends React.Component {

  render(){
      const {name, age} = this.props

      return (
        <p>
          Hello, my name is {name} and I'm {age} years old.
        </p>
      );
    }
  }