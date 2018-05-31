import React, { Component } from 'react';
import '../styles/Header.css'

class HeaderItems
 extends Component {

  render() {
    return (
    <li ><a className="HeaderItemsStyle" href="#">{this.props.title}</a></li>


);

  }
}

export default HeaderItems;
