import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { fetchTopTracksIfNeeded } from '../tracksActions';
import { selectTopTracksByArtistId } from '../tracksSelectors';

const TopTracksCard = styled.article`
  margin: 32px;
  max-width: 60%;
`;

const Title = styled.h5`
  font-size: 24px;
  letter-spacing: 0.25px;
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
`;

const TrackListAlbumName = styled.span`
  display: block;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;

class TopTracks extends Component {
  componentDidMount() {
    const { getTopTracks } = this.props;
    getTopTracks();
  }

  render() {
    const { topTracks } = this.props;
    return (
      <TopTracksCard>
        <Title>Top Tracks</Title>
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

                <a href={track.external_urls['spotify']} target="_blank">
                  Open in Spotify
                </a>
              </TrackListRow>
            ))}
          </TrackList>
        )}
      </TopTracksCard>
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
  getTopTracks: () => dispatch(fetchTopTracksIfNeeded(ownProps.match.params.id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopTracks));
