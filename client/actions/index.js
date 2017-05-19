import { ADD_ENDPOINT } from './../constants';

export const addEndPoint = endpoint => {
  return {
    type: ADD_ENDPOINT,
    endpoint,
  };
};
