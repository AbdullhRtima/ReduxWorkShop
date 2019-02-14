import React, { Component } from 'react'
import propTypes from 'prop-types'
import {connect} from 'react-redux';
import {createPost} from '../actions/postsAction'

class Formpost extends Component {
    state={
        data : {
            title : '',
            body :''
        }

       
    }
    
   handleStringChange = e => 
   this.setState ({
       data : { ...this.state.data, [e.target.name] : e.target.value }
   });

   onSubmit = e => {
       e.preventDefault(); 
       const post ={
           title  : this.state.data.title ,
           body : this.state.data.body 
       };
    
       this.props.createPost(post);

   }

  render() {
      const {data} = this.state
    return (
          <form onSubmit={this.onSubmit}>
              <div>
              <label htmlFor="title">title : </label>
              <input
                type="text"
                name="title"
                value={data.title} 
                onChange={this.handleStringChange}
                />
              </div>
              <br/>
             <div>
             <label htmlFor="body" >Body:</label>
                   <textarea
                    name="body"
                    value ={data.body}
                    onChange={this.handleStringChange}
                   />
             </div>
             <button type="submit"> submit </button>
             
              </form>
    )
  }
}
Formpost.protoTypes ={
    createPost : propTypes.func.isRequired
}

export default connect(null , {createPost}) (Formpost) ;