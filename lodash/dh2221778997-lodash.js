var dh2221778997 = {

  chunk: function(array, size = 1) {
    var newary = []
    var newsonary =[]
    var t = 0
    for (var i = 0 ; i < array.length; i++) {
      if (i == array.length-1) {
        newary[t] = newsonary
      } else {
        if ((i + 1) % size != 0) {
          newsonary.push(array[i])
        } else {
          newsonary.push(array[i])
          newary[t] = newsonary
          t = t + 1
          newsonary = []
        }
      }
    }
    return newary
  },

  compact: function() {

  },





}
