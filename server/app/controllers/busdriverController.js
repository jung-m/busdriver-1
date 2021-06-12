const busdriver = require('../models/busdriverModel');

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

exports.getGame = async (id) => {
    return await busdriver.findById(id).populate('players')
    .then(game => {
        return game;
    })
    .catch(err => {
        throw err;
    })
}

exports.createBusdriver = async (data) => {
    const newBusdriver = new busdriver(data);
    return await newBusdriver.save()
        .then(room => {
            return room.id;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};