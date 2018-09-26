'use strict';

class Stack {
    constructor() {
        this._storage = [];
    }
    pop() {
        this._storage.pop();
    }

    push(value) {
        this._storage.push(value);
    }
}

module.exports = class Queue {
    constructor(){
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    enqueue(value){
        this.stackA.push(value);
    }

    dequeue(){
        let poppedValue = this.stackB.pop();
        if (!poppedValue) {
            return poppedValue;
        }
        while (true) {
            poppedValue = this.stackA.pop();
            if (poppedValue) {
                this.stackB.push(poppedValue)
            } else {
                break;
            }
        }
        return this.stackB.pop();
    }
}
