import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Flight } from '../../entities/flight';

@Injectable({ providedIn: 'root' })
export class FlightService {
  constructor(private http: HttpClient) {}

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'https://demo.angulararchitects.io/api/Flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('from', from).set('to', to);

    return this.http.get<Flight[]>(url, { headers, params });
  }

  save(flight: Flight): Observable<Flight> {
    const url = 'https://demo.angulararchitects.io/api/Flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post<Flight>(url, flight, { headers });
  }
}
