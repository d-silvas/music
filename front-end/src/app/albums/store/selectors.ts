import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AlbumsState } from './state';

export const getAlbumsState = createFeatureSelector<AlbumsState>('albums');

export const getAlbums = createSelector(
  getAlbumsState,
  (state: AlbumsState) => state.albums.data?.content,
);

export const getTotalElements = createSelector(
  getAlbumsState,
  (state: AlbumsState) => state.albums.data?.totalElements || 0,
);
