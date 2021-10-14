import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../Data/Data';

@Injectable({
  providedIn: 'root'
})
export class DatafetcherService {
  data: Data[] = [];

  constructor(
    private http: HttpClient
  ) {}
getData() {
  return this.http.get<{
    timestamp: Date,  
    temperature: number,
    humidity: number,
    light: number,
  }[]>('/assets/data.json');
}
}