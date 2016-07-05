'use strict';

const expect = require('chai').expect;
const Queue = require('../index.js');

describe('', () => {

    let myQueue = new Queue();

    it('Queue should be a function', () => {
        console.log(myQueue);
        expect(typeof Queue).to.equal('function');
    });

    it('new Queue() should be an object', () => {
        expect(typeof myQueue).to.equal('object');
    });

    it('queue should be empty by default', () => {
        expect(myQueue.isEmpty()).to.be.true;
    });

    it('queue should not be empty after elem add', () => {
        myQueue.enqueue('first');
        expect(myQueue.isEmpty()).to.be.false;
    });

});
