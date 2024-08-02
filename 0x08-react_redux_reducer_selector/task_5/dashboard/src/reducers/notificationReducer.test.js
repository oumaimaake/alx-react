import { Map, fromJS } from 'immutable';
import notificationReducer, {
  initialNotificationState,
} from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import notificationsNormalizer from '../schema/notifications';

describe('courseReducer', function () {
  /*
  it('initial state', function () {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(Map(initialNotificationState));
  });
*/
  it('FETCH_NOTIFICATIONS_SUCCESS', function () {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,

