import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { fetchTopTracksIfNeeded } from '../tracksActions';
import { setPlayTrack } from 'features/playingBar/playingBarActions';
import { selectTopTracksByArtistId } from '../tracksSelectors';
import spotify_logo_black from 'assets/images/Spotify_Icon_RGB_Black.png';
import PlayButton from 'common/components/playButton/PlayButton';

const TopTracksCard = styled.article`
  margin: 16px 0 0 32px;
  max-width: 60%;
  background-color: white;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1);
`;

const Title = styled.h6`
  margin-left: 32px;
  margin: 0 0 16px 32px;
  font-size: 20px;
  letter-spacing: 0.25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.86);
`;

const TrackList = styled.ul`
  margin-left: 0;
  padding-left: 0;
`;

const TrackListRow = styled.li`
  margin-top: 16px;
  display: flex;
`;

const TrackListImage = styled.img`
  height: 64px;
`;

const TrackListNameWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TrackListName = styled.span`
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.86);
`;

const TrackListAlbumName = styled.span`
  display: block;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;

const SpotifyLink = styled.a`
  margin-left: 16px;
  display: flex;
  align-items: center;
`;

const SpotifyLogo = styled.img`
  width: 32px;
`;

class TopTracks extends Component {
  componentDidMount() {
    const { getTopTracks } = this.props;
    getTopTracks();
  }

  render() {
    const { topTracks, play } = this.props;
    return (
      <div>
        <Title>Top Tracks</Title>

        <TopTracksCard>
          {topTracks && (
            <TrackList>
              {topTracks.map(track => (
                <TrackListRow key={track.id}>
                  <TrackListImage
                    src={track.album.images.find(img => img.height < 100).url}
                    alt={`${track.name} album art`}
                  />
                  <TrackListNameWrapper>
                    <TrackListName>{track.name}</TrackListName>
                    <TrackListAlbumName>{track.album.name}</TrackListAlbumName>
                  </TrackListNameWrapper>
                  <PlayButton onClick={() => play(track.id)} size={32} />
                  <SpotifyLink href={track.external_urls['spotify']} target="_blank">
                    <SpotifyLogo src={spotify_logo_black} alt="spotify logo" />
                  </SpotifyLink>
                </TrackListRow>
              ))}
            </TrackList>
          )}
        </TopTracksCard>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const limit = 5;
  return {
    topTracks: selectTopTracksByArtistId(state, ownProps.match.params.id, limit)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTopTracks: () => dispatch(fetchTopTracksIfNeeded(ownProps.match.params.id)),
  play: trackId => dispatch(setPlayTrack(trackId, ownProps.match.params.id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopTracks));
