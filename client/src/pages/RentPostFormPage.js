import React from 'react';
import { Redirect } from 'react-router-dom';

class RentPostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    title: '',
    content: '',
    postType: 'rent'
  }

  /*
  titleChanged = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  contentChanged = (event) => {
    this.setState({
      content: event.target.value
    });
  }
  */
 handleChange = (event) => {
   const value = event.target.value;
   this.setState({
     ...this.state,
     [event.target.name]: value
   });
 }

  savePost = (event) => {
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    })
      .then(res => {
        if(res.ok) {
          console.log(JSON.stringify(this.state));
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
        console.log(JSON.stringify(this.state));
      })
      .catch(err => {
        this.setState({
          error: true,
        });
        console.log(JSON.stringify(this.state));
      });
  }

  render() {
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
      <div className="col-10 col-md-8 col-lg-7">
        { errorMessage }
        <div className="input-group">
          <label>
            Address:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Insert the title of your post"
            value={this.state.title}
            className="form-control mr-3 rounded"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-group">
          <label>
            Description:
          </label>
          <input 
            type="text"
            name="content"
            placeholder="Add your words of wisdom here..." 
            value={this.state.content}
            className="form-control mr-3 rounded"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary" onClick={this.savePost}>Save Post</button>
        </div>
      </div>
    );
  }
}

export default RentPostFormPage;