const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (c, callback) {
      if (Array.isArray(c)) {
        for (let i = 0; i < c.length; i++) {
          callback(c[i])
        };
      } else {
        for (const [key, value] of Object.entries(c)) {
          callback(value);
        };
      }
      return c;

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
      let newCol = [...c]
      return newCol.sort(function(a,b){return cb(a)-cb(b)})
    },
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(c, hal, newArr = []) { 
      if (!Array.isArray(c)) return newArr.push(c) 
      if (hal) { 
        for (let val of c) {
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
        }
      } else {
        for (let val of c) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
      
    },
        uniqSorted: function(c, i) {
      const sorted = [c[0]]
      for (let index = 1; index < c.length; index++) {
        if (sorted[index-1] !== c[index])
          sorted.push(c[index])
      }
      return sorted
    },

    uniq: function(c, sorted=false, i=false) {
      if (sorted) {
        return fi.uniqSorted(c, i)
      } else if (!i) {
        return Array.from(new Set(c))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of c) {
          const moddedVal = i(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values


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
