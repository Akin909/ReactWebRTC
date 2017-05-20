import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getUserVideoStream, addEndPoint } from './actions/index.js';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Endpoint from './Endpoint.jsx';

const LocalCam = styled.video`
  width: auto;
  height: 10rem;
  border: 0;
  box-shadow: 0 1px 1px grey;
`;

const LocalCamContainer = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  z-index: 10;
  left: 10%;
  position: absolute;
`;
const RemoteCamContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  flex-direction: column;
  postition: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5),
  0 1.5px 1.5px rgba(0, 0, 0, 0.5);
`;

const RemoteVideo = styled.video`
  width: 100%;
  height: 100%;
  border: 0.2px solid black;
  z-index: 0;
`;

const StartButton = styled.button`
  width: 5rem;
  border: 0;
  padding: 0.4rem;
  box-shadow: 0 1px 1px grey;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class VideoEndpoint extends Endpoint {
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
    function FirstChild(props) {
      const childrenArray = React.Children.toArray(props.children);
      return childrenArray[0] || null;
    }
    console.log(this.props.video);
    return (
      <Container>
        <RemoteCamContainer>
          <LocalCamContainer>
            <CSSTransitionGroup
              component={FirstChild}
              transitionName="cam"
              transitionEnterTimeout={500}
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionLeaveTimeout={300}
            >
              {this.props.videoFeed &&
                <LocalCam src={this.props.videoFeed} autoPlay="true" />}
            </CSSTransitionGroup>
          </LocalCamContainer>
          <RemoteVideo />
          <StartButton onClick={this.sendMessage}>Start Call</StartButton>
        </RemoteCamContainer>
      </Container>
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
