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
        if (cb(item, p)) {
          return item;
        } 
      }
    },
    filter: function(c,cb,p){
      const a2return = []
      for (const item of c) {
        if (cb(item, p)) {
          a2return.push(item)
        }
      }
      return a2return;
    },
    size: function(c){
      let count = 0
      if (Array.isArray(c)) {
        for (const i of c) {
          count+=1
        } 
        return count
      }else {
        let aofk = []
        for (const [key, value] of Object.entries(c)) {
          aofk.push(key)
        };
        for (const k of aofk) {
          count+=1
        }
        return count
      }
    },
    first: function(c,n){
      if (n) {
        return c.slice(0,n)
      } else {
        return c[0]
      }
    },
    last: function(c,n){
      let clm1 = c.length - 1
      if(n){
        return c.slice((c.length - n), c.length)
      } else {
        return c[clm1]
      }
    },
    compact: function(c){
      let fv = []
      for (const i of c) {
        if(!!i){
           fv.push(i)
        }
      }
      return fv
    },
    sortBy: function(c,cb){
      let newCol = []
      for (const i of c) {
        newCol.push(i)
      }
      newCol.sort(cb())
      
    },
    flatten: function(){},
    uniq: function(){},
    keys: function(){},
    values: function(){},

    functions: function() {

    },


  }
})()

fi.libraryMethod()
