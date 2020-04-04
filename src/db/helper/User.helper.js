const user = require('../model/User.model');

module.exports = {
    Create: (newData) => user.create(newData),
    FindOneById: (id) => user.findById(id),
    Update: (id, newData) => user.findByIdAndUpdate(id, newData),
    FindAll: (params) => user.find(params),
    FindOne: (query) => user.findOne(query),
};
