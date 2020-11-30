import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';


class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true,
  }

  componentDidMount() {
    fetch("/api/addnewposts")
      .then(res => res.json())
      .then(alldata => {
        this.setState({
          loading: false,
          posts: alldata,
        
        });
        console.log("this is how its works");
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
       <div className="container-fluid text-center">
        {
   
       this.state.posts.map((alldata,keyone)=>(
              <div className="row justify-content-center" key ={keyone} >
                <Post 
                  posttitle ={alldata.title}
                  posttype={alldata.posttype}
                  postdesc ={alldata.postdesc}

                />
                 </div>
            ))}
      
      </div>
    );
  }
}

export default PostsListPage;