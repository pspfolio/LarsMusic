import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectPlayingArtists, selectPlayingTrack } from './playingBarSelectors';
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
      playing: true,
      volume: 0.5
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
    this.setState({ playing: false });
    this.audio.current.pause();
  };

  handleVolumeChange = value => {
    this.setState({
      volume: value
    });

    this.audio.current.volume = value;
  };

  render() {
    const { playing, volume } = this.state;
    const { playingArtist, playingTrack } = this.props;

    return (
      <div>
        {playingArtist &&
          playingTrack && (
            <PlayContainer>
              <PlayingBarTrack playingTrack={playingTrack} />
              <PlayingBarControls playing={playing} play={this.play} pause={this.pause} />
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
  playingTrack: selectPlayingTrack(state)
});

export default connect(mapStateToProps)(Play);
