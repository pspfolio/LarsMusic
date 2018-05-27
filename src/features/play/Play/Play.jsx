import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectPlayingArtists, selectPlayingTrack } from '../playSelectors';
import PlayButton from 'common/components/playButton/PlayButton';
import PauseButton from 'common/components/pauseButton/PauseButton';

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

const TrackName = styled.p`
  font-weight: 500;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
  flex: 0 0 25%;
  margin-left: 16px;
`;

const ActionButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const VolumeWrapper = styled.div`
  flex: 0 0 25%;
`;

const AlbumArt = styled.img`
  height: 48px;
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
    this.setState({ playing: false });
    this.audio.current.pause();
  };

  render() {
    const { playing } = this.state;
    const { playingArtist, playingTrack } = this.props;
    const albumImages = playingTrack.album.images;
    const albumArt = albumImages[albumImages.length - 1].url;
    return (
      <div>
        {playingArtist &&
          playingTrack && (
            <PlayContainer>
              <AlbumArt src={albumArt} alt="album art" />
              <TrackName>{playingTrack.name}</TrackName>
              <ActionButtons>
                {!playing ? <PlayButton onClick={this.play} /> : <PauseButton onClick={this.pause} />}
              </ActionButtons>
              <VolumeWrapper>Volume</VolumeWrapper>
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
