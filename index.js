const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      if (Array.isArray(collection)) {
        collection.forEach(e => fn(e))
      } else {
        let arr = Object.values(collection);
        arr.forEach(e => fn(e))
      }
      return collection
    },

    map: function(collection, fn) {
      let newCollection = [];
      if (Array.isArray(collection)) {
        collection.forEach(e => newCollection.push(fn(e)))
      } else {
        let arr = Object.values(collection);
        arr.forEach(e => newCollection.push(fn(e)))
      }
      return newCollection
    },

    reduce: function(arr, fn, init) {
      let result = (!!init) ? init : arr[0]
      let i = (!!init) ? 0 : 1
      
      for (; i < arr.length; i++) {
        result = fn(result, arr[i], arr)
      }

      return result;
    },

    find: function(arr, fn) {
      let result;
      for (let i=0; i < arr.length; i++) {
        if (fn(arr[i])) {
          result = arr[i]
          return result
        }
      };
      return result
    },

    filter: function(arr, fn) {
      let result = [];
      for (let i=0; i < arr.length; i++) {
        if (fn(arr[i])) {
          result.push(arr[i])
        }
      };
      return result
    },

    size: function(collection) {
      let arr = Object.values(collection);
      return arr.length
    },

    first: function(arr, n) {
      if (n) {
        return arr.slice(0, n)
      } else {
        return arr[0]
      }
    },

    last: function(arr, n) {
      if (n) {
        return arr.slice(-n)
      } else {
        return arr[arr.length - 1]
      }
    },

    compact: function(arr) {
      let truthyArr = [];
      for (let i=0; i < arr.length; i++) {
        if (!!arr[i]) {
          truthyArr.push(arr[i])
        }
      };
      return truthyArr
    },

    sortBy: function(arr, fn) {
      let sorted = {}; // Set empty object to hold sorts
      
      for (let i=0; i < arr.length; i++) { // Run each element of array through function, save to sorts object with index and value
        sorted[i] = fn(arr[i])
      };
      let sortValues = Object.values(sorted); // Make an array of the values after running through function
      sortValues.sort(); // Sort the VALUES of sorts obj
      
      let results = []; // Make empty arr for results
      
      for (let i=0; i < sortValues.length; i++) { // For each SORT value
        let x = Object.keys(sorted).find(k => sorted[k] === sortValues[i]) // find the original index 'x' from the key in sorted object
        results.push(arr[x]) // push 'x' index from original array into the results arr
      };
    },

    flatten: function() {

    },

    uniq: function() {

    },

    keys: function(obj) {
      return Object.keys(obj)
    },

    values: function(obj) {
      return Object.values(obj)
    },

    functions: function(obj) {
      let keys = Object.keys(obj);
      let results = [];
      for (let i=0; i < keys.length; i++) {
        if (typeof obj[keys[i]] === 'function') {
          results.push(keys[i])
        }
      }
      return results.sort()
    },


  }
})()

fi.libraryMethod()
