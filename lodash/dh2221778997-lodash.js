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





}
