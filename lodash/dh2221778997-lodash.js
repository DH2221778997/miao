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
      if (!(t == false || t == null || t == 0 || t == undefined || t != t || t == '')) {
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
    var newobj = {}
    for (var i = 0; i < values.length; i++ ) {
      if (Array.isArray(values[i])) {
        for (var j = 0; j < values[i].length; j++) {
          newobj[values[i][j]] = 1
        }
      } else {
          newobj[values[i]] = 1
      }
    }
    for (var k = 0; k < array.length; k++) {
      if (!(array[k] in newobj)) {
        newary.push(array[k])
      }
    }
    return newary
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

      if (predicate instanceof Object) {
        if (Array.isArray(predicate)) {
          if (array[i][predicate[0]] == predicate[1]) {
            return i
          }
        } else {
          for (var key in array[i]) {
            if (array[i][key] != predicate[key]) {
              break//此处有问题
            }
          }
        }
      }
      if (typeof predicate == 'string') {
        if (array[predicate]) {
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

  indexOf: function(array, value, fromIndex = 0) {
    if (fromIndex >= array.length) {
      return -1
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
    return newary
  },

  intersection: function(...arrays) {
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



  join: function(array, separator = ',') {
    var strings = ''
    for (var i = 0; i < array.length; i++) {
      if (i == array.length -1) {
        strings += ''+array[i]
      } else {
        strings += ''+array[i]+separator
      }
    }
    return strings
  },

  pull: function(array, ...values) {
    var newary = []
    for (var i = 0; i < array.length; i++) {
      var t = true
      for (var j = 0; j < values.length; j++) {
        if (array[i] == values[j]) {
          t = false
        }
      }
      if (t) {
        newary.push(array[i])
      }
    }
    var array = []
    for (var i = 0; i < newary.length; i++) {
      array.push(newary[i])
    }
    return array
  },

  last: function(array) {
    var i = array.length - 1
    return array[i]
  },

  lastIndexOf: function(array, value, fromIndex = array.length -1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },


  reverse: function(array) {
    var newary = []
    for (var i = array.length -1; i >= 0; i--) {
      newary.push(array[i])
    }
     return array = [...newary]
  },

  sortedIndex: function(array, value) {
    //使用二分法
    var mid = Math.floor(array.length / 2)
    if (array[mid] == value) {
      return mid
    }
    if (array[mid] > value) {
      low = mid
      high = array.length

    }
    if (array[mid] < value) {

    }
  },

  every:  function(collection, predicate) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (!predicate(collection[i])) {
          return false
        }
      }
      return true
    }
    if (collection instanceof Object) {
      if (typeof predicate == 'string') {
        for (var key in collection) {
          if (!collection[key][predicate]) {
            return false
          }
        }
        return true
      }
      if (Array.isArray(predicate)) {
        for (var key in collection) {
          if (collection[key][predicate[0]] != predicate[1]) {
            return false
          }
        }
        return true
      }
      if (predicate instanceof Object) {
        for (var key in collection) { //未写完

        }
      }
    }
  },

  some: function() {
    //和every差不多
  },


  countBy: function(collection, f) {
    if (Array.isArray(collection)) {
      var result = {}
      for (var i = 0; i < collection.length; i++) {
        if (f(collection[i]) in result) {
          result[f(collection[i])]++
        } else {
          result[f(collection[i])] = 1
        }
      }
      return result
    }
    if (collection instanceof Object) {
      var result = {}
      for (var key in collection) {
        if (f(collection[i]) in result) {
          result[f(collection[i])]++
        } else {
          result[f(collection[i])] = 1
        }
      }
      return result

    }//写错了 如果是属性的话不知道怎么写
  },

  groupBy: function(collection, f) {
    if (Array.isArray(collection)) {
      var result = {}
      for (var i = 0; i < collection.length; i++) {
        if (f(collection[i]) in result) {
          result[f(collection[i])].push(collection[i])
        } else {
          result[f(collection[i])] = []
          result[f(collection[i])].push(collection[i])
        }
      }
      return result
    }
    if (collection instanceof Object) {
      var result = {}
      for (var key in collection) {
        if (f(collection[i]) in result) {
          result[f(collection[i])].push(collection[i])
        } else {
          result[f(collection[i])] = []
          result[f(collection[i])].push(collection[i])
        }
      }
      return result//如果是对象不知道怎么去迭代，以及迭代的结果是什么不知道
    }
  },

  keyBy: function() {

  },

  forEach: function() {

  }







































}
