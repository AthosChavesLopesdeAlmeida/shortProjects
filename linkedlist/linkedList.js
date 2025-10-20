class node {
  constructor (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class linkedList {
  constructor () {
    this.head = null
  }

  append(data){
    const newNode = new node(data);
    
    if(this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.length++;
  }

  prepend(data){
    const newNode = new node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  size() {
    return this.length
  }

  head() {
    return this.head;
  }

  // Arrumar
  tail() {
    let current = this.head;

    if (current.next === null) return current
  }

  at(index) {
    let current = this.head;
    let count = 0;

    if (count === index) {
      return current
    } else  {
      while (count !== index && current.next) {
      current = current.next;
      count++
      }
      return current;
    }
  }

  pop() {
    
    let current = this.head

    if(current === null) {
      return null;
    } else if (current.next === null) {
      current = null
      return;
    } else {
      while(current.next && current.next.next) {
        current = current.next
        current.next = null
        
        return current.data;
      }
      
    }
  }

  contains(data) {
  }

  find(data) {
  }

  toString() {
  }
}