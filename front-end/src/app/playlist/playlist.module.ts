import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { UiModule } from '../ui/ui.module';
import { AlbumComponent } from './album/album.component';
import { AlbumPeekComponent } from './album/controls/album-peek/album-peek.component';
import { PlaylistPlayAlbumComponent } from './album/controls/playlist-play/playlist-play-album.component';
import { PlaylistReplaceComponent } from './album/controls/playlist-replace/playlist-replace.component';
import { AlbumDialogComponent } from './album-dialog/album-dialog.component';
import { PlaylistComponent } from './playlist.component';
import { PlaylistPlayComponent } from './song/controls/playlist-play/playlist-play.component';
import { PlaylistRemoveComponent } from './song/controls/playlist-remove/playlist-remove.component';
import { SongComponent } from './song/song.component';
import { playlistReducer } from './store/reducers';

@NgModule({
  declarations: [
    PlaylistComponent,
    PlaylistRemoveComponent,
    PlaylistPlayComponent,
    SongComponent,
    AlbumComponent,
    PlaylistPlayAlbumComponent,
    PlaylistReplaceComponent,
    AlbumPeekComponent,
    AlbumDialogComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    StoreModule.forFeature('playlist', playlistReducer),
  ],
  exports: [
    PlaylistRemoveComponent,
    PlaylistComponent,
    SongComponent,
    PlaylistPlayComponent,
    PlaylistRemoveComponent,
    AlbumComponent,
    PlaylistPlayAlbumComponent,
    PlaylistReplaceComponent,
    AlbumPeekComponent,
  ],
})
export class PlaylistModule {}
