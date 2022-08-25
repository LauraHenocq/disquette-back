'use strict';

const disquettes = require('../data/disquettes')

module.exports = {
  getAll() {
    return disquettes
  },

  add(disquette) {
    disquettes.push(disquette)
  }
}
