import { call, put, takeLatest } from 'redux-saga/effects';

import { START_VIDEO, VIDEO_ERROR, RECIEVE_VIDEO } from './../constants';

const constraints = {
  video: true,
  //audio: true,
};
const getVideo = () => navigator.mediaDevices.getUserMedia(constraints);
const startVideo = videoFeed =>
  videoFeed.then(feed => feed.window.URL.createObjectURL(feed));

function* getWebcamFeed() {
  try {
    const videoFeed = yield call(getVideo);
    //const startVideo = yield call(startVideo, videoFeed);
    const video = window.URL.createObjectURL(videoFeed);
    yield put({
      type: RECIEVE_VIDEO,
      videoFeed: video,
      startVideo,
    });
  } catch (err) {
    yield put({ type: VIDEO_ERROR, message: err });
  }
}

function* rtcSaga() {
  yield takeLatest(START_VIDEO, getWebcamFeed);
}

export default rtcSaga;
