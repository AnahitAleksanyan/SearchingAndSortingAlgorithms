import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent {

  numbersString;
  array: number [] = [];
  currentIndex = -1;
  finished = false;
  saveIsClicked = false;
  i = 0;
  j = 0;
  numberNotFound = false;
  timeToSwap = false;
  newValuesIsVisible = false;
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
      if ( this.j < this.array.length - 1 - this.i ) {
        this.currentIndex = this.j;
        this.indexNumber ++;
        if ( this.array[this.j] > this.array[this.j + 1] ) {
          this.timeToSwap = true;
        } else {
          this.j++;
          console.log(this.j);
        }
      } else {
        this.i++;
        this.j = 0;
        this.currentIndex = this.j;
        this.indexNumber ++;
        if ( this.array[this.j] > this.array[this.j + 1] ) {
          this.timeToSwap = true;
        } else {
          this.j++;
        }
      }
      if ( this.i === this.array.length - 1) {
        this.finished = true;
        this.currentIndex = -1;
        this.indexNumber--;
      }
    }

  swap(): void {
      const temp = this.array[this.j];
      this.array[this.j] = this.array[this.j + 1];
      this.array[this.j + 1] = temp;
      this.j++;
      this.timeToSwap = false;
      this.swapNumber++;
  }

  newValuesIsClicked(): void {
    this.newValuesIsVisible = false;
    this.numbersString = '';
    this.saveIsClicked = false;
    this.array = [];
    this.currentIndex = -1;
    this.finished = false;
    this.saveIsClicked = false;
    this.i = 0;
    this.j = 0;
    this.swapNumber = 0;
    this.indexNumber = 0;
    this.numberNotFound = false;
    this.timeToSwap = false;
  }
}
