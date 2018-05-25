import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectPlayingArtists, selectPlayingTrack } from '../playSelectors';
import play_icon from 'assets/images/play_icon.svg';

const PlayContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.95);
  align-items: center;
  justify-content: space-evenly;
`;

const TrackName = styled.p`
  font-weight: 500;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
`;

const ActionButtons = styled.div``;

const PlayIcon = styled.img`
  height: 24px;
`;

const PlayButton = styled.div`
  width: 48px;
  height: 48px;
  border: 2px solid rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 500%;
  cursor: pointer;
  will-change: transform;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 7px 10px rgba(50, 50, 93, 0.1);
    transform: translateY(-2px);
  }
`;

class Play extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();

    this.state = {
      playing: true
    };
  }
  componentDidMount() {
    this.audio.current && this.audio.current.load();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { playing: true };
  }

  play = () => {
    this.setState({ playing: true });
    this.audio.current.play();
  };

  pause = () => {
    this.setState({ playing: false }, () => {
      console.log('state changte');
    });
    this.audio.current.pause();
  };

  render() {
    const { playing } = this.state;
    const { playingArtist, playingTrack } = this.props;
    console.log(playing);

    return (
      <div>
        {playingArtist && playingTrack ? (
          <PlayContainer>
            <TrackName>{playingTrack.name}</TrackName>
            <ActionButtons>
              {!playing ? (
                <PlayButton type="button" onClick={this.play}>
                  <PlayIcon src={play_icon} />
                </PlayButton>
              ) : (
                <button type="button" onClick={this.pause}>
                  Pause
                </button>
              )}
            </ActionButtons>
            <div>Volume</div>
            <audio autoPlay src={playingTrack.preview_url} ref={this.audio} />
          </PlayContainer>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playingArtist: selectPlayingArtists(state),
  playingTrack: selectPlayingTrack(state)
});

export default connect(mapStateToProps)(Play);
