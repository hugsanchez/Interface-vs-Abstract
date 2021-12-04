"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    //abstract keyword used to define what methods we will eventually have
    //collection: number[]; same thing as the commented stuff out
    //constructor(public collection: Sortable){
    //this.collection = collection;
    //}
    //not gonna return any value thats why void was added
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // j < length - i -1 takes into account that the right most element will be in its place
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
                //TS trying to analyze this class in isolation even tho its a parent class
            }
        }
    }
}
exports.Sorter = Sorter;
