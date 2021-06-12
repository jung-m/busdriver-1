const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusdriverSchema = new Schema({
    gamePhase: {type: String, required: true, enum: ['waiting', 'spreading', 'building', 'preempting', 'driving', 'resume']},
    players: [{type: Schema.Types.ObjectId, ref: 'User'}],
    cardStack: [Object],
    preemptCards: [Object],
    drivingCards: [Object],
    //openShots: [Object]
});

module.exports = mongoose.model('Busdriver', BusdriverSchema);

