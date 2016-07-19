'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;

const Queue = require('../index.js');

describe('Queue tests', () => {

    it('Queue should be a function', () => {
        expect(Queue).to.be.a('function');
    });

    it('new Queue() should be an object', () => {
        const myQueue = new Queue();

        expect(myQueue).to.be.an('object');
    });

    describe('empty by default', () => {
        const myQueue = new Queue();

        it('queue should be empty by default', () => {
            expect(myQueue.isEmpty()).to.be.true;
        });

        it('peek at empty queue should not return elements', () => {
            assert.throws(() => {
                myQueue.peek();
            }, 'Queue is empty');
        });

        it('dequeue at empty queue should not return elements', () => {
            assert.throws(() => {
                myQueue.dequeue();
            }, 'Queue is empty');
        });
 
    });

    describe('elems added', () => {

        const myQueue = new Queue();

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

        const myQueue = new Queue();

        it('dequeue should return first elem', () => {
            myQueue.enqueue(1);
            myQueue.enqueue(2);

            expect(myQueue.dequeue()).to.equal(1);
        });

        it('after dequeue peek should return secondary added elem', () => {
            expect(myQueue.peek()).to.equal(2);
        });

        it('dequeue should return elem even if it alone', () => {
            expect(myQueue.dequeue()).to.equal(2);
        });

        it('after dequeue all elems queue should be empty', () => {
            expect(myQueue.isEmpty()).to.be.true;
        });

    });

});
