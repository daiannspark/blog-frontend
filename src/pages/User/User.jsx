import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getSelfInfo(this.props.user);
  }
  render() {
    const { userInfo } = this.props.user;

    return (
      <table>
        <tbody>
          <tr>
            <td>{userInfo.id}</td>
            <td>{userInfo.email}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default User;
