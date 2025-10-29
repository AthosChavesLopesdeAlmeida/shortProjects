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

  // BUSCA EM PROFUNDIDADE (DFS)
  levelOrderForEach(callback) {
    let node = this.root;
    let prev = null;
    const seen = [];

    if(!callback) throw new Error("No callback function was passed.");

    // Se há um valor na direita, vá a esse valor e adicione-o a seen
    // quando o valor há direita for null, retorne para o node anterior
    // Se há um valor na esquerda vá até ele e repita o processo a té que não haja mais valores !== null
  }
}


let bst = new Tree([1, 7, 3, 4, 10, 5]);
console.log(bst.buildTree([1, 7, 3, 4, 10, 5]));
bst.insert(2);
console.log(bst);
console.log(bst.find(2));
