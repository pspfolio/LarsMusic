import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectPlayingArtists, selectPlayingTrack } from '../playSelectors';
import PlayButton from 'common/components/playButton/PlayButton';

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
                <PlayButton onClick={this.play} />
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
