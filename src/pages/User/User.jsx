import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getSelfInfo(this.props.user);
  }
  render() {
    if(this.props.user.userInfo) {
      const { username, firstName, lastName, email } = this.props.user.userInfo;
      return (
          <div className='profile col-6 ml-auto mr-auto'>
          <table>
            <tbody>
            <tr>
                <td>Username: {username}</td>
            </tr>
            <tr>
                <td>firstName: {firstName}</td>
            </tr>
            <tr>
                <td>lastName: {lastName}</td>
            </tr>
            <tr>
                <td>email: {email}</td>
            </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default User;
