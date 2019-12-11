import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

// let cargoItems = [];
// let astronauts = [];

// export class Rocket implements Payload {
export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []; // array of Cargo objects
    astronauts: Astronaut[] = [];  // array of Astronaut objects
    massKg: number;
 
    constructor(name: string, totalCapacityKg: number) {
       this.name = name;
       this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sumOfItemsMass: number = 0;
        for (let i=0 ; i<items.length; i++){
          sumOfItemsMass += items[i].massKg;/* whatever it is we are adding up sum of all items */;
        //   sumOfItemsMass += Payload[i].massKg;
        }
        return sumOfItemsMass;
    }

    currentMassKg(): number {
        let sum: number = (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
        return sum;
    }

    canAdd(item: Payload): boolean {
        if((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
        return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {return false;}
    }

    addAstronaut (astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut)
            return true;
        } else {
            return false;
        }
    }
}