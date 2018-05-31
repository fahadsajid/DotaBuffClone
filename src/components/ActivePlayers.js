import React, { Component } from 'react';
import uuid from 'uuid';
import ActivePlayersListItem from './ActivePlayerListItem';
import '../styles/ActivePlayers.css'

class ActivePlayers
 extends Component {



  render() {
    let ActivePlayersList;
       if(this.props.ActivePlayersList){
         ActivePlayersList = this.props.ActivePlayersList.map(Players => {
           console.log(Players);

           return (
             <ActivePlayersListItem
              Playername={Players.name}
              LoseOrWin = {Players.LoseOrWin}
              TypeOfMatch ={Players.TypeOfMatch}
              Time={Players.time}
              PlayerImgSrc={Players.PlayerImgSrc}
              HeroImgSrc = {Players.HeroImgSrc}
              />
           );
         });
       }
    return (

  <div className="ActivePlayers">
<table className='TableSize'>
<tbody>
{ActivePlayersList}
</tbody>
</table>
   </div>

);

  }
}

export default ActivePlayers;
