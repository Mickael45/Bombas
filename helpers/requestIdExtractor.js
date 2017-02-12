const mongoose = require('mongoose')

exports.formatIds = (queryObj, cb) => {
  var formattedIds = []
  var myBreak = false

  for (var i = 0; !myBreak; i++) {
    if (queryObj['key' + i]) {
      formattedIds.push(mongoose.Types.ObjectId(queryObj['key' + i]))
    } else {
      myBreak = true
    }
  }
  cb(formattedIds)
}
