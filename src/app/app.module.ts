import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSelectModule } from '@angular/material';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    MatSelectModule,
    MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSelectModule,
    BrowserAnimationsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }