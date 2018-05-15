import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTopTracksIfNeeded } from '../tracksActions';
import { selectTopTracksByArtistId } from '../tracksSelectors';

class TopTracks extends Component {
  componentDidMount() {
    const { getTopTracks } = this.props;
    getTopTracks();
  }

  render() {
    const { topTracks } = this.props;
    return (
      <article>
        {topTracks && (
          <ul>
            {topTracks.map(track => (
              <li key={track.id}>
                <img src={track.album.images.find(img => img.height < 100).url} alt={`${track.name} album art`} />
                <h4>{track.name}</h4>
                <h4>{track.album.name}</h4>
                <a href={track.external_urls['spotify']} target="_blank">
                  Open in Spotify
                </a>
              </li>
            ))}
          </ul>
        )}
      </article>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topTracks: selectTopTracksByArtistId(state, ownProps.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTopTracks: () => dispatch(fetchTopTracksIfNeeded(ownProps.match.params.id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopTracks));
