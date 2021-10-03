const PirateController = require("../controllers/pirate.controller");
const Pirate = require("../models/pirate.model");

module.exports = app => {
    app.get("/api/pirates/all", PirateController.findAllPirates);
    app.post("/api/pirates/create", PirateController.createPirate);
    app.get("/api/pirates/:_id", PirateController.findSinglePirate);
    app.delete("/api/pirates/:_id/delete", PirateController.deleteSinglePirate);
    app.patch("/api/pirates/:_id/update", PirateController.updateSinglePirate);
   
}