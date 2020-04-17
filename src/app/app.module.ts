import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialTableDemoComponent } from './material-table/material-table.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule

     ],
  declarations: [ AppComponent,HelloComponent,MaterialTableDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
