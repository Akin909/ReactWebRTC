import { call, put, takeLatest } from 'redux-saga';

import { START_VIDEO, VIDEO_ERROR } from './../constants';

const constraints = {
  video: true,
  audio: true,
};
const getVideo = () => navigator.mediaDevices.getUserMedia(constraints);

function* getWebcamFeed() {
  console.log('saga');
  try {
    const videoFeed = yield call(getVideo);
    //const startVideo = yield call(startVideo, videoFeed);
    yield put({
      type: RECIEVE_VIDEO,
      videoFeed,
      //startVideo,
    });
  } catch (err) {
    yield put({ type: VIDEO_ERROR });
  }
}

function* rtcSaga() {
  yield takeLatest(START_VIDEO, getWebcamFeed);
}

export default rtcSaga;
