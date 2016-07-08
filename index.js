'use strict';

function Queue() {

    let queue = [];

    this.enqueue = (value => {
        queue.push(value);
    });

    this.isEmpty = (() => {
        return (queue.length === 0);
    });

    this.peek = (() => {
        if (queue.length === 0) {
            return 'queue is empty';
        } else {
            return queue[0];
        }
    });

    this.dequeue = (() => {

        if (queue.length === 0) {
            return 'queue is empty';
        } else {

            let elem = queue[0];
            queue = queue.slice(1);

            return elem;

        }

    });

}

module.exports = Queue;
