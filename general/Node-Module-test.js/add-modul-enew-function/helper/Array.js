Array.prototype.deleteByNameAndClean = function(name) {
  this.splice(this.indexOf(name), 1);
  return this;
};

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};
