import {
  CALL_REQUEST,
  DENIED,
  SDP_OFFER,
  SDP_ANSWER,
  ICE_CANDIDATE,
  END_CALL,
  ACCEPT_CALL,
  ADD_ENDPOINT,
} from './../constants';

export default function(state, action) {
  console.log('state', state);
  switch (action.type) {
    case ADD_ENDPOINT:
      return {
        ...state,
        endpoints: [...state.endpoints, action.endpoint],
      };
    case CALL_REQUEST:
      break;
    case DENIED:
      break;
    case ACCEPT_CALL:
      break;
    case SDP_OFFER:
      break;
    case SDP_ANSWER:
      break;
    case ICE_CANDIDATE:
      break;
    case END_CALL:
      break;
    default:
      return state;
  }
}
