import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};
export const boundLogin = (email, password) => dispatch(login(email, password));

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};
export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

