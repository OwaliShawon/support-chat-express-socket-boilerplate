const User = require('./schema');

const findAll = async () => {
    return await User.find();
};

const findById = async (id) => {
    return await User.findById(id);
};

const exists = async (email) => {
    return await User.exists({ email });
};

const create = async (payload) => {
    console.log('payload******', payload);
    return await User.create(payload);
};

const update = async (id, payload) => {
    return await User.findByIdAndUpdate(id, payload, { new: true });
};

const remove = async (id) => {
    return await User.findByIdAndDelete(id);
};

const userRepository = {
    findAll,
    findById,
    exists,
    create,
    update,
    remove,
};

module.exports = userRepository;
