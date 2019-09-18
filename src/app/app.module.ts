import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DietsComponent } from './diets/diets.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { FullnaturaldietComponent } from './fullnaturaldiet/fullnaturaldiet.component';
import { SeminaturaldietComponent } from './seminaturaldiet/seminaturaldiet.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RequirementsdataService } from './requirementsdata.service';
import { BasiccalculatorComponent } from './basiccalculator/basiccalculator.component';
import { AdvancedcalculatorComponent } from './advancedcalculator/advancedcalculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WhattoexpectComponent } from './whattoexpect/whattoexpect.component';
import { TestcompoComponent } from './testcompo/testcompo.component';
import { DietBuilderComponent } from './diet-builder/diet-builder.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableDisplayComponent } from './shared/table-display/table-display.component';
import { DetailsDisplayComponent } from './shared/details-display/details-display.component';
import { ProductDisplayComponent } from './shared/details-display/product-display/product-display/product-display.component';
import { IndicatorsComponent } from './shared/indicators/indicators.component';
import { BasicProductIndicatorsComponent } from './shared/indicators/basic-product-indicators/basic-product-indicators.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

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
    BasicProductIndicatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AutocompleteLibModule
  ],
  providers: [RequirementsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
