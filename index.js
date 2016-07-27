'use strict';

const Node = require('homework-node');

const debug = require('debug');
const queueDebug = debug('queue');

class Queue {

    constructor() {
        this.singleList = new Node();
    }

    enqueue(value) {
        (this.singleList).addNext(value);
        queueDebug(`added elem: ${value}`);
    }

    isEmpty() {
        return ((this.singleList).head === null);
    }

    peek() {
        if ((this.singleList).head === null) {
            throw new Error('Queue is empty');
        } else {
            queueDebug(`first elem: ${(this.singleList).head.value}`);
            return (this.singleList).head.value;
        }
    }

    dequeue() {
        if ((this.singleList).head === null) {
            throw new Error('Queue is empty');
        } else {

            let elem = (this.singleList).head.value;
            (this.singleList).head = (this.singleList).head.next;

            queueDebug(`returned & deleted elem: ${elem}`);

            return elem;

        }
    }

}

module.exports = Queue;
