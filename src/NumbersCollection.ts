import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  //inheritance done with extends for superclass thus super required inside constructor
  constructor(public data: number[]){
    super();
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];

    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }

  get length(): number {
    //get used to access variables without calling them as methods
    //collection.length instead of collection.length()
    return this.data.length;
  }
}