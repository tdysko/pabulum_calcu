import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from '../../node_modules/ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DietsComponent } from './diets/diets.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { FullnaturaldietComponent } from './fullnaturaldiet/fullnaturaldiet.component';
import { SeminaturaldietComponent } from './seminaturaldiet/seminaturaldiet.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RequirementsdataService } from './services/requirementsdata.service';
import { BasiccalculatorComponent } from './basiccalculator/basiccalculator.component';
import { AdvancedcalculatorComponent } from './advancedcalculator/advancedcalculator.component';
import { WhattoexpectComponent } from './whattoexpect/whattoexpect.component';
import { TestcompoComponent } from './testcompo/testcompo.component';
import { DietBuilderComponent } from './diet-builder/diet-builder.component';
import { ProductsComponent } from './products/products.component';
import { TableDisplayComponent } from './shared/table-display/table-display.component';
import { DetailsDisplayComponent } from './shared/details-display/details-display.component';
import { ProductDisplayComponent } from './shared/details-display/product-display/product-display/product-display.component';
import { IndicatorsComponent } from './shared/indicators/indicators.component';
import { BasicProductIndicatorsComponent } from './shared/indicators/basic-product-indicators/basic-product-indicators.component';
import { MeasuresComponent } from './measures/measures.component';
import { TrainingsComponent } from './sports/trainings/trainings.component';
import { TrainingComponent } from './sports/trainings/training/training.component';
import { ShoppingsComponent } from './shoppings/shoppings.component';
import { TrainingMapComponent } from './sports/trainings/training/training-map/training-map.component';
import { CommonTableComponent } from './shared/common-table/common-table.component';
import { WorkoutsComponent } from './sports/workouts/workouts.component';
import { BasicGridComponent } from './shared/basic-grid/basic-grid.component';
import { OcrService } from './services/ocr.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DietsComponent,
    RequirementsComponent,
    FullnaturaldietComponent,
    SeminaturaldietComponent,
    HomeComponent,
    ContactComponent,
    BasiccalculatorComponent,
    AdvancedcalculatorComponent,
    WhattoexpectComponent,
    TestcompoComponent,
    DietBuilderComponent,
    ProductsComponent,
    TableDisplayComponent,
    DetailsDisplayComponent,
    ProductDisplayComponent,
    IndicatorsComponent,
    BasicProductIndicatorsComponent,
    MeasuresComponent,
    TrainingsComponent,
    ShoppingsComponent,
    TrainingComponent,
    TrainingMapComponent,
    CommonTableComponent,
    WorkoutsComponent,
    BasicGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AutocompleteLibModule
  ],
  providers: [RequirementsdataService, OcrService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
