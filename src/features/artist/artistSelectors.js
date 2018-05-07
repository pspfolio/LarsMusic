import { createSelector } from 'reselect';

export const getArtists = state => state.artist.entities;

export const selectArtists = createSelector(getArtists, artist => artist);
