const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const i in collection){
        callback(collection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let array = []
      for (const i in collection){
        array.push(callback(collection[i]))
      }
      return array
    },

    reduce: function(collection, callback, acc) {
      for (let i = 0; i < collection.length; i++) {
        if (acc === undefined) {
          acc = collection[0];
          i++;
        }
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate){
      for (const i in collection) {
              if (predicate(collection[i]) === true) {
                return collection[i]
              }
            }
    },

    filter: function(collection, predicate) {
      const newArr = []
      for (const i in collection) {
        if (predicate(collection[i]) === true) {
          newArr.push(collection[i])
        }
      }
      return newArr
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n) {
      const newArr = []
      if (n === undefined) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      const newArr = []
      if (n === undefined) {
        return array[array.length-1]
      } else {
        return array.slice(array.length - n)
      }
    },

    compact: function(array) {
      const newArr = []
      for (const i in array){
        if (array[i]) {
          newArr.push(array[i])
        }
      }
      return newArr
    },

    sortBy: function(arr, iteratee){
      return [...arr].sort(function(a,b) {return iteratee(a) - iteratee(b)})
    },


    flatten: function flatten(array, shallow){
      let newArr = []
      for(var i in array){
        if (shallow === true){
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(array[i])
          } else {
              newArr.push(array[i])
          }
        }
        else {
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(flatten(array[i]))
          } else {
              newArr.push(array[i])
          }
        }
      }
      return newArr
    },

    uniq: function(array, isSorted, callback=(x) => x ) {
      const newArray = [];
      for (const i of array) {
        let counter = 0;
        for (const n of newArray) {
          if (callback(n) === callback(i)) {
            counter++
          }
        }
        if (counter < 1) {
          newArray.push(i)
        }
      }
      return newArray;
    },

 
    keys: function(obj) {
      return Object.keys(obj)
    },
 
    values: function(obj) {
      return Object.values(obj)
    },
    


    functions: function(fi) {
      let newArrOfFin = [];
    
        for (const i in fi) {
          if (typeof fi[i] === 'function'){
            newArrOfFin.push(i);
          }
        }
        return newArrOfFin;
      },

    }


  
})()

fi.libraryMethod()
