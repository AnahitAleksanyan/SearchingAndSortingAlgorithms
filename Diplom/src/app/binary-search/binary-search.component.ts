import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.css']
})
export class BinarySearchComponent {

  numbersString;
  array = [];
  number;
  currentIndex = -1;
  finished = false;
  finishedIndex = -1;
  saveIsClicked = false;
  left = 0;
  stepsCount = 0;
  right = this.array.length - 1;
  numberNotFound = false;
  newValuesIsVisible = false;
  saveOnClick(): void {
    this.array = this.numbersString.split(',').map(function(item) {
      const number = parseInt(item, 10);
      if (isNaN(number)) {
        return 0;
      }
      return number;
    });
    this.saveIsClicked = true;
    this.right = this.array.length - 1;
    this.newValuesIsVisible = true;
  }

  startOnClick(): void {
    console.log('right', this.right);
    console.log('left', this.right);
    console.log('array.length', this.array.length);
    const numberInt = parseInt(this.number, 10);
    if (this.left <= this.right ) {
      const mid = Math.floor((this.left + this.right) / 2);
      this.currentIndex = mid;
      this.stepsCount++;
      if (numberInt === this.array[mid]) {
        this.finishedIndex = mid;
        this.finished = true;
      }
      if ( numberInt < this.array[mid] ) {
        this.right = mid - 1;
      } else {
        this.left = mid + 1;
      }
      if (this.left > this.right && this.array[mid] !== numberInt) {
        this.numberNotFound = true;
        this.finished = true;
      }
    }
  }

  restartOnClick(): void {
    this.currentIndex = -1;
    this.finished = false;
    this.finishedIndex = -1;
    this.left = 0;
    this.right = this.array.length - 1;
    this.numberNotFound = false;
    this.stepsCount = 1;
  }

  newValuesIsClicked(): void {
    this.numbersString = null;
    this.array = [];
    this.number = null;
    this.currentIndex = -1;
    this.finished = false;
    this.finishedIndex = -1;
    this.saveIsClicked = false;
    this.left = 0;
    this.right = this.array.length - 1;
    this.numberNotFound = false;
    this.newValuesIsVisible = false;
    this.stepsCount = 0;
  }

}
