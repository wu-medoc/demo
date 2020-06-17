import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Anlayer } from './anlayer';

@Injectable({
  providedIn: 'root'
})
export class AnlayerService {
  private anlayerUrl = 'api/anlayer';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  /** GET anlayer by id. Will 404 if id not found */
  getLayer(id: number): void {
    const url = `${this.anlayerUrl}/${id}`;
  }
  constructor(
    private http: HttpClient) { }
}
