import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linear-search',
  templateUrl: './linear-search.component.html',
  styleUrls: ['./linear-search.component.css']
})
export class LinearSearchComponent {

  numbersString;
  array = [];
  number;
  currentIndex = -1;
  finished = false;
  finishedIndex = -1;
  saveIsClicked = false;
  i = 0;
  numberNotFound = false;
  newValuesIsVisible = false;
  stepsCount = 1;
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
    if (this.i !== this.array.length ) {
      this.currentIndex = this.i;
      const numberInt = parseInt(this.number, 10);
      if (this.array[this.i] !== numberInt) {
        this.i++;
        this.stepsCount++;
      } else {
        this.stepsCount++;
        this.finished = true;
        this.finishedIndex = this.i;
      }
      console.log(this.finishedIndex);
    } else {
      this.numberNotFound = true;
      this.finished = true;
    }
  }

  restartOnClick(): void {
    this.currentIndex = -1;
    this.finished = false;
    this.i = 0;
    this.finishedIndex = -1;
    this.numberNotFound = false;
    this.stepsCount = 0;
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
    this.numberNotFound = false;
    this.number = null;
    this.stepsCount = 0;
  }

}
