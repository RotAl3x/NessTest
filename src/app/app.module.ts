import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesTableComponent } from './components/classes-table/classes-table.component';
import { OccupancyComponent } from './components/occupancy/occupancy.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './components/search/search.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    ClassesTableComponent,
    OccupancyComponent,
    DialogComponent,
    SearchComponent,
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MatSelectModule
  ],
