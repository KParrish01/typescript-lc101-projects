var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// The variables that are commented out will be moved into the Spacecraft class
var spaceCraft = "Space Shuttle";
var speedMph = 17500;
var milesPerKilometer = 0.621;
// // This function will also be moved into the Spacecraft class (*** I used mine with rounding insted ***)
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        var daysAway = Math.round((hours / 24) * 10) / 10;
        return daysAway;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log("It takes " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days for " + spaceShuttle.name + " to get to Mars.");
console.log("It takes " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days for " + spaceShuttle.name + " to get to the moon.");
