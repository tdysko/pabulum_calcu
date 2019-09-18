import { Injectable } from '@angular/core';
import { RequirementsData, RequirementsdataService } from 'src/app/requirementsdata.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptiFetchService {

  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  public fetchRequirements(): Observable<RequirementsData> {
    return this.http.get<RequirementsData>(this.configUrl, { params: {} });
  }
}
