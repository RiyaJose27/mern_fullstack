const Pirate = require("../models/pirate.model");

module.exports.findAllPirates = (req,res) => {
    console.log("hey it's me, the find all function!");

    Pirate.find({})
        .then(allPirates => res.json({results: allPirates}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.createPirate = (req,res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json({results: newPirate}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.findSinglePirate = (req,res) => {
    Pirate.findOne({_id: req.params._id})
        .then(singlePirate => res.json({results: singlePirate}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.deleteSinglePirate = (req,res) => {
    Pirate.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.updateSinglePirate = (req,res) => {
    Pirate.updateOne({_id:req.params._id},
        req.body,
        {runValidators: true})
        .then(singlePirate => res.json({results: singlePirate}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

