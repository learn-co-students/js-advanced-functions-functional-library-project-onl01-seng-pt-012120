const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i])
        };
      } else {
        for (const [key, value] of Object.entries(collection)) {
          callback(value);
        };
      }
      return collection;

    },

    map: function(c,cb) {
      let newC = [];
      if (Array.isArray(c)) {
        for (let i = 0; i < c.length; i++) {
          newC.push(cb(c[i]));
        };
      } else {
        for (const [key, value] of Object.entries(c)) {
          newC.push(cb(value));
        };
      };
      return newC;

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
