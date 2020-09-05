const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        collection.forEach(x => {
          let index = collection.indexOf(x)
          callback(x, index, collection)
        });
      }
      else if (typeof(collection) === "object") {
        for (let i=0; i < Object.keys(collection).length; i++) {
          callback(collection[Object.keys(collection)[i]], Object.keys(collection)[i], i)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
        collection.forEach(x => {
          let index = collection.indexOf(x)
          newCollection.push(callback(x, index, collection))
        });
      }
      else if (typeof(collection) === "object") {
        for (let i=0; i < Object.keys(collection).length; i++) {
          newCollection.push(callback(collection[Object.keys(collection)[i]], Object.keys(collection)[i], i))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, start = 0) {
      return collection.reduce((allValues, value) => {
        return callback(allValues, value, collection)
      }, start)
    },

    find: function(collection, callback) {
      return collection.find(x => callback(x))
    },

    filter: function(collection, callback) {
      return collection.filter(x => callback(x))
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      }
      else if(typeof(collection) === 'object') {
        return Object.keys(collection).length
      };
    },

    first: function(collection, number = 0) {
      if (number === 0) {
        return collection[number]
      }
      else {
        return collection.slice(0, number)
      }
    },

    last: function(collection, number = 1) {
      if (number === 1) {
        return collection[collection.length - number]
      }
      else {
        return collection.slice(collection.length - number, collection.length)
      }
    },

    compact: function(collection) {
      let newArray = []
      collection.forEach(x => {
        if (x){
          newArray.push(x)
        }
      })
      return newArray
    },

    sortBy: function (collection, callback) {
      let newCollection = [...collection]
      let sortProgress = [-1]
      while(fi.find(sortProgress, e => e === -1)){
        for(let i = 0; i < newCollection.length - 1; i++){
          if(callback(newCollection[i]) > callback(newCollection[i+1])){
            let hold = newCollection[i+1]
            newCollection[i+1] = newCollection[i]
            newCollection[i] = hold
            sortProgress[i] = -1
          } else {
            sortProgress[i] = 0
          }
        }
      }
      return newCollection
    },

    flatten: function(array, shallow = false){
      if (shallow === false){
        return array.flat(Infinity)
      } else {
        return array.flat()
      }
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } 
      else if (!iteratee) {
        return Array.from(new Set(collection))
      } 
      else {
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
      let array = []
      for (const prop in object) {
        array.push(prop)
      }
      return array
    },

    values: function(object) {
      let array = []
      for (const prop in object) {
        array.push(object[prop])
      }
      return array
    },

    functions: function(obj) {
      let array = []
      for (let prop in obj) {
        if (typeof(obj[prop]) === 'function'){
          array.push(prop)
        }
      }
      return array.sort()
    }
  }
})()

fi.libraryMethod()
