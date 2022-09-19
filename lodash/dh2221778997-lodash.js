var dh2221778997 = {

  chunk: function(array, size = 1) {
    var newary = []
    var newsonary =[]
    for (var i = 0 ; i < array.length; i++) {
      if (i == array.length-1) {
        newsonary.push(array[i])
        newary.push(newsonary)
      } else {
        if ((i + 1) % size != 0) {
          newsonary.push(array[i])
        } else {
          newsonary.push(array[i])
          newary.push(newsonary)
          newsonary = []
        }
      }
    }
    return newary
  },

  compact: function(array) {
    var newary = []
    for (var i = 0 ; i < array.length ; i++) {
      var t = array[i]
      if (!(t == false || t == null || t == 0 || t == undefined || t == NaN || t == '')) {
        newary.push(t)
      }
    }
    return newary
  },

  concat: function(array) {
    var newary = []
    for (var i = 0 ; i < array.length ; i++) {
      newary.push(array[i])
    }
    for (var k = 1 ; k < arguments.length ; k++) {
      if (Array.isArray(arguments[k])) {
        for (var j = 0; j < arguments[k].length ; j++) {
          newary.push(arguments[k][j])
        }
      } else {
        newary.push(arguments[k])
      }
    }

    return newary
  },

  difference: function(array,...values) {
    var newary = []
    var value
  },

  drop: function(array, n = 1) {
    var newary = []
    if (n < 1) {
      return array
    }
    if (n > array.length) {
      return newary
    }
    for (var i = n ; i < array.length ; i++ ) {
      newary.push(array[i])
    }
    return newary
  },

  dropRight: function(array, n = 1) {
    var newary = []
    if (n < 1) {
      return array
    }
    if (n > array.length) {
      return newary
    }
    for (var i = 0 ; i < array.length - n ; i++ ) {
      newary.push(array[i])
    }
    return newary
  },


  dropRightWhile: function(array) {

  },

  dropWhile: function(array, predicate) {
    var newary = []
    for (var i = 0 ; i < array.length ; i++) {
      if (!(array[i] == predicate)) {
        newary.push[array[i]]
      }
    }
  },

  fill: function(array, value, start = 0, end = array.length ) {
    for (var i = start; i < end ; i++) {
      array[i] = value
    }
    return array
  },

  findIndex: function(array, predicate, fromIndex = 0) {
    for (var i = fromIndex; i < array.length ; i++) {
      if (typeof predicate == 'function') {
        if (predicate(array[i])) {
          return i
        }
      }
      if (typeof predicate == 'object') {
        if (array[i] == predicate) {
          return i
        }
      }
      if (typeof predicate == 'string') {
        if (array.predicate) {
          return i
        }
      }
    }
    return -1
  },

  findLastIndex: function(array, predicate, fromIndex = array.length -1) {
    for (var i = fromIndex; i >= 0 ; i--) {
      if (typeof predicate == 'function') {
        if (predicate(array[i])) {
          return i
        }
      }
      if (typeof predicate == 'object') {
        if (array[i] == predicate) {
          return i
        }
      }
      if (typeof predicate == 'string') {
        if (array.predicate) {
          return i
        }
      }
    }
    return -1
  },

  flatten: function(array) {
    var newary = []
    for (var i = 0 ; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length ; j++) {
          newary.push(array[i][j])
        }
      } else {
        newary.push(array[i])
      }
    }
    return newary
  },

  flattenDeep: function abb(array) {
      var newary = []
      for (var i = 0 ; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          var flattedary = flattenDeep(array[i])
          for (var j = 0; j < flattedary.length ; j++) {
            newary.push(flattedary[j])
          }
        } else {
          newary.push(array[i])
        }
      }
      return newary
  },

  flattenDepth: function(array, depth = 1) {
    var newary = []
    if (depth == 0) {
      return array.slice()
    }
    for (var i = 0; i< array.length ; i++) {
      if (Array.isArray(array[i])) {
        var flattedary = flattenDepth(array[i], depth-1)
        for (var j = 0; j < flattedary.length; j++) {
          newary.push(flattedary[j])
        }
      } else {
        newary.push(array[i])
      }
    }
    return newary
  },

  fromPairs: function(pairs) {
    var newobj = {}
    for (var i = 0; i < pairs.length; i++) {
      newobj[pairs[i][0]] = pairs[i][1]
    }
    return newobj
  },

  head: function(array) {
    if (!array) {
      return
    } else {
      return array[0]
    }
  },

  indexof: function(array, value, fromIndex = 0) {
    if (fromIndex >= array.length) {
      return -1
    }
    if (fromIndex < 0) {
      for (var i = array.length + fromIndex ; i < array.length; i++) {
        if (array[i] == value) {
          return i
        }
      }
    }
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
    }
  }
  return -1
},

  initial: function(array) {
    var newary = []
    for (var i = 0; i < array.length - 1; i++) {
      newary.push(array[i])
    }
  },

  intersection; function(...arrays) {
    var result = []
    var obj = {}
    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < arrays[i].length; j++) {
        var temp = arrays[i][j]
        if (!(temp in obj)) {
          obj[temp] = 1
        } else {
          obj[temp]++
        }
      }
    }
    for (var key in obj) {
      if (obj[key] == arrays.length) {
        result.push(key)
      }
    }
    return result
  },









































}
