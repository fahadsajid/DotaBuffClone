import React, { Component } from 'react';
import '../styles/PostSingle.css'


class PostSingle
 extends
Component
{
  render()
  {
    return(

    <div className='PostSingle'>
      <table className='TableForPosts'>
        <tbody>
          <tr>
            <td className='className'>
            {this.props.post.name}
            </td>
            
              <td></td><td></td><td></td>
            <td className='classEmail'>
            {this.props.post.email}
            </td>
          </tr>
          <tr>
          <td className='ClasssPost'>
          {this.props.post.body}
          </td>
          </tr>
        </tbody>
      </table>

      </div>
    );



  }
}

export default PostSingle;
