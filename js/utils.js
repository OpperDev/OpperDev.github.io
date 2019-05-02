Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)]
}

function applyJson(file, callback) {
  $.getJSON(file, data => callback(data))
}
