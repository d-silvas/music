import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';
import { Song } from './song';

@Injectable({ providedIn: 'root' })
export class SongsService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _apiService: ApiService
  ) {}

  getSongs(): Observable<Song[]> {
    return this._http.get<Song[]>(this._apiService.createApiUrl('songs'));
  }
}
