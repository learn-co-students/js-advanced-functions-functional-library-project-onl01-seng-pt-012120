

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      let data = (collection instanceof Array) ? collection : Object.values(collection)

        for(let i = 0; i < data.length; i++) {
          callback(data[i])
        };
      return collection
    },

    map: function(collection,callback) {
      let data = (collection instanceof Array) ? collection : Object.values(collection)
      let newCollection = []

        for(let i = 0; i < data.length; i++) {
          newCollection.push(callback(data[i]))
        }
      return newCollection
    },

    reduce: function(collection,callback,acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for(let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      let data = (collection instanceof Array) ? collection : Object.values(collection)

      for(let i = 0; i < data.length; i++) {
          if (predicate(data[i])) return data[i]
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let newArray = []

      for(let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) newArray.push(collection[i])
      }

      return newArray
    },

    size: function(collection) {
      let data = (collection instanceof Array) ? collection : Object.values(collection)
      return data.length
    },

    first: function(array, n) {
      if (!n) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      return (!n) ?  array[array.length-1] : array.slice(array.length - n, array.length)
    },


    compact: function(array) {
      let newArray = []
      for(let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },


    sortBy: function(array,callback) {
      let newArray = [...array]
      return newArray.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },


    flatten: function(array, shallow, newArray) {
      if (!newArray){newArray = []}
      if(shallow) {
        return newArray.concat.apply(newArray, array)
      }
      for(let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          this.flatten(array[i], shallow, newArray)
        } else {
          newArray.push(array[i])
        }
      }
      return newArray
    },


    uniq: function(collection, sorted = false, callback = false) {
      if (sorted) {
        return fi.uniqSorted(collection, callback)
      } else if (!callback) {
        return Array.from(new Set(collection))
      } else {
        const modifiedValues = new Set()
        const uniqValues = new Set()
        for (let value of collection) {
          const modValue = callback(value)
          if (!modifiedValues.has(modValue)) {
            modifiedValues.add(modValue)
            uniqValues.add(value)
          }
        }
        return Array.from(uniqValues)
      }
    },


    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      let array = []
      for(let key in object){
        if (typeof object[key] === "function"){
          array.push(object[key])
        }
      }
      return array
    },

  }
})()

fi.libraryMethod()