'use strict';

const Node = require('homework-node');

class Queue {

    constructor() {
        this.singleList = new Node();
    }

    enqueue(value) {
        (this.singleList).addNext(value);
    }

    isEmpty() {
        return ((this.singleList).head === null);
    }

    peek() {
        if ((this.singleList).head === null) {
            throw new Error('Queue is empty');
        } else {
            return (this.singleList).head.value;
        }
    }

    dequeue() {
        if ((this.singleList).head === null) {
            throw new Error('Queue is empty');
        } else {

            let elem = (this.singleList).head.value;
            (this.singleList).head = (this.singleList).head.next;

            return elem;

        }
    }

}

module.exports = Queue;
