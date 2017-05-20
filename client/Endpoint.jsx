import React, { Component } from 'react';

class Endpoint extends Component {
  constructor(endpointName) {
    super(endpointName);
    this._name = endpointName;
  }

  /**
   * This function will be overwritten in the video endpoint subclass
   */
  sendMessage(from, message) {}

  /**
   * Send a message to a named endpoint
   *
   * @param {String} target The recipient
   * @param {String} operation the action to be created
   * @param {Object} message The message body
   */
  recieveMessage(target, operation, message) {}
}
export default Endpoint;
