const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(a, f) {
      const array = Object.values(a);
      for (let i = 0; i < array.length; i++) {f(array[i])};
      return a
    },

    map: function(a, f) {
      const b = Object.values(a);
      for (let i = 0; i < b.length; i++) {b[i] = f(b[i])};
      return b
    },

    reduce: function(a, f, int) {
      const b = Object.values(a);
      let d;
      if (int || int === 0) {d = int; for (let x of b) {d = f(d, x)}} 
      else {for (let x of b) {if (x === b[0]) {d = x} else {d = f(d, x)}}}
      return d
    },

    functions: function(a) {
      const k = Object.keys(a);
      const v = Object.values(a);
      let n = [];
      for (let i = 0; i < v.length; i++) {if (typeof v[i] === "function") {n.push(k[i])}};
      return n.sort()
    },

    find: function(a, s) {
      const b = Object.values(a);
      let z;
      for (let i = 0; i < b.length; i++) {if (s(b[i])) {z = b[i]; break;}}
      return z
    },

    filter: function(a, f) {
      const b = Object.values(a);
      let z = [];
      for (let i = 0; i < b.length; i++) {if (f(b[i])) {z.push(b[i]);}}
      return z
    },

    size: function(a) {
      if (a[0] !== undefined) {return a.length} else {return Object.keys(a).length}
    },

    first: function(a, b=1) {
      let n = [];
      if (b === 1) {return a[0]} else {for (let i = 0; i < b; i++) {n.push(a[i])}; return n}
    },

    last: function(a, b=1) {
      let c = Object.values(a);
      let n = [];
      if (b === 1) {return a[a.length - 1]} else {c.reverse(); for (let i = 0; i < b; i++) {n.push(c[i])}; return n.reverse()}
    },

    compact: function(a) {
      let b = Object.values(a);
      let n = [];
      for (const x of b) {if (!!x) {n.push(x)}};
      return n
    },

    sortBy: function(a, f) {
      let b = Object.values(a);
      return b.sort((a,b) => f(a) - f(b))
    },

    flatten: function(a, b) {
      var r = [];
      const x = function(z) {for(var i = 0; i < z.length; i++) {
        if(Array.isArray(z[i])) {
          x(z[i]);
        } else {
            r.push(z[i]);
        }
      }};
      if (b === true) {for(var i = 0; i < a.length; i++) {
        if(Array.isArray(a[i])) {
            let c = a[i];
            for(var e = 0; e < c.length; e++) {r.push(c[e])};
        } else {
            r.push(a[i]);
        }
      }} else {x(a)}
      return r;
    },

    uniq: function(a,b,c) {
      let z = a;
      if (typeof c === "function") {z = []; for (let y of a) {z.push(y); if (!!c(y) === b) {break}}};
      const isin = function(n,ar){
        for (var i=0;i<ar.length;i++){
          if (ar[i]== n){
          return true;
          }
        }
        return false;
      };
      let r = [];
      for (let x = 0; x < z.length; x++) {if (!isin(z[x], r)) {r.push(z[x])}};
      return r
    },

    keys: function(a) {
      const b = Object.keys(a);
      return b
    },

    values: function(a) {
      const b = Object.values(a);
      return b
    }

  }
})()

fi.libraryMethod()
