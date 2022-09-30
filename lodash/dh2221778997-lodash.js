var dh2221778997 = {

  checkPredicate: function(something, predicate) {
    if (typeof predicate == 'string') {
      if (something[predicate]) {
        return true
      } else {
        return false
      }
    }
    if (typeof predicate == 'function') {
      return predicate(something)
    }
    if (predicate instanceof Object) {
      if (Array.isArray(predicate)) {
        if (something[predicate[0]] == predicate[1]) {
          return true
        } else {
          return false
        }
      } else {
        for (var key in predicate) {
          if (predicate[key] != something[key]) {
            return false
          }
        }
        return true
      }
    }
  },

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

  flattenDeep: function(array) {
      var newary = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        var flattedarray = flattenDeep(array[i])
        for (var j = 0; j < flattedarray.length; j++) {
          newary.push(flattedarray[j])
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
    } else {
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          var flattedarray = flattenDepth(array[i], depth - 1)
          for (var j = 0; j < flattedarray.length; j++) {
            newary.push(flattedarray[j])
          }
        } else {
          newary.push(array[i])
        }
      }
    }
    return newary
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

  reverse: function(array) {
    var n = array.length
    for (var i = array.length - 1 ; i >=0; i--) {
      array.push(array[i])
    }
    return array.splice(0, n)
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


  countBy: function(collection, action) {
    var newObj = {}
    if (typeof action == 'function') {
      for (var i = 0; i < collection.length; i++) {
        if (action(collection[i]) in newObj) {
          newObj[action(collection[i])]++
        } else {
          newObj[action(collection[i])] = 1
        }
      }
      return newObj
    }
    if (typeof action == 'string') {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i][action] in newObj) {
          newObj[collection[i][action]]++
        } else {
          newObj[collection[i][action]] = 1
        }
      }
      return newObj
    }
  },

  groupBy: function(collection, action) {
    var newObj = {}
    if (typeof action == 'function') {
      for (var i = 0; i < collection.length; i++) {
        if (action(collection[i]) in newObj) {
          newObj[action(collection[i])].push(collection[i])
        } else {
          newObj[action(collection[i])] = []
          newObj[action(collection[i])].push(collection[i])
        }
      }
      return newObj
    }
    if (typeof action == 'string') {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i][action] in newObj) {
          newObj[collection[i][action]].push(collection[i])
        } else {
          newObj[collection[i][action]] = []
          newObj[collection[i][action]].push(collection[i])
        }
      }
      return newObj
    }
  },

  keyBy: function(collection, action) {
    var newObj = {}
    if (typeof action == 'function') {
      for (var i = 0; i < collection.length; i++) {
        newObj[action(collection[i])] = collection[i]
      }
      return newObj
    }
    if (typeof action == 'string') {
      for (var i = 0; i < collection.length; i++) {
        newObj[collection[i][action]] = collection[i]
      }
      return newObj
    }
  },

  forEach: function(collection, action) {
    if (collection instanceof Object) {
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          action(collection[i], i , collection)
        }
      } else {
        for (var key in collection) {
          action(collection[i], key, collection)
        }
      }
    }
    return collection
  },

  map: function(collection, action) {
    var newary = []
    if (typeof action == 'function') {
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          newary.push(action(collection[i], i, collection))
        }
        return newary
      } else {
        for (var key in collection) {
          newary.push(action(collection[key]))
        }
        return newary
      }
    }
    if (typeof action == 'string') {
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          newary.push(collection[i][action])
        }
        return newary
      } else {
        newary.push(collection[action])
        return newary
      }
    }
  },

  filter: function(collection, predicate) {

  },

  reduce: function(collection, action, accumulator) {
    if (Array.isArray(collection)) {
      if (accumulator == undefined) {
        accumulator = collection[0]
        for (var i =1 ; i < collection.length; i++) {
          accumulator = action(accumulator, collection[i])
        }
      } else {
        for (var i =0 ; i < collection.length; i++) {
          accumulator = action(accumulator, collection[i])
        }
      }
      return accumulator
    } else {
      for (var key in collection) {
        accumulator = action(accumulator, collection[key], key)
      }
      return accumulator
    }
  },

  reduceRight: function(collection, action, accumulator) {
    if (Array.isArray(collection)) {
      if (accumulator == undefined) {
        accumulator = collection[collection.length -1]
        for (var i =collection.length -1 ; i >= 1; i--) {
          accumulator = action(accumulator, collection[i])
        }
      } else {
        for (var i =collection.length - 1 ; i >= 0; i--) {
          accumulator = action(accumulator, collection[i])
        }
      }
      return accumulator
    } else {
      for (var key in collection) {
        accumulator = action(accumulator, collection[key], key)
      }
      return accumulator
    }
  },

  size: function(collection) {
    if (typeof collection == 'string') {
      return collection.length
    } else if (Array.isArray(collection)) {
      return collection.length
    } else {
      var t = 0
      for (var key in collection) {
        t++
      }
      return t
    }
  },

  sortBy: function(collection, action) {
    var newary = []
    if (Array.isArray(collection)) {

    } else {

    }
  },

  sample: function(collection) {
    if (Array.isArray(collection)) {
      var a = Math.floor(Math.random() * collection.length)
      return collection[a]
    } else {
      for (var key in collection) {
        return key
      }
    }
  },

  isUndefined: function(value) {
    if (value === undefined) {
      return true
    } else {
      return false
    }
  },

  isNull: function(value) {
    if (value === null) {
      return true
    } else {
      return false
    }
  },

  isNil: function(value) {
    if (value === undefined || value === null) {
      return true
    } else {
      return false
    }
  },

  max: function(array) {
    if (!array) {
      return undefined
    } else if (array.length == 0) {
      return undefined
    } else {
      var t = -Infinity
      for (var i = 0; i < array.length; i++) {
        if (array[i] > t) {
          t = array[i]
        }
      }
      return t
    }
  },

  min: function() {
    if (!array) {
      return undefined
    } else if (array.length == 0) {
      return undefined
    } else {
      var t = Infinity
      for (var i = 0; i < array.length; i++) {
        if (array[i] < t) {
          t = array[i]
        }
      }
      return t
    }
  },

  maxBy: function(array, action) {
    if (typeof action == 'string') {
      var t = array[0][action]
      for (var i = 0; i < array.length; i++) {
        if (array[i][action] > t ) {
          t = array[i][action]
          var z = array[i]
        }
      }
      return z
    }
    if (typeof action == 'function') {
      var t = action(array[0])
      for (var i = 0; i < array.length; i++) {
        if (action(array[i]) > t ) {
          t = action(array[i])
          var z = array[i]
        }
      }
      return z
    }
  },

  minBy: function(array, action) {
    if (typeof action == 'string') {
      var t = array[0][action]
      for (var i = 0; i < array.length; i++) {
        if (array[i][action] < t ) {
          t = array[i][action]
          var z = array[i]
        }
      }
      return z
    }
    if (typeof action == 'function') {
      var t = action(array[0])
      for (var i = 0; i < array.length; i++) {
        if (action(array[i]) < t ) {
          t = action(array[i])
          var z = array[i]
        }
      }
      return z
    }
  },

  round: function(number, precision = 0) {
    return (Math.round(number * (10 ** precision))) / (10 ** precision)
  },

  sumBy: function(array, action) {
    var sum = 0
    if (typeof action == 'string') {
      for (var i = 0; i < array.length; i++) {
        sum += array[i][action]
      }
      return sum
    }
    if (typeof action == 'function') {
      for (var i = 0; i < array.length; i++) {
        sum += action(array[i])
      }
      return sum
    }
  },

  flatMap: function(collection, action) {
    var newary = []
    var ary = []
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        ary.push(action(collection[i], i , collection))
      }
      newary = dh2221778997[flatten](ary)
      return newary
    } else {
      for (var key in collection) {
        ary.push(action(collection[key], key , collection))
      }
      newary = dh2221778997[flatten](ary)
      return newary
    }
  },

  flatMapDepth: function(collection, action, depth = 1) {
    var newary = []
    var ary = []
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        ary.push(action(collection[i], i , collection))
      }
      newary = dh2221778997[this.flattenDepth](ary, depth)
      return newary
    } else {
      for (var key in collection) {
        ary.push(action(collection[key], key , collection))
      }
      newary = dh2221778997[this.flattenDepth](ary, depth)
      return newary
    }
  },







































}
