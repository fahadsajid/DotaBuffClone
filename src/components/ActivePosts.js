import React, { Component } from 'react';
import uuid from 'uuid';
import PostSingle from './PostSingle'
import '../styles/ActivePosts.css'

class ActivePosts
 extends Component {



  render() {
    let myposts;
    if(this.props.posts){

      myposts = this.props.posts.map(post => {

        return (
          <PostSingle name={post.name} email={post.email} body={post.body} post ={post} />
        );
      });
    }
    return (
      <div className="ActivePosts">
        <h3> Recent Posts </h3>
        {myposts}
      </div>
    );
  }

}

export default ActivePosts;
