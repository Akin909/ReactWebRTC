class Endpoint {
  constructor(endpointName) {
    this._name = endpointName;
    Endpoint.directory[endpointName] = endpointName;
  }
  /*A list of all the videoEndpoint subclass objects that are created*/
  directory: {};

  /**
 * This function will be overwritten in the video endpoint subclass
 */
  sendMessage(from, message) {}

  recieveMessage(target, operation, message) {}
}

