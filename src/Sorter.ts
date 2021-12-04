interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex:number): boolean;
  swap(leftIndex:number, rightIndex:number): void;
}

export abstract class Sorter {
  abstract compare(leftIndex:number, rightIndex:number): boolean;
  abstract swap(leftIndex:number, rightIndex:number): void;
  abstract length:number;

  //abstract keyword used to define what methods we will eventually have

  //collection: number[]; same thing as the commented stuff out

  //constructor(public collection: Sortable){
    //this.collection = collection;
  //}
  //not gonna return any value thats why void was added
  sort(): void{
    const {length} = this;

    for(let i = 0; i < length; i++){
      for(let j = 0; j < length - i - 1; j++){
        // j < length - i -1 takes into account that the right most element will be in its place
        if(this.compare(j, j +1)){
          this.swap(j, j + 1);
        } 
        //TS trying to analyze this class in isolation even tho its a parent class
      }
    }
  }
}