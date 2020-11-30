import React, { Component } from 'react';
import "../css/style.css";
import { Redirect } from 'react-router-dom';

class addnewpost extends Component{

  state = {
    error: false,
    success: false,
    title:'',
    posttype:'',
    postdesc: '',
  }
  titlechange =(event)=>{
    this.setState({
      title:event.target.value,
    })
  }
  posttypechange =(event)=>{
    this.setState({
      // title:event.target.value,
      posttype:event.target.value,
    })
  }

  postdescrib = (event)=>{
    this.setState({
        postdesc: event.target.value,
    });
  }
 

  savePost = (event) => {
    fetch("/api/addnewposts/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        posttype:this.state.posttype,
        postdesc: this.state.postdesc,
      }),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

render(){
  console.log(this.state.success);
  if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }
return (
   
      <div >
        { errorMessage }
         <form > 
          
         <fieldset className="design-form">
         <p>Fill up your post</p>
           {/* <legend>Fill up your post</legend> */}
           <hr />
                  Title:<input type="text" placeholder="Enter your title" value={this.state.title} name="title" onChange={this.titlechange} /><br /><br />
                  PostType:
                  <select name ="posttype" value={this.state.posttype} onChange={this.posttypechange}>
                      <option value ='null' > </option>
                      <option value="job" >Job</option>
                      <option value="rental">Rental</option>
                  </select><br /><br />
                  
                  Description: <br />
                  <textarea type="description" value={this.state.postdesc} name="description" onChange={this.postdescrib}  row="120" cols="60" placeholder="Add your description" /><br /><br />
                  <button value="submit" submit ="submit" onClick={this.savePost} >post</button>
                  </fieldset>
          </form> 
          
         </div>
  );
}
}

export default addnewpost;