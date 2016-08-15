'use strict';
const Model = require('./model');

const Controller = {
  create: function(data,callback) {
   const md = new Model(data);
   md.save(callback);
  },
  find: function(query,callback) {
    Model.find(query,callback);
  },
  findOne: function(query,callback) {
    Model.findOne(query,callback);
  },
  update: function(query, mod, callback) {
    Model.update(query, mod, callback);
  },
  remove: function(query, callback) {
    Model.remove(query, callback)
  },
};
module.exports = Controller;
