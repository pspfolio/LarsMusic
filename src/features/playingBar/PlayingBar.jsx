import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectPlayingArtists, selectPlayingTrack, selectPlayingAlbum, selectIsPlaying } from './playingBarSelectors';
import { setPlayStatus } from './playingBarActions';
import PlayingBarTrack from './PlayingBarTrack';
import PlayingBarControls from './PlayingBarControls';
import PlayingBarVolume from './PlayingBarVolume';

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
  padding: 0 160px;
  box-shadow: -1px -2px 14px rgba(50, 50, 93, 0.1);
`;

class Play extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();

    this.state = {
      volume: 0.5
    };
  }
  componentDidMount() {
    this.audio.current && this.audio.current.load();
  }

  play = () => {
    const { setPlayStatus } = this.props;
    setPlayStatus(true);
    this.audio.current.play();
  };

  pause = () => {
    const { setPlayStatus } = this.props;
    setPlayStatus(false);
    this.audio.current.pause();
  };

  handleVolumeChange = value => {
    this.setState({
      volume: value
    });

    this.audio.current.volume = value;
  };

  render() {
    const { volume } = this.state;
    const { playingArtist, playingTrack, playingAlbum, isPlaying } = this.props;

    return (
      <div>
        {playingArtist &&
          playingTrack && (
            <PlayContainer>
              <PlayingBarTrack playingTrack={playingTrack} playingAlbum={playingAlbum} />
              <PlayingBarControls playing={isPlaying} play={this.play} pause={this.pause} />
              <PlayingBarVolume volume={volume} handleVolumeChange={this.handleVolumeChange} />
              <audio autoPlay src={playingTrack.preview_url} ref={this.audio} />
            </PlayContainer>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playingArtist: selectPlayingArtists(state),
  playingTrack: selectPlayingTrack(state),
  playingAlbum: selectPlayingAlbum(state),
  isPlaying: selectIsPlaying(state)
});

const mapDispatchToProps = dispatch => ({
  setPlayStatus: isPlaying => dispatch(setPlayStatus(isPlaying))
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
