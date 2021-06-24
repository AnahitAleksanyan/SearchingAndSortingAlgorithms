import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent {

  numbersString;
  array: number [] = [];
  currentIndex = -1;
  finished = false;
  saveIsClicked = false;
  i = 1;
  j = 1;
  numberNotFound = false;
  timeToSwap = false;
  newValuesIsVisible = false;
  swapIndex = -1;
  swapNumber = 0;
  indexNumber = 0;
  saveOnClick(): void {
    this.array = this.numbersString.split(',').map(function(item) {
      const number = parseInt(item, 10);
      if (isNaN(number)) {
        return 0;
      }
      return number;
    });
    this.saveIsClicked = true;
    this.newValuesIsVisible = true;
  }

  startOnClick(): void {
    if ( this.i < this.array.length ) {
      this.currentIndex = this.j;
      this.indexNumber++;
      if ( this.array[this.j] < this.array[this.j - 1] ) {
        this.timeToSwap = true;
        this.swapIndex = this.j;
      }
      if ( this.j > 0 && this.i !== 1) {
        this.j--;
      }
      if ( this.j === 0 || this.i === 1) {
        this.i++;
        this.j = this.i;
      }
    } else {
      this.finished = true;
      this.currentIndex = -1;
      this.i = 1;
      this.j = 1;
    }
  }

  swap(): void {
    const temp = this.array[this.swapIndex];
    this.array[this.swapIndex] = this.array[this.swapIndex - 1];
    this.array[this.swapIndex - 1] = temp;
    this.currentIndex = this.swapIndex;
    this.timeToSwap = false;
    this.swapNumber++;
  }

  newValuesIsClicked(): void {
    this.numbersString = '';
    this.newValuesIsVisible = false;
    this.saveIsClicked = false;
    this.array = [];
    this.currentIndex = -1;
    this.swapNumber = 0;
    this.indexNumber = 0;
    this.finished = false;
    this.saveIsClicked = false;
    this.i = 1;
    this.j = 1;
    this.numberNotFound = false;
    this.timeToSwap = false;
  }

}
