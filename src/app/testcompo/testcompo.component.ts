import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-testcompo',
  templateUrl: './testcompo.component.html',
  styleUrls: ['./testcompo.component.scss']
})
export class TestcompoComponent implements OnInit {
  public initialized: string;

  constructor() { }

  ngOnInit() {
  }

  public Dodaj() {
  }
}
