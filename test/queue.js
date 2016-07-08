'use strict';

const expect = require('chai').expect;
const Queue = require('../index.js');

describe('', () => {

    let myQueue = new Queue();

    it('Queue should be a function', () => {
        console.log(myQueue);
        console.log();

        expect(typeof Queue).to.equal('function');
    });

    describe('empty by default', () => {

        it('queue should be empty by default', () => {
            expect(myQueue.isEmpty()).to.be.true;
        });

        it('peek at empty queue should not return elements', () => {
            expect(myQueue.peek()).to.equal('queue is empty');
        });

        it('dequeue at empty queue should not return elements', () => {
            expect(myQueue.dequeue()).to.equal('queue is empty');
        });
 
    });

    describe('elems added', () => {

        it('queue should not be empty after elem add', () => {
            myQueue.enqueue('first');
            expect(myQueue.isEmpty()).to.be.false;
        });

        it('peek should return first elem', () => {
            expect(myQueue.peek()).to.equal('first');
        });

        it('peek should return first elem after one more elem add', () => {
            myQueue.enqueue('second');
            expect(myQueue.peek()).to.equal('first');
        });

    });

    describe('elems dequeue', () => {

        it('dequeue should return first elem', () => {
            expect(myQueue.dequeue()).to.equal('first');
        });

        it('after dequeue peek should return secondary added elem', () => {
            expect(myQueue.peek()).to.equal('second');
        });

        it('dequeue should return elem even if it alone', () => {
            expect(myQueue.dequeue()).to.equal('second');
        });

        it('after dequeue all elems queue should be empty', () => {
            expect(myQueue.isEmpty()).to.be.true;
        });

    });

});
