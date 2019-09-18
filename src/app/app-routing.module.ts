import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietsComponent } from './diets/diets.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { SeminaturaldietComponent } from './seminaturaldiet/seminaturaldiet.component';
import { FullnaturaldietComponent } from './fullnaturaldiet/fullnaturaldiet.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WhattoexpectComponent } from './whattoexpect/whattoexpect.component';
import { DietBuilderComponent } from './diet-builder/diet-builder.component';
import { ProductsComponent } from './products/products.component';
import { MeasuresComponent } from './measures/measures.component';

const routes: Routes = [
  { path: 'diets', component: DietsComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'fullnaturaldiet', component: FullnaturaldietComponent },
  { path: 'seminaturaldiet', component: SeminaturaldietComponent },
  { path: 'dietbuilder', component: DietBuilderComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'whattoexpect', component: WhattoexpectComponent },
  { path: 'measures', component: MeasuresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
