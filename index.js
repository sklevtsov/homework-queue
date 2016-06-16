'use strict';

function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.length = 0;
    this.head = null;
}

LinkedList.prototype.add = function(value) {
    let node = new Node(value);
    let currentNode = this.head;
 
    if (!currentNode) {
        this.head = node;
        this.length++;
         
        return node;
    }
 
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this.length++;
     
    return node;
};

module.exports = LinkedList;
