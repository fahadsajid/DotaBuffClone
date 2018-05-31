import React, { Component } from 'react';
import '../styles/Header.css'
import HeaderItems from './HeaderItems'

class BuzzHeader extends Component {

  render() {
    let HeaderItemsList;
       if(this.props.HeaderItemsList){
         HeaderItemsList = this.props.HeaderItemsList.map(item => {
           //console.log(project);
           return (
             <HeaderItems title={item.title}/>
           );
         });
       }
// value added in HeaderItemsList
//for further use
    return (
      <div className="MainHeaderDiv">
<ul>
          <li>
              <a className="Dotabuff" href="#">DOTA BUFF</a>
              </li>
{HeaderItemsList}



</ul>



  </div>



);

  }
}

export default BuzzHeader;
