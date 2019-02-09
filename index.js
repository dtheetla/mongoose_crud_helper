function MongooseCrudHelper(modelfilepath) {
  // this.Model = require('../models/' + modelname + '.js');
  this.Model = require(modelfilepath)
}

MongooseCrudHelper.prototype.create = function (body, callback) {
  const obj = new this.Model(body);
  obj.save((err) => {
    if (err) {
      callback(500, err);
    } else {
      callback(200, 'created');
    }
  });
};

MongooseCrudHelper.prototype.find = function (body, fields, callback) {
  console.log(body);
  this.Model.find(body, fields, callback);
};

MongooseCrudHelper.prototype.listAll = function (body, callback) {
  console.log(body);
  this.Model.find(body, callback);
};

MongooseCrudHelper.prototype.update = function (q, newValues, cb) {
  this.Model.findOneAndUpdate(
    q,
    newValues,
    cb);
};

MongooseCrudHelper.prototype.delete = function (q, newValues, cb) {
  return this.Model.findOneAndDelete(q);
};

module.exports = MongooseCrudHelper;
