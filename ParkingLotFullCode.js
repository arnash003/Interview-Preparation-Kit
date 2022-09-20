'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

class ParkingLot {
    // Add the methods here
    // constructor slots array
    // method park(carID)
    // getSlots()
    // remove(carID)
    // if Park carID return value === true print Parking Started <carId>
    // if remove carId return value === true print <carId> removed
    // maximum method calls is 15
    // we have to iterate over this structure so that we can access its elements.
    parkingSlots = [];
    constructor(slots) {
        // for loop
        for (let i = 0; i < slots; i++) {
            // push method
            this.parkingSlots.push({
                occupied: false,
                slot: i,
                carId: null
            })
        }
        console.log(this.parkingSlots.length);
        // [1,2,3 ..., slots]   
    }
    park(carId) {
        // this.parkingSlots = [""];
        let parked = false;
        for (var i = 0; i < this.parkingSlots.length; i++) {
            if (!this.parkingSlots[i].occupied) {
                // retrurns true 
                this.parkingSlots[i].occupied = true;
                this.parkingSlots[i].carId = carId;
                parked = true;
                // breaks the loop iteration. 
                break;
                // console.log(parked);
            }
        }
        return parked;
    }
    getSlots() {
        //  For an occupied slot it prints parked at slot, for an unoccupied slot it prints the slot number is empty/null
        return this.parkingSlots.map(i => {
            if (i.carId) {
                return i.carId;
            }
            return null;
        })
    }
    remove(carId) {
        let freeParking = false;
        for (var i = 0; i < this.parkingSlots.length; i++) {
            if (this.parkingSlots[i].occupied && this.parkingSlots[i].carId === carId) {
                this.parkingSlots[i].occupied = false;
                this.parkingSlots[i].carId = null;
                freeParking = true;
            }
        }
        return freeParking;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const numberOfSlots = parseInt(readLine().trim());
    const parkingLotObj = new ParkingLot(numberOfSlots);
    ws.write(`Parking Lot created with number of slots as ${numberOfSlots}\n`);
    
    let numberOfOperations = parseInt(readLine().trim());
    while (numberOfOperations-- > 0) {
        const inputs = readLine().trim().split(' ');
        const operation = inputs[0];
        const carId = inputs[1];

        switch(operation) {
            case 'Park':
                if (parkingLotObj.park(carId)) {
                    ws.write(`Parking Started: ${carId}\n`);
                } else {
                    ws.write(`Parking Full: ${carId}\n`);
                }
                break;
            case 'Remove':
                if (parkingLotObj.remove(carId)) {
                    ws.write(`Car id ${carId} removed from parking\n`);
                } else {
                    ws.write(`Car: ${carId} not found\n`);
                }
                break;
            case 'GetSlots':
                const status = parkingLotObj.getSlots();
                status.forEach((obj, i) => {
                    if (obj) {
                        ws.write(`Parked at slot ${i + 1}: ${obj}\n`);
                    } else {
                        ws.write(`Slot ${i + 1} is empty\n`);
                    }
                })
                break;
            default:
                break;
        }
    }
    ws.end();
}