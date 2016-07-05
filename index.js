'use strict';

function Queue() {

    let queue = [];

    this.enqueue = (item => {
        queue.push(item);
    });

    this.isEmpty = (() => {
        return (queue.length === 0);
    });

}

module.exports = Queue;
