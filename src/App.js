import React, { Component } from 'react';
import $ from 'jquery';
import uuid from 'uuid';

import './App.css';
import BuzzHeader from './components/BuzzHeader'
import SearchWindow from './components/SearchWindow'
import SignInWithSteam from './components/SignInWithSteam'
import ActivePlayers from './components/ActivePlayers'
import razor from './Assets/razor.jpg'
import abbadon from './Assets/abbadon.jpg'
import juggernaut from './Assets/juggernaut.jpg'
import lgc from './Assets/lgc.jpg'
import clinkz from './Assets/clinkz.jpg'
import ActivePosts from './components/ActivePosts'

class App extends Component {

  constructor(){
      super();
      this.state = {
      Items: [] ,
      ActivePlayers : [],
      Posts : []

      }
    }

    getPosts(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/comments?postId=1',
    dataType:'json',
    cache: false,
    success: function(data){
      this.setState({Posts: data}, function(){
      //  console.log(this.state);
      });
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
  });
}

    getActivePlayersList()
    {
      this.setState(
        {
          ActivePlayers : [
            {
              key:uuid.v4(),
              name: 'Zalimm Gamer',
              LoseOrWin : 'Lose',
              TypeOfMatch :'Ranked',
              time: '5',
              PlayerImgSrc: razor,
              HeroImgSrc: '../Assets/razor'



            },
            {
              key:uuid.v4(),
              name: 'Yolor',
              LoseOrWin : 'Win',
              TypeOfMatch :'Practice',
              time: '5',
              PlayerImgSrc: abbadon,
              HeroImgSrc: '../Assets/razor'



            },
            {
              key:uuid.v4(),
              name: 'MightyZalimmaa',
              LoseOrWin : 'Win',
              TypeOfMatch :'Tournament',
              time: '5',
              PlayerImgSrc: juggernaut,
              HeroImgSrc: '../Assets/razor'



            },
            {
              key:uuid.v4(),
              name: 'Silent Killer',
              LoseOrWin : 'Win',
              TypeOfMatch :'Ranked',
              time: '5',
              PlayerImgSrc: lgc,
              HeroImgSrc: '../Assets/razor'



            },
            {
              key:uuid.v4(),
              name: 'ltc.clk',
              LoseOrWin : 'Lose',
              TypeOfMatch :'Randked',
              time: '5',
              PlayerImgSrc:clinkz,
              HeroImgSrc: '../Assets/razor'



            }
          ]
        }
      );

    }

  getheaderItemsList()
  {
    this.setState(
      {
        Items : [
          {
            key:uuid.v4(),
            title: 'ProCircuit'
          },
          {
            key:uuid.v4(),
            title: 'Players'
          },
          {
            key:uuid.v4(),
            title: 'MatchRankings'
          },
          {
            key:uuid.v4(),
            title: 'Matches'
          },
          {
            key:uuid.v4(),
            title: 'Blogs'
          },

          {
            key:uuid.v4(),
            title: 'Forum'
          },

          {
            key:uuid.v4(),
            title: 'Heroes'
          },

          {
            key:uuid.v4(),
            title: 'Dire'
          },

          {
            key:uuid.v4(),
            title: 'Sentinel'
          },

          {
            key:uuid.v4(),
            title: 'DOTA CHAMPIONSHIP'
          }



        ]
      }
    );

  }



  componentWillMount()
  {
    this.getActivePlayersList();
    this.getheaderItemsList();
    this.getPosts();
  }

  handleSearch(SearchAsk){
    alert("You have asked for " + SearchAsk);
  }

  render() {
    return (
       <div className="App">
       <BuzzHeader HeaderItemsList={this.state.Items} />
       <SearchWindow SearchAsk={this.handleSearch.bind(this)}/>
       <SignInWithSteam />
       <ActivePlayers ActivePlayersList={this.state.ActivePlayers}/>
       <ActivePosts posts={this.state.Posts}/>

       </div>




);
  }
}

export default App;
