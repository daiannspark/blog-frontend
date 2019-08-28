import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getSelfInfo(this.props.user);
  }
  render() {
    const { token } = this.props.user;

    return (
      <table>
        <tbody>
          <tr>
            <td>Token: {token}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default User;
