  // StrictAccess.js
  import React, { Component } from 'react';
  import { Redirect } from 'react-router-dom';

  class StrictAccess extends Component {
    render() {
      const { username, password } = this.props.user;
      if (!(username==='Joao' && password === '1234')){
        alert('Access denied');
        return <Redirect to="/" />
      }
      return (
        <p>Welcome João!</p>
      );
    }
  }

  export default StrictAccess;