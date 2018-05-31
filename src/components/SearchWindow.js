import React, { Component } from 'react';
import uuid from 'uuid';
import '../styles/SearchWindow.css'

class SearchWindow
 extends Component {

   constructor(){
      super();
      this.state = {
        SearchAsk:{}
      }
    }

    handleSubmit(e){
  if(this.refs.SearchAsk.value === ''){
    alert('The field is empty');
  } else {
    this.setState({SearchAsk:{
      key: uuid.v4(),
      Search: this.refs.SearchAsk.value,

    }}, function(){
    //  console.log(this.state);
      this.props.SearchAsk(this.state.SearchAsk);
    });
  }
  e.preventDefault();
}


  render() {
    return (

  <div className="home-search">
  <form onSubmit={this.handleSubmit.bind(this)}>

   <input className="input-search" ref="SearchAsk" placeholder="Search for heroes, items, players, leagues, teams..."/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <button className="btn-search" name="button" type="submit" >
    Search
   </button>
   </form>
   
   </div>

);

  }
}

export default SearchWindow;
