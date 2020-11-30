import React from 'react';
import { 
  BrowserRouter as Router, Switch, Route, Link,NavLink
} from 'react-router-dom';
import { browserHistory, IndexRoute } from 'react-router'
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import addnewpost  from './pages/addnewpost';
//import send from './pages/setting.js';
import './App.css';

function Navigation(props) {
  return (
      
            <div  >
                <div className="topnav" id="myTopnav">
                
             <ul>
             <li className="active" className="homebtn">
                            <NavLink className="nav-link" exact to="/posts/new">
                                Techcomm
                            </NavLink>
                        </li>
                        <li className="logout">
                            <NavLink className="nav-link" exact to="/about-us">
                               logout
                            </NavLink>
                        </li>
             </ul>
                
                </div>
                <div className="line"></div>
                    <nav className="sidebar">
                        <div className="sidebar-header">
                        <Link to="/" className="nav-link">
                        <img href="./img/why.you.jpeg" height="50" width="50" alt="image"/>
                        <h3>Profile</h3>
                       
                        </Link>
                        
                        </div>
                    
                    <ul className="components">
                        <li className="active">
                            <NavLink className="nav-link" exact to="/posts/new">
                                Create a Micro Post
                            </NavLink>
                        </li>
                        <li >
                            <NavLink className="nav-link" exact to="/about-us">
                                About Us
                            </NavLink>
                        </li>
                       <li>
                           <NavLink className="nav-link" exact to="/add/addnewpost" > Add New Post </NavLink>
                       </li>
                        <li >
                            <NavLink className="nav-link" exact to="/add/setting">
                                Account Setting
                            </NavLink>
                        </li>
                    </ul>
                      
                   </nav>
</div>    
    
  );
}


class App extends React.Component {
  render() {
    return (
        <Router >
          <Navigation />
          <div>
            <div className="content">
              <Switch className="content">
                
                {/* <Route path ="/add/setting" component={send} /> */}
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/add/addnewpost" component={addnewpost} />
                <Route path="/" component={PostsListPage} />
               
                
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;