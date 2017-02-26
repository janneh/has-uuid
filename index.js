module.exports = function(uuid, idPropertyName) {
  return function(item) {
    return idPropertyName
      ? item[idPropertyName] === uuid
      : item.uuid === uuid
  }
}
