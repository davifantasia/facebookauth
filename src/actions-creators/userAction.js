export const userAction = (user) => dispatch => {
  dispatch({
    type: 'SET_USER',
    user
  });
};
