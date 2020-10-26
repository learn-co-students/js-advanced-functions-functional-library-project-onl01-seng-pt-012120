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

    reduce: function(c,cb,acc) {
      if (!acc) {
        acc = c[0];
        c = c.slice(1);
      }
      for (let i = 0; i < c.length; i++) {
        acc = cb(acc, c[i], c);
      };
      return acc;

    },

    find: function(c,cb,p){
      for (const item of c) {
        console.log(item)
        console.log(cb(item))
        if (item === p) {
          return item;
        } 
      }
    },
    filter: function(){},
    size: function(){},
    first: function(){},
    last: function(){},
    compact: function(){},
    sortBy: function(){},
    flatten: function(){},
    uniq: function(){},
    keys: function(){},
    values: function(){},

    functions: function() {

    },


  }
})()

fi.libraryMethod()
