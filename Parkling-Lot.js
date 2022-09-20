class ParkingLot {
    // Add the methods here
    // constructor slots array
    // method park(carID)
    // getSlots()
    // remove(carID)
    // if Park carID return value === true print Parking Started <carId>
    // if remove carId return value === true print <carId> removed
    // maximum method calls is 15
    // Empty array
    parkingSlots = [];
    constructor(slots) {
        // for loop
        for (let i = 0; i < slots; i++) {
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
                this.parkingSlots[i].occupied = true;
                this.parkingSlots[i].carId = carId;
                parked = true;
                break;
                // console.log(parked);
            }
        }
        return parked;
    }
    getSlots() {
        //  For an occupied slot it prints parked at slot, for an unoccupied slot it prints the slot number is empty
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