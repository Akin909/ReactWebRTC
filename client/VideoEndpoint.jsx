import React from 'react';
import { connect } from 'react-redux';

import { getUserVideoStream, addEndPoint } from './actions/index';
import Endpoint from './Endpoint.jsx';

console.log('import', getUserVideoStream);
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
  sendMessage(from, message) {
    this.props.getUserVideoStream();
    /*this.props.directory[from].recieveMessage(this._name, operation, message);*/
  }

  /**
   * method to handle message reciept
   *
   * @param {string} target The sender
   * @param {string} operation the event being triggered
   * @param {string} message the body of any message
   */
  recieveMessage(target, operation, message) {
    console.log('recieveMessage');
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <video />
        <button onClick={this.sendMessage}>Start Call</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    endpoints: state.endpoints,
  };
};

export default connect(mapStateToProps, { addEndPoint, getUserVideoStream })(
  VideoEndpoint
);
