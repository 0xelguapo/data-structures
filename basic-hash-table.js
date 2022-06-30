class HashTable {
  constructor() {
    //create an array with 100 slots (aka buckets) and fill with 'null'
    this.size = 1000;
    this.buckets = Array(1000).fill(null);
  }

  //will return a number we can use as index. this is a very simple hasing function
  hash(key) {
    const hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0); //charCodeAt will convert character to numbers. a = 0, b = 1...
    }
    return hash % this.size;
  }

  //add new key-value pair. will always set value to a specific key, and will override existing keys
  set(key, value) {
    const keyhash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

  showInfo() {
    //we use for in to get keys rather than values (since array is just an object under the hood)
    for(const key in this.buckets) {
      if(this.buckets[key] !== null) console.log(key, this.buckets[key])
    }
  }
}

