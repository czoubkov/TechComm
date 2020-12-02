import React from 'react';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class UserProfile extends React.Component {
  state = {
    loading: true,
    user: null,
    notFound: false,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/user"+id)
      .then(res => res.json())
      .then(user => {
        this.setState({
          
        })
      });
  }
}