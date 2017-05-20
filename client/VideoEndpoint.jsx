import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getUserVideoStream, addEndPoint } from './actions/index.js';
import Endpoint from './Endpoint.jsx';

const LocalCam = styled.video`
  width: 10rem;
  height: 10rem;
  border: 0;
  box-shadow: 0 1px 1px grey;
`;

class VideoEndpoint extends Endpoint {
  constructor(endpointName) {
    super(endpointName);
    this.props.addEndPoint(this);
  }

  /**
   * Send message call recieve on the target videoendpoint
   *
   * @param {string} from the sender
   * @param {string} message the message
   */
  sendMessage = (from, message) => {
    this.props.getUserVideoStream();
    /*this.props.directory[from].recieveMessage(this._name, operation, message);*/
  };

  /**
   * method to handle message reciept
   *
   * @param {string} target The sender
   * @param {string} operation the event being triggered
   * @param {string} message the body of any message
   */
  recieveMessage = (target, operation, message) => {
    console.log('recieveMessage');
  };

  render() {
    console.log(this.props.video);
    return (
      <div>
        {this.props.videoFeed &&
          <LocalCam src={this.props.videoFeed} autoPlay="true" />}
        <button onClick={this.sendMessage}>Start Call</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    endpoints: state.endpoints,
    videoFeed: state.videoFeed,
  };
};

export default connect(mapStateToProps, { addEndPoint, getUserVideoStream })(
  VideoEndpoint
);
