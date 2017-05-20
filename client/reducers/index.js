import * as c from './../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case c.ADD_ENDPOINT:
      return {
        ...state,
        endpoints: [...state.endpoints, action.endpoint],
      };
    case c.START_VIDEO:
      break;
    case c.RECIEVE_VIDEO:
      return {
        ...state,
        videoFeed: action.videoFeed,
        startVideo: action.startVideo,
      };
    case c.CALL_REQUEST:
      break;
    case c.DENIED:
      break;
    case c.ACCEPT_CALL:
      break;
    case c.SDP_OFFER:
      break;
    case c.SDP_ANSWER:
      break;
    case c.ICE_CANDIDATE:
      break;
    case c.END_CALL:
      break;
    default:
      return state;
  }
}
