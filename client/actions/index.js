import * as constants from './../constants.js';

export const getUserVideoStream = () => {
  console.log('action dispatched');
  return {
    type: constants.START_VIDEO,
  };
};
export const addEndPoint = endpoint => {
  return {
    type: constants.ADD_ENDPOINT,
    endpoint,
  };
};
