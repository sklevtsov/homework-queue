'use strict';

function Queue() {

    const Node = require('homework-node');
    const singleList = new Node();

    // let queue = [];

    this.enqueue = (value) => {
        // queue.push(value);
        singleList.addNext(value);
    };

    this.isEmpty = () => {
        // return (queue.length === 0);
        return (singleList.head === null);
    };

    this.peek = () => {
        // if (queue.length === 0) {
        //     throw new Error('Queue is empty');
        // } else {
        //     return queue[0];
        // }
        if (singleList.head === null) {
            throw new Error('Queue is empty');
        } else {
            return singleList.head.value;
        }
    };

    this.dequeue = () => {
        // if (singleList.head === null) {
        //     throw new Error('Queue is empty');
        // } else {

        //     let elem = queue[0];
        //     queue = queue.slice(1);

        //     return elem;

        // }
        if (singleList.head === null) {
            throw new Error('Queue is empty');
        } else {

            let elem = singleList.head.value;
            singleList.head = singleList.head.next;

            return elem;

        }

    };

}

module.exports = Queue;
