const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for(let e of collection ){
          callback(e)
        }
      } else {
        for (const key in collection) {
          callback(collection[key])
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let r = []
      if (Array.isArray(collection)){
        for (let e of collection){
          r.push(callback(e))
        }
      } else {
        for (let key in collection ){
          r.push(callback(collection[key], key))
        }
      }
      return r;
    },

    reduce: function(collection, callback, memo) {
      let r;
      if(memo === undefined){
        r = -2;
      } else {
        r = memo;
      }
      if (Array.isArray(collection)){
        for ( let e of collection ) {
          r = callback(r, e)
        }
      } else {
        for (let key in collection ) {
          r = callback(r, collection[key])
        }
      }
      return r;
    },

    find: function(collection, predicate) {
      for (let e of collection){
      if (predicate(e)){
        return e
      }
     }
    },

    filter: function(collection, predicate) {
      let r = [];
      for ( let e of collection ) {
        if (predicate(e)){
          r.push(e);
        }
      }
      return r;
    },

    size: function(collection) {
      if (Array.isArray(collection)){
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(collection, num) {
      let r = [];
      if (num === undefined){
        r = collection[0]
      } else {
        for ( let i=0; i < num; i++ ){
          r.push(collection[i])
        }
      }
      return r;
    },

    last: function(collection, num) {
      let r = [];
      if (num === undefined){
        r = collection[collection.length-1]
        return r;
      } else {
        let len = collection.length
        for( let l = len, n = num; l > 0, n > 0 ; l--, n--) {
          r.push(collection[l-1])
        }
        return r.reverse();
      }
    },

    compact: function(array){
      let r = [];
      for (let e of array ) {
        if (e){
          r.push(e);
        }
      }
      return r;
    },

    sortBy: function(arr, callback) {
      let r = [...arr];
      return r.sort(function(a, b){return callback(a) - callback(b)});
    },

    flatten: function(arr, bool) {
      if (bool === undefined ){
        
          console.log("cool")
      } else {
        return Array.prototype.concat.apply([], arr);
      }
    }


  }
})()

fi.libraryMethod()
