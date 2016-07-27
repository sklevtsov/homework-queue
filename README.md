[![Build Status](https://travis-ci.org/k03mad/homework-queue.svg?branch=master)](https://travis-ci.org/k03mad/homework-queue)

### Simple implementation of Queue.

A queue is a first-in-first-out (FIFO) data structure - items are added to the end of the queue and removed from the front.

NPM link: https://www.npmjs.com/package/homework-queue

### How-to:

```js
const Queue = require('homework-queue');
const myQueue = new Queue();

// add element to queue
myQueue.enqueue(value)
// return true if queue is empty
myQueue.isEmpty()
// return first element of queue
myQueue.peek()
// return first element and delete it from queue
myQueue.dequeue()
```
