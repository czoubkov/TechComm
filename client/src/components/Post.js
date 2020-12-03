import React from 'react';
import { Link } from 'react-router-dom';

function Post({ content, title, createdAt, postType, id, userId }) {
  let date = createdAt.substring(0,10);
  let userLink = "/users/" + userId;

  return (
    <div class="card col-lg-2 m-3 shadow-sm p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
      <div className="">
        <div className="card-title">
        { title }
        </div>
        <h6 class="card-subtitle mb-2 text-muted">{ date }</h6>
        <div className="card-text m-4">
          <Link to={"/posts/"+id}>{ content }</Link>
        </div>
        <a href={"/users/" + userId} class="btn btn-outline-primary btn-sm mt-2 mb-2">See Profile</a>
      </div>
    </div>
  );
}

export default Post;

