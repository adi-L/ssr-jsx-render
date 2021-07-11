module.exports = function(source, map) {
    this.callback(null, source, map);
    return source;
};