module.exports.inMLE = function inMLE() {
  return false;
}

module.exports.dbConnector = function dbConnector() { 
  throw new Error("Can't fetch the connector. Not executing in the database.");
}
