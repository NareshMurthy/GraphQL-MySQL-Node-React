import React, { Component } from "react";
import { Query } from "react-apollo";
import query from "./../query";
class User extends Component {
  state = {};
  render() {
    return (
      <div>
        <Query query={query}>
          {({ data }) => {
            return null;
          }}
        </Query>
      </div>
    );
  }
}

export default User;
