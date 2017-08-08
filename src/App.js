import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from './actions/posts';
import * as usersActions from './actions/users';



export class App extends Component {
  componentDidMount() {
    this.props.postsActions.fetchPost();
    this.props.usersActions.fetchUsers();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        postsActions: bindActionCreators(postActions, dispatch),
        usersActions: bindActionCreators(usersActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(App);
