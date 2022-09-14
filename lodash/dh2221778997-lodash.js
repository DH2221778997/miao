var dh2221778997 = {

  chunk: function(array, size) {
    var newary = []
    var t = 0
    for (var i = 0 ; i < array.length; i++) {
      if ((i + 1) % 3 != 0) {
        newary[t].push(array[i])
      } else {
        newary[t].push(array[i])
        t = t + 1
      }
    }
    return newary
  },

  compact: function() {

  },





}
