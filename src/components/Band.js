import React, { Component } from 'react';
// import {useDispatch} from 'react-redux'

class Band extends Component {
  handleButtonClick = (e) => {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <li>
        Band Component for [ {this.props.band.name} ] <button onClick={this.handleButtonClick}>Delete</button>
      </li>
    );
  }
};

export default Band;
