import React, { Component } from 'react';
import { Loader } from './Loader';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home Page</h3>
        <Loader />
      </div>
    )
  }
};
