class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class tree {
  constructor() {
    this.root = null;
  }

  mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } 

    const first_half = array.slice(0, array.length / 2);
    const second_half = array.slice(array.length / 2, array.length)
    const first_sort = mergeSort(first_half);
    const second_sort = mergeSort(second_half);
    let result = [];

    let f = 0;
    let s = 0;

    while (f < first_sort.length && s < second_sort.length) {
     if (first_sort[f] <= second_sort[s]) {
      result.push(first_sort[f]);
      f++;
     } else if (second_sort[s] < first_sort[f]) {
      result.push(second_sort[s]);
      s++;
     }
    }

    // 
    while (s < second_sort.length) {
      result.push(second_sort[s]);
      s++;
    }

    //
    while (f < first_sort.length) {
      result.push(first_sort[f]);
      f++;
    }
    return result;
  }

  buildTree(array) {
    const start = 0;
    const end =  array.length -1;
    const mid = Math.floor((start + end) / 2);

    if(start > end) return null;
    const newRoot = new Node(array[mid]);


  }

  prettyPrint() {

  }
}