import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LinearSearchComponent } from './linear-search/linear-search.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { QuicksorttComponent } from './quicksortt/quicksortt.component';

@NgModule({
  declarations: [
    AppComponent,
    LinearSearchComponent,
    BinarySearchComponent,
    BubbleSortComponent,
    InsertionSortComponent,
    QuicksorttComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
