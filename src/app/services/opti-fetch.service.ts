import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class OptiFetchService {

  constructor(private http: HttpClient) { }

  public saveWorkout(workout: Workout): Observable<any> {
    console.log('saving workout');
    console.log(workout);
    return this.http.post<any>(environment.sports_url, workout);
  }

  public readWorkout(id: Number): Observable<any> {
    let params = new HttpParams()
      .set("id", id.toString());

    return this.http.get<any>(environment.sports_url, { params });
  }

  public readWorkouts(): Observable<any> {
    return this.http.get<any>(environment.sports_url);
  }
}
