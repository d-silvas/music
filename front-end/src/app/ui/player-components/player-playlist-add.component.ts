import { Component, input } from '@angular/core';

import { Store } from '@ngrx/store';

import * as playlistActions from '../../player/store/actions';
import type { PlaylistRootState } from '../../player/store/state';
import type { Song } from '../../songs/song';

@Component({
  selector: 'app-player-playlist-add',
  template: `
    <button
      class="btn rounded-full bg-blue-500 p-2 text-white hover:bg-blue-700"
      aria-label="Add to playlist"
      (click)="addToPlaylist()"
    >
      <app-icon-playlist-add class="size-4" />
    </button>
  `,
})
export class PlayerPlaylistAddComponent {
  songs = input.required<Song[]>();

  constructor(private readonly _store: Store<PlaylistRootState>) {}

  addToPlaylist() {
    this._store.dispatch(
      playlistActions.addToPlaylist({ songIds: this.songs().map((s) => s.id) }),
    );
  }
}
