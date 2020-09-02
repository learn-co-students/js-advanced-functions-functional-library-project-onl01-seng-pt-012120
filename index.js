const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let index = 0; index < collection.length; index++) {
          const element = collection[index];
          callback(element);
        };
      } else {
        for (const key in collection) {
          const element = collection[key];
          callback(element)
        };
      };
      return collection
    },

    map: function(collection, callback) {
      let array = [];
      if (Array.isArray(collection)) {
        for (let index = 0; index < collection.length; index++) {
          const element = collection[index];
          array.push(callback(element));
        };
      } else {
        for (const key in collection) {
          const element = collection[key];
          array.push(callback(element))
        };
      };
      return array
    },

    reduce: function(collection,callback, acc) {
      
      if (acc === undefined) {
        acc = collection[0]
        for (let index = 1; index < collection.length; index++) {
          const element = collection[index];
          acc = callback(acc, element, collection)
        };
      } else {

        for (let index = 0; index < collection.length; index++) {
          const element = collection[index];
          acc = callback(acc, element, collection)
        };
      }
      
      return acc
    },

    find: function(collection, callback) {
      let elmt; 
      if (Array.isArray(collection)) {
         for (let index = 0; index < collection.length; index++) {
          const element = collection[index];
          if (callback(element)) {
            elmt = element;
            break
          }
        };
      } else {
        for (const key in collection) {
          const element = collection[key];
          if (callback(element)) {
            elmt = element;
            break
          }
        }
      };
      return elmt
    },

    filter: function(collection, callback) {
      let elmt = [] 
      if (Array.isArray(collection)) {
         for (let index = 0; index < collection.length; index++) {
          const element = collection[index];
          if (callback(element)) {
            elmt.push(element);
            
          }
        };
      } else {
        for (const key in collection) {
          const element = collection[key];
          if (callback(element)) {
            elmt.push(element);
            
          }
        }
      };
      return elmt
    },

    size: function(collection) {
      let c = 0
      if (Array.isArray(collection)) {
        while (collection[c]) {
          c++
        };
      } else {
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            c++
          }
        }
      }
      

      return c
    },

    first: function(collection, n) {
      let elmt;
      if (n) {
        elmt = collection.slice(0,n)
      } else {
        elmt = collection.slice(0,1)[0]
      };
      return elmt
    },

    last: function(collection,n) {
      let elmt;
      if (n) {
        elmt = collection.slice(-n)
      } else {
        elmt = collection.slice(-1)[0]
      };
      return elmt
    },

    compact: function(array) {
      let newArray = [];
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element) {
          newArray.push(element)
        }
        
      };
      return newArray
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      let k = [];
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          k.push(key);
          
        }
      };
      return k
    },

    values: function(object) {
      let val = [];
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          val.push(object[key]);
          
        }
      };
      return val
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
