class HashTable {
  constructor() {
    //create an array with 100 slots (aka buckets) and fill with 'null'
    this.size = 100;
    this.buckets = Array(100).fill(null);
  }

  //will return a number we can use as index. this is a very simple hasing function
  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0); //charCodeAt will convert character to numbers. a = 0, b = 1...
    }
    return hash % this.size;
  }

  //add new key-value pair. will always set value to a specific key, and will override existing keys

  set(key, value) {
    let keyHash = this.hash(key);
    //check if the space is still available
    if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
      this.buckets[keyHash] = { key: key, value: value };
    } else {
      while (this.buckets[keyHash] !== null) {
        keyHash++;
      }
      // store into the new keyHash (incremented one)
      this.buckets[keyHash] = { key: key, value: value };
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    for (let i = keyHash; i < this.buckets.length; i++) {
      //we use continue because if the bucket is null, access key would fail
      if (!this.buckets[i]) continue;
      if (this.buckets[i].key === key) return this.buckets[i].value;
    }
    //we return undefined if we don't find anything
    return undefined;
  }

  showInfo() {
    //we use for in to get keys rather than values (since array is just an object under the hood)
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) console.log(key, this.buckets[key]);
    }
  }
}

const table = new HashTable();

for (const char of "academind") {
  console.log(char);
  table.set(char, char);
}

for (const char of "hello") {
  table.set(char, char);
}

for (const char of "does this work") {
  table.set(char, char);
}

console.log(table.showInfo())
