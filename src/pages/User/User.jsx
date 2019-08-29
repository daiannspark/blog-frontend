import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getSelfInfo(this.props.user);
  }
  render() {
    if(this.props.user.userInfo) {
      const { username, firstName, lastName, email } = this.props.user.userInfo;
      return (
          <table>
            <tbody>
            <tr>
              <td>Username: {username}</td>
              <td>firstName: {firstName}</td>
              <td>lastName: {lastName}</td>
              <td>email: {email}</td>
            </tr>
            </tbody>
          </table>
      );
    } else {
      return null;
    }
  }
}
export default User;
