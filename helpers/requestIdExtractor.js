exports.formatIds = (queryObj, cb) => {
  var formattedIds = []
  var myBreak = false

  for (var i = 0; !myBreak; i++) {
    if (queryObj['key' + i]) {
      formattedIds.push(queryObj['key' + i])
    } else {
      myBreak = true
    }
  }
  cb(formattedIds)
}
