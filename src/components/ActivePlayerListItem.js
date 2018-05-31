import React, { Component } from 'react';
import '../styles/ActivePlayers.css'

class ActivePlayersListItem
 extends Component {

  render() {
    return (

  <tr className='tableRow'><td >
  <img
  src={this.props.PlayerImgSrc}
  />
  </td>
  <td>
  <div>
  <a href="#" className = 'Playername'>{this.props.Playername}</a>
  <a className='distance'>
  {this.props.LoseOrWin} Match</a>
  </div><br/>
  <div> <a className='TypeOfMatch'>{this.props.TypeOfMatch}
</a>

  </div>
  </td>
  </tr>


);

  }
}

export default ActivePlayersListItem;
