import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private httpClient :HttpClient) { }
  fetchParticipantList() {
    return this.httpClient.get('http://127.0.0.1:8081/api/v1/participant/participantList');
  }
}
