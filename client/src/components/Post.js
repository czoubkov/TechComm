import React from 'react';
import { Link,  } from 'react-router-dom';
import '../css/style.css';

function CommentArea(props)
{
  return(
    <textarea rows="4" cols="50"  name="comment" form="usrform" value>
        Enter text here...</textarea>
  );
}



function Post(props) {
  let {createdAt, posttype,posttitle,postdesc } = props;
  return (
    
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <form>
          {/* <Link to={"/posts/"+id}>{ content }</Link> */}
          Title:<b>{posttitle}</b>
          <br />
          Post Type:<b> {posttype}</b>
          <br />
          Post describition:<br /> {postdesc}
          <br />
          </form>
        </div>
        <div className="comment-post">
            
        </div>
        <div className="card-footer small text-muted text-right">
          <div className="button-like">
              <button onClick={CommentArea }>Like</button>
              <button>Comment</button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Post;