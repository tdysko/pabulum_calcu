import { Injectable } from '@angular/core';
import { RequirementsData } from 'src/app/requirementsdata.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OptiFetchService {

  configUrl = 'http://localhost:49219';

  constructor(private http: HttpClient) { }

  public saveWorkout(totalDistance: Number, totalTime: Number, movingSpeed: Number, avgSpeed: Number): Observable<any> {
    let params = new HttpParams()
      .set('totalDistance', totalDistance.toString())
      .set('totalTime', totalTime.toString())
      .set('movingSpeed', movingSpeed.toString())
      .set('avgSpeed', avgSpeed.toString());

    return this.http.get<RequirementsData>(environment.sports_url + '/save', { params });
  }

  public readWorkout(id: Number): Observable<any> {
    let params = new HttpParams();

    return this.http.get<RequirementsData>(environment.sports_url + '/read', { params });
  }

  public readWorkouts(): Observable<any> {
    let params = new HttpParams();

    return this.http.get<RequirementsData>(environment.sports_url + '/readAll', { params });
  }
}
