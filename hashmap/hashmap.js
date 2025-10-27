class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16; // Capacidade inicial de buckets
    this.storage = new Array(this.capacity); // Cria um array de buckets com o tamanho da capacidade
    this.size = 0; // número de itens armazenados
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

      // Se a chave não foi encontrada, só então insere um novo par [chave, valor] nesse bucket
      if (inserted === false) {
        this.storage[index].push([key, value]);
        this.size++;

        if (this.size / this.capacity > this.loadFactor) {
          this.resize(this.capacity * 2);  // <-- Isso é o parametro newCapacity
        }
      }
    }
 }

 resize(newCapacity) {
  const oldStorage = this.storage;
  this.capacity =  newCapacity; // <-- ¹
  this.storage  = new Array(this.capacity);

  for (let i = 0; i < oldStorage.length; i++) {
    const bucket = oldStorage[i];
    if (!bucket) continue;
    
    for (let z = 0; z < bucket.length; z++) {
      const [key, value] = bucket[z];
      const index = this.hash(key); // Usa a capacidade atualizada¹
      if(!this.storage[index]) this.storage[index] = []; // Se não existe um bucket naquele índice, cria um vazio
      this.storage[index].push([key, value]); // Reinsere o par [chave, valor] no novo storage com o novo índice (com novo hash e nova capacidade)
    } 
    return "resize completo";
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
        this.size--;
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
    bucket.length = 0 // Limpa cada bucket de acordo com a iteração do laço
  }
  
  return 'HashMap limpo com sucesso!';
 }


 keys() {
  const keysArray = [];
  
  for (let i = 0; i < this.storage.length; i++) {
    const bucket = this.storage[i];
    if (!bucket) continue;

    for (let z = 0; z < bucket.length; z++) {
      keysArray.push(bucket[z][0]) // Pega a chave (índice 0) de cada par [chave, valor] 
    }
  }
  return keysArray;
 }

 values() {
  const valuesArray = [];
  
  for (let i = 0; i < this.storage.length; i++) {
    const bucket = this.storage[i];
    if (!bucket) continue;

    for (let z = 0; z < bucket.length; z++) {
      valuesArray.push(bucket[z][1]) // Pega o valor (índice 1) de cada par [chave, valor] 
    }
  }
  return valuesArray;
 }

 entries() {
  const allArray = [];
  
  for (let i = 0; i < this.storage.length; i++) {
    const bucket = this.storage[i];
    if (!bucket) continue;

    for (let z = 0; z < bucket.length; z++) {
      allArray.push(bucket[z]) // Pega o valor (índice 1) de cada par [chave, valor] 
    }
  }
  return allArray;
 }
}

let hm = new HashMap();

hm.set("Paquistão", "Islamabad");
hm.set("Índia", "Nova Deli");
hm.set("Bangladesh", "Daca");
hm.set("Cazaquistão", "Nursultan");
hm.set("Uzbequistão", "Tashkent");
hm.set("Turquia", "Ancara");
hm.set("Georgia", "Tbilisi");
hm.set("Armênia", "Ierevan");
hm.set("Rússia", "Moscou");
hm.set("Bielorússia", "Minsk");
hm.set("Ucrânia", "Kiev");
hm.set("Moldávia", "Chisinau");
hm.set("Afeganistão", "Cabul");
hm.set("Irã", "Teerã");
hm.set("Iraque", "Bagdá");
hm.set("Síria", "Damasco");
hm.set("Líbano", "Beirute");

console.log(hm.entries());








