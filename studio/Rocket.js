"use strict";
exports.__esModule = true;
// let cargoItems = [];
// let astronauts = [];
// export class Rocket implements Payload {
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = []; // array of Cargo objects
        this.astronauts = []; // array of Astronaut objects
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumOfItemsMass = 0;
        for (var i = 0; i < items.length; i++) {
            sumOfItemsMass += items[i].massKg; /* whatever it is we are adding up sum of all items */
            ;
            //   sumOfItemsMass += Payload[i].massKg;
        }
        return sumOfItemsMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var sum = (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
        return sum;
    };
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
