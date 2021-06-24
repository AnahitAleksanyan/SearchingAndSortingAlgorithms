import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchingIsClicked = false;
  sortingIsClicked = false;
  linearSearchIsClicked = false;
  binarySearchIsClicked = false;
  bubbleSortIsClicked = false;
  insertionSortIsClicked = false;
  quicksortIsClicked = false;
  searchingOnClick(): void {
    this.searchingIsClicked = true;
  }
  sortingOnClick(): void {
    this.sortingIsClicked = true;
  }
  linearSearchOnClick(): void {
    this.linearSearchIsClicked = true;
  }

  binarySearchOnClick(): void {
    this.binarySearchIsClicked = true;
  }

  bubbleSortOnClick(): void {
    this.bubbleSortIsClicked = true;
  }

  insertionSortOnClick(): void {
    this.insertionSortIsClicked = true;
  }

  quickSortOnClick(): void {
    this.quicksortIsClicked = true;
  }

  homeOnClick(): void {
    this.searchingIsClicked = false;
    this.sortingIsClicked = false;
    this.linearSearchIsClicked = false;
    this.binarySearchIsClicked = false;
    this.bubbleSortIsClicked = false;
    this.insertionSortIsClicked = false;
    this.quicksortIsClicked = false;
  }
}
