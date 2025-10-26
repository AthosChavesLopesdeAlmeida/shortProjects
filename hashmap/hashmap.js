class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.storage = new Array(this.capacity);
  }

  // Hashing define o índice para uma chave baseado no cálculo do código hash
  hash(key) {
   let hashCode = 0;
   const s = String(key)
      
   const primeNumber = 31;
   for (let i = 0; i < s.length; i++) {
     hashCode = (primeNumber * hashCode + s.charCodeAt(i)) % this.capacity;
   }

   return hashCode;
 } 

 // Adiciona ou atualiza o valor associado a uma chave
 set(key, value) {
    const index = this.hash(key);
    
    if (index < 0 || index >= this.storage.length) {
    throw new Error("Trying to access index out of bounds");
    }

    // Cria um novo bucket
    if (this.storage[index] === undefined) {
      this.storage[index] = [
        [key, value]
      ];
    } 
    
    // Se o bucket já existe, verifica se a chave está lá
    else {
      let inserted = false;

      // Atualiza o valor se a chave já existe
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
          break;
        }
      }

      // Se a chave não foi encontrada, adiciona um novo par [chave, valor]
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
 }

 get(key) {
    const index = this.hash(key);  
    const bucket = this.storage[index];

    if(!bucket) return null; // Bucket (índice) vazio
    
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) return bucket[i][1];
    }

    return null; // chave não encontrada
 }

 has(key) {
    const index = this.hash(key);
    const bucket = this.storage[index];

    if (!bucket) {
      return false; // bucket vazio
    } 
    
    else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return true;
        } 
        
        else {
          return false;
        }
      }
    }
 }

 remove(key) {
  const index = this.hash(key);
  const bucket = this.storage[index];

  if (!bucket) return false;
  
  else {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        if (bucket.length === 0) this.storage[index] = undefined; // Limpa slot vazio
        return true;
      } 
      
      else {
        return false;
      }
    }
  }
 }


 length() {
  let c = 0
  
  for (let i = 0; i < this.storage.length; i++) {
    const bucket = this.storage[i] // O bucket muda de acordo com a iteração do laço 'for'
    if (!bucket) continue; // Pula buckets vazios
    c += bucket.length; // Soma a 'c' o tamanho de cada buckety
  }
  return c;
 }

 clear() {
  
  for (let i = 0; i < this.storage.length; i++) {
    const bucket = this.storage[i] 
    if (!bucket) continue; 
    bucket[i] = undefined
    bucket.length = 0
  }
  
  return 'HashMap limpo com sucesso!';
 }

 // Arrumar (Retorna os pares completos [o que não é necessariamente ruim] e não as chaves apenas)
 keys() {
  const keysArray = [];
  
  for (let i = 0; i < this.storage.length; i++) {
    const bucket = this.storage[i];
    if (!bucket) continue;
    
    bucket.forEach(key => {
      keysArray.push(key)
    });
  }

  return keysArray;
 }
}

let hm = new HashMap();

// // Sets iniciais
// hm.set("Brasil", "Brasília");
// hm.set("Argentina", "Buenos Aires");
// hm.set("Colômbia", "Bogotá");

// // Retorna o valor 'Brasília'
// console.log(hm.get("Brasil"));

// // Retorna false
// console.log(hm.has("Peru"));

// // Retorna 3
// console.log(hm.length());

// // Limpa o HashMap
// console.log(hm.clear())

// // Retorna 0
// console.log(hm.length());

// Testes após limpar
hm.set("Paquistão", "Islamabad");
hm.set("Índia", "Nova Deli");
hm.set("Bangladesh", "Daca");
hm.set("Cazaquistão", "Nursultan");

console.log(hm.length())

// Retorna 'Islamabad'
console.log(hm.get("Paquistão"));

// Retorna true
console.log(hm.has("Índia"));
console.log(hm.keys())
