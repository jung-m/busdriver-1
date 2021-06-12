const room = require('../models/roomModel');

exports.getRooms = async (filter) => {
    return await room.find(filter).populate('users') //populate replaces user ids with the actual user objects... help: https://dev.to/paras594/how-to-use-populate-in-mongoose-node-js-mo0
    .then(rooms => {
        return rooms;
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

exports.createRoom = async (data) => {
    const newRoom = new room(data);
    return await newRoom.save()
    .then(room => {
        return room.id;
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

exports.joinRoom = async (code, name) => {
    await room.findOneAndUpdate( {code: code}, {}, { new: true, useFindAndModify: false})
    .catch(err => {
        console.log(err);
        throw err;
    });
}

exports.updateRoom = async (id, data) => {
    await room.findOneAndUpdate( {_id: id }, data, { new: true, useFindAndModify: false })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

exports.deleteRooms = async (filter) => {
     await room.deleteMany(filter)
     .catch(err => {
         console.log(err);
         throw err;
     });
};

exports.deleteAllRooms = async () => {
    await room.deleteMany({})
    .catch(err => {
        console.log(err);
        throw err;
    });
};
