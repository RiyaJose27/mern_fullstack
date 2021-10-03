const mongoose = require("mongoose");
const PirateSchema = new mongoose.Schema({
    //name, imahe, treasue chest, crew position, peg, eye, hook, pirate catch phrase
    name: {
        type: String,
        required: [true, "must have a title"],
        minLength: [5, "need atleat 5 characters"]

    },

    phrases: {
        type: String,
        required: [true, "must have a title"],
        minLength: [5, "need atleat 5 characters"]

    },

    image: {
        type: String,
        required: [true, "must have an image"],
        minLength: [8, "need atleast 8 "]
    },


    position: {
        type: String
        
    },

    chests: {
        type: Number
    },
},
    {timestamps: true})

const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;