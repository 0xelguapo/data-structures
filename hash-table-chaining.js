class HashTable {
  constructor() {
    //create an array with 100 slots (aka buckets) and fill with 'null'
    this.size = 1000;
    this.buckets = Array(1000).fill(null).map(() => []);
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
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash];
    //check if the value is stored already
    const storedElement = bucketArray.find((el) => {
      // we check to see if we already used the key
      return el.key === key
    });
    if(storedElement) {
      storedElement.val = value
    } else {
      //now if different keys lead to same hash, we can store multiple key value pairs
      bucketArray.push({ key: key, val: value })
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find(el => {
      return el.key === key
    })
    return storedElement
  }

  showInfo() {
    //we use for in to get keys rather than values (since array is just an object under the hood)
    for(const key in this.buckets) {
      if(this.buckets[key] !== null) console.log(key, this.buckets[key])
    }
  }
}
