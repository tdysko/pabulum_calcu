import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequirementsData } from 'src/app/requirementsdata.service';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OptiFetchService {

  constructor(private http: HttpClient) { }

  public saveWorkout(totalDistance: Number, totalTime: Number, movingSpeed: Number, avgSpeed: Number): Observable<any> {
    let Workout = {
      TotalTime: totalTime,
      TotalDistance: totalDistance,
      AvgMovingSpeed: movingSpeed,
      AvgSpeed: avgSpeed
    };
    return this.http.post<any>(environment.sports_url, Workout);
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
