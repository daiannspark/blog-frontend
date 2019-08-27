const logout = () => dispatch => {
  localStorage.removeItem("user");

  dispatch({
    type: "LOGOUT"
  });
};

export { logout };