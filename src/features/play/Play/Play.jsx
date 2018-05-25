import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectPlayingArtists, selectPlayingTrack } from '../playSelectors';

const PlayContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.95);
`;

const TrackName = styled.p`
  align-self: center;
  margin: 0 32px;
  height: 100%;
  font-weight: 500;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
`;

class Play extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }
  componentDidMount() {
    console.log(this.audio.current);
    this.audio.current && this.audio.current.load();
    //this.audio.load();
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    return nextProps.playingTrack.name !== this.props.playingTrack.name;
  }

  play = () => {
    this.audio.current.play();
  };

  pause = () => {
    this.audio.current.pause();
  };

  render() {
    const { playingArtist, playingTrack } = this.props;
    this.audio.current && this.audio.current.load();

    return (
      <div>
        {playingArtist && playingTrack ? (
          <PlayContainer>
            <TrackName>{playingTrack.name}</TrackName>
            <button type="button" onClick={this.play}>
              Play
            </button>
            <button type="button" onClick={this.pause}>
              Pause
            </button>
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
