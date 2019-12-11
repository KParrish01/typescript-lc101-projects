// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    var daysAway = Math.round((hours / 24) * 10) / 10;
    // let daysAway: number = Math.round((((kilometersAway * milesPerKilometer) / speedMph) / 24) *10)/10;
    return daysAway;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log("It takes " + getDaysToLocation(kilometersToMars) + " days for " + spacecraftName + " to get Mars.");
console.log("It takes " + spacecraftName + " " + getDaysToLocation(kilometersToTheMoon) + " days to get to the moon.");
