import UserTypes from './user.type';

export const setCurrentUser = state => {
  return {
    type: UserTypes.SET_CURRENT_USER,
    payload: state
  }
}