import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import JobPostFormPage from './pages/JobPostFormPage';
import JobPostsListPage from './pages/JobPostsListPage';
import RentPostFormPage from './pages/RentPostFormPage';
import RentPostsListPage from './pages/RentPostsListPage';
import UserPostsListPage from './pages/UserPostsListPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';

import logo from './images/TClogo.png';

import './App.css';

function Navigation(props) {
  var userId = JSON.parse(window.sessionStorage.getItem('userId'));
  let myPostsLink = "/user/" + userId;
  return (
    <div>
      <div className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3" id="myTopnav">
      <ul className="navbar-nav mr-auto">
          <li className="active" className="homebtn">
            <Link className="navbar-brand" to="/">
              <img src={logo} width="30" height="30" className="d-inline-block align-bottom mr-2" alt="TechComm logo" />
              TechComm
            </Link>
          </li>
        </ul>
        <AuthButton />
      </div>
      <div className="line"></div>
      <nav className="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="nav-link" exact to={myPostsLink}>
            {/*<img href="./img/why.you.jpeg" height="50" width="50" alt="image"/>*/}
              <h3>My Posts</h3>      
          </Link>
        </div>          
        <ul className="components">
          <li>
            <NavLink className="nav-link" exact to="/posts/jobs">Job Listings</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/posts/rents">Rent Listings</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </nav>
    </div>    
    
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <PrivateRoute path="/posts/new" component={PostFormPage} />
                <PrivateRoute path="/posts/job" component={JobPostFormPage} />
                <Route path="/posts/jobs" component={JobPostsListPage} />
                <PrivateRoute path="/posts/rent" component={RentPostFormPage} />
                <Route path="/posts/rents" component={RentPostsListPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
                <Route path="/user/:user_id" component={UserPostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
