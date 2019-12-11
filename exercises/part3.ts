// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:

function getDaysToLocation (kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    let daysAway: number = Math.round((hours / 24)*10)/10;
    // let daysAway: number = Math.round((((kilometersAway * milesPerKilometer) / speedMph) / 24) *10)/10;
    
    return daysAway;
}

// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(`It takes ${getDaysToLocation(kilometersToMars)} days for ${spacecraftName} to get Mars.`);

console.log(`It takes ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} days to get to the moon.`);