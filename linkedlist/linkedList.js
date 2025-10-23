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
    this.length = 0;
  }

  // OK
  append(data){
    const newNode = new node(data);
    
    if(this.head === null) {
      this.head = newNode;
    } 
    
    else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
    
    this.length++;
  }

  // OK
  prepend(data){
    const newNode = new node(data);

    if (this.head === null) {
      this.head = newNode;
    } 
    
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // OK
  size() {
    return `A lista contém ${this.length} elementos`
  }

  // OK
  first() {
   if (!this.head) {
    return "Lista vazia";  
  }
  
  return `O primeiro elemento é: ${this.head.data}`;
  }

  // OK
  tail() {
    let current = this.head;

    if (current.next === null) {
      return `O útlimo item é: ${current.data}`;
    } 
    
    else {
      while (current.next) {
        current = current.next;
      }
      return `O último item é: ${current.data}`;
    }
  }

  // OK
  at(index) {
    let current = this.head;
    let count = 0;

    if (count === index) {
      return `O item no índice ${index} é: ${current.data}`;
    } 
    
    else  {
      while (count !== index && current.next) {
      current = current.next;
      count++
      }
      return `O item no índice ${index} é: ${current.data}`;
    }
  }

  // OK
  pop() {
    
    let current = this.head
    let length = this.length;

    if(current === null) {
      return null;
    } 
    
    else if (current.next === null) {
      const value = current.data;
      this.head = null;
      this.length--;
      return value;
    } 
    
    else {
      while(current.next && current.next.next) {
        current = current.next
      }

      const value = current.next.data;
      current.next = null;
      this.length--;
      return value;
    }
    
  }

  // Arrumar
  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  // OK
  find(data) {
    let msg = "A lista não contém esse valor.";
    let current = this.head;
    let index = 0;

    if (current && current.data === data) {
      return `O valor está no índice ${index}`;
    } 
    
    else if (current && current.next) {
      while (current.next) {
        current = current.next;
        index++;
        if (current.data === data) return `O valor está no índice ${index}`;
      }
    } 
    
    else {
      return msg
    }
    return msg;
  }

  // OK
  toString() {
    let current = this.head;
    if (current === null) {
      return "Lista vazia";
    };

    let str = ``;
    while (current) {
      if (current.next) {
        str += `(${current.data}) -> `
      } else {
        str += `(${current.data}) -> null`
      }
      current = current.next;
    }
    return str;
  }

  insertAt(data, index) {

  }

  removeAt(index) {
    
  }
}



let lista = new linkedList();

lista.append(10);
lista.append(20);
lista.append(30);
lista.prepend(5);
lista.append(40);
lista.pop()

console.log(lista.at(2));
console.log(lista.first());
console.log(lista.tail());
console.log(lista.size());
console.log(lista.contains(20));
console.log(lista.find(40))
console.log(lista.toString());

