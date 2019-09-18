import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FieldTypesService {

  constructor() { }
}

export const enum FieldTypes {
  Weight = 1,
  Height = 2,
  Age = 3
}
