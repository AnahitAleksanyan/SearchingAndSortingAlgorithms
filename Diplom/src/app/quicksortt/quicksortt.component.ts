import {Component, OnInit} from '@angular/core';

export interface ArrayStep {
  startIndex: number;
  endIndex: number;
}

@Component({
  selector: 'app-quicksortt',
  templateUrl: './quicksortt.component.html',
  styleUrls: ['./quicksortt.component.css']
})
export class QuicksorttComponent {
  numbersString;
  array: number [] = [];
  arrayOfSteps: ArrayStep [] = [];
  finished = false;
  saveIsClicked = false;
  i = -1;
  j = -1;
  k = -1;
  index = -1;
  numberNotFound = false;
  timeToSwap = false;
  currentIndex = -1;
  newValuesIsVisible = false;
  swapState = -1;

  saveOnClick(): void {
    this.array = this.numbersString.split(',').map(function (item) {
      const number = parseInt(item, 10);
      if (isNaN(number)) {
        return 0;
      }
      return number;
    });
    this.saveIsClicked = true;
    this.newValuesIsVisible = true;
    this.quicksort(0, this.array.length - 1);
    console.log(this.arrayOfSteps);
    console.log('array', this.array);
    this.array = this.numbersString.split(',').map(function (item) {
      const number = parseInt(item, 10);
      if (isNaN(number)) {
        return 0;
      }
      return number;
    });
  }

  newValuesIsClicked(): void {
    this.numbersString = '';
    this.array = [];
    this.arrayOfSteps = [];
    this.finished = false;
    this.saveIsClicked = false;
    this.i = -1;
    this.j = -1;
    this.k = -1;
    this.index = -1;
    this.numberNotFound = false;
    this.timeToSwap = false;
    this.currentIndex = -1;
    this.newValuesIsVisible = false;
    this.swapState = -1;
  }

  startOnClick(): void {
    if (this.i === -1 && this.j === -1) {
      this.i = 0;
      this.j = this.array.length - 1;
      this.k = Math.floor((this.array.length - 1) / 2);
    } else {
      this.qs();
    }

  }

  swap(): void {
    const tmp = this.array[this.i];
    this.array[this.i] = this.array[this.j];
    this.array[this.j] = tmp;
    this.timeToSwap = false;
  }

  qs(): void {
    if (this.swapState === 0) {
      this.i++;
      this.j--;
      this.swapState = -1;
    } else {
      if (this.i <= this.j) {
        if (this.array[this.i] < this.array[this.k]) {
          this.i++;
        } else if (this.array[this.j] > this.array[this.k]) {
          this.j--;
        } else {
          if (this.i <= this.j) {
            this.timeToSwap = true;
            this.swapState = 0;
          }
        }
      } else {
        this.index++;
        if (this.index < this.arrayOfSteps.length) {
          this.i = this.arrayOfSteps[this.index].startIndex;
          this.j = this.arrayOfSteps[this.index].endIndex;
          this.k = Math.floor((this.i + this.j) / 2);
          console.log('k', this.k);
        } else {
          this.finished = true;
          this.i = -1;
          this.j = -1;
          this.k = -1;
        }
      }
    }

  }

  quicksort(l, r): void {
    let i = l;
    let j = r;
    const k = this.array[Math.floor((l + r) / 2)];
    while (i <= j) {
      while (this.array[i] < k) {
        i++;
      }
      while (this.array[j] > k) {
        j--;
      }
      if (i <= j) {
        const tmp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = tmp;
        i++;
        j--;
      }
      console.log('array', this.array);
    }
    if (l < j) {
      this.arrayOfSteps.push({
        startIndex: l,
        endIndex: j
      });
      this.quicksort(l, j);
    }
    if (i < r) {
      this.arrayOfSteps.push({
        startIndex: i,
        endIndex: r
      });
      this.quicksort(i, r);
    }
  }
}
