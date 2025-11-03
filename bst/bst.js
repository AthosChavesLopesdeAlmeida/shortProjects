class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array = []) {
    this.root = this.buildTree(array);
  }

  mergeSort(array) {

    if (!Array.isArray(array)) return [];  
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2)
    const first_half = array.slice(0, mid);
    const second_half = array.slice(mid);
    
    const first_sort = this.mergeSort(first_half); // Usa recursivamente a função de mergeSort até estar com todos os elementos separados
    const second_sort = this.mergeSort(second_half); // Usa recursivamente a função de mergeSort até estar com todos os elementos separados
    const result = [];

    let f = 0, s = 0;

    while (f < first_sort.length && s < second_sort.length) {
      if(first_sort[f] <= second_sort[s]) result.push(first_sort[f++]);
      else result.push(second_sort[s++]);
    }

    while (s < second_sort.length) result.push(second_sort[s++]);


    while (f < first_sort.length) result.push(first_sort[f++]);
    
    return result;
  }

  buildTree(array) {
   if(!Array.isArray(array) || array.length === 0) return null; // Retorna null se não for um array ou se o length for 0

   const sorted = this.mergeSort(array); // mergeSort no array
   const arrayPronto = Array.from(new Set(sorted)); // Remove duplicatas

   if (arrayPronto.length === 0) return null;
   
   const mid = Math.floor(arrayPronto.length / 2);
   const start = 0;
   const root = new Node(arrayPronto[mid]);
   // Recursão 
   root.left = this.buildTree(arrayPronto.slice(start, mid));
   root.right = this.buildTree(arrayPronto.slice(mid + 1));
   
   return root;
  }

  insert(value) {
  const newNode = new Node(value);

  if (!this.root) {
    this.root = newNode;
    return true;
  }

  let current = this.root;
  while (true) {
    if (value === current.data) {
      // já existe; opcional: não inserir duplicatas
      return false;
    }
    if (value < current.data) {
      if (!current.left) {
        current.left = newNode;
        return true;
      }
      current = current.left;
    } else {
      // value > current.data
      if (!current.right) {
        current.right = newNode;
        return true;
      }
      current = current.right;
    }
  }
  }

  remove(value) {
    let parent =  null; // Nó superior
    let node = this.root; // Atual
    
/* Enquanto node for diferente do valor, ele e seu  
parent 'descem' para a esquerda ou para a direita, 
dependendo se o valor é maior ou menor que root
*/
    while (node && node.data !== value) {
      parent = node;
      if(value < node.data) node = node.left; 
      else node = node.right
    }
    
    if(!node) return false;

    // Nó é folha
    if (!node.right && !node.left) {
      if(!parent) {
        this.root = null
      } else if (parent.left === node) {
        parent.left = null
      } else {
        parent.right = null
      }
      return null;
    }

    // Nó tem uma child
    if(!node.right || !node.left) {
      const child = node.left ? node.left : node.right; // Se o node não é left ele é right
      if(!parent) {
        this.root = child;
      } else if(parent.left === node) {
        parent.left = child;
      } else {
        parent.right = child;
      }
      return true;
    }
    
    // Nó tem duas childs
    let succParent = node;
    let succ = node.right;
    while (succ.left) {
      succParent = succ;
      succ = succ.left;
    }
    
    // copiar valor do sucessor para o nó
    node.data = succ.data;
    // remover o nó sucessor (succ) que tem no máximo um filho (direito)
    const succChild = succ.right;
    if (succParent.left === succ) succParent.left = succChild;
    else succParent.right = succChild;
    return true;
  }

  find(value) {
    let node = this.root

    if(!this.root) return false;
    if(value === undefined || value === null) return false;

    while (node) {
      if (value === node.data) return true;
      node = (value < node.data) ? node.left : node.right; // Checa se o valor é menor que node e atribui left ou right de acordo com o resultado.
    }

    return false;
  }

  levelOrderForEach() {
    
    // Implementação correta: travessia em largura (level-order, BFS) usando uma fila
    // Retorna um array com os valores por nível. Opcionalmente, aceitar um callback
    // seria útil; por enquanto retornamos o array para facilitar testes.

    if (!this.root) return [];

    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  inOrderForEach() {
    if (!this.root) return [];

    let inOrderArray = [];

    function inor(node) {
      if (!node) return;

      inor(node.left);
      inOrderArray.push(node.data);
      inor(node.right);
    }

    inor(this.root)
    return inOrderArray;
  }

  preOrderForEach() {
    if (!this.root) return [];

    let preOrderArray = [];

    function pre(node) {
      if (!node) return;

      preOrderArray.push(node.data);
      pre(node.left);
      pre(node.right);
    }

    pre(this.root);
    return preOrderArray;
  }

  postOrderForEach() {
    if (!this.root) return [];

    let postOrderArray = [];

    function post(node) {
      if (!node) return;

      post(node.left);
      post(node.right);
      postOrderArray.push(node.data);
    }

    post(this.root);
    return postOrderArray;
  }

  height(value) {
    let current = this.root;

    // Encontrar o valor na árvore
    while(current.data !== value) {
      if(!this.root) return null;
      if (current.left === null || current.right === null) return null;
      if (value === current.data) continue;

      (value > current.left) ? (current = current.right) : (current = current.left);
    }

    // Encontrar algum nó folha
    let c = 0

    while (current.left !== null && current.right !== null) {
      if(!this.root) return null;
      if (current.left === null || current.right === null) return null;

      (value > current.left) ? (current = current.right) : (current = current.left);
      c++
    }
    return c;
  }

  depth(value) {
    let current  = this.root
    let c = 0

    while(current.data !== value) {
      if(!this.root) return null;
      if (current.left === null || current.right === null) return null;

      (value > current.left) ? (current = current.right) : (current = current.left);
      c++
    }

    return c
  }

  isBalanced() {
    
    function check(node) {
      if (!node) return 0;
      const leftHeight = check(node.left);
      if (leftHeight === -1) return -1; // já detectou desequilíbrio abaixo
      const rightHeight = check(node.right);
      if (rightHeight === -1) return -1;
      if (Math.abs(leftHeight - rightHeight) > 1) return -1; // Se a diferença entre as duas é maior que 1
      return Math.max(leftHeight, rightHeight) + 1;
    }

    return check(this.root) !== -1;
  }
}


let bst = new Tree([1, 2, 3, 4, 5, 6, 7,]);
bst.buildTree([1, 2, 3, 4, 5, 6, 7]);
console.log(bst.postOrderForEach());
console.log(bst.inOrderForEach());
console.log(bst.preOrderForEach());
console.log(bst.isBalanced());