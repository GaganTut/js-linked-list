/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var linkHead = null;
  var linkTail = null;

  function getHead() {
    return linkHead;
  }

  function getTail() {
    return linkTail;
  }

  function add(Value) {
    var newNode = {
      value : Value,
      next : null
    };
    if (getHead() === null) {
      linkHead = newNode;
      linkTail = newNode;

    } else if (linkHead.next === null) {
      linkTail = newNode;
      linkHead.next = linkTail;
    } else {
      linkTail.next = newNode;
      linkTail = newNode;
    }

    return newNode;
  }


  function get(num) {
    var getNode = linkHead;
    for (var i = 0; i < num; i ++) {
      if (getNode.next === null) {
        return false;
      } else {
        getNode = getNode.next;
      }
    }
    return getNode;
  }

  function remove(num) {
    var removeNode = get(num);
    var previousNode = get(num - 1);

    if (removeNode === false) {
      return false;
    } else if (removedNode === linkhead) {
      linkHead = linkHead.next;
    } else if (removeNode === linkTail) {
      linkTail = previousNode;
      linkTail.next = null;
    } else {
      previousNode.next = removeNode.next;
    }

  }

  function insert(Value, Number) {

  }


  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };

}