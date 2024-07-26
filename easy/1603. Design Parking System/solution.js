/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    ParkingSystem.big = big
    ParkingSystem.medium = medium
    ParkingSystem.small = small
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch(carType){
        case 1:
            if(ParkingSystem.big){
                ParkingSystem.big--;
                return true;
            }
            return false
        case 2:
            if(ParkingSystem.medium){
                ParkingSystem.medium--;
                return true;
            }
            return false
        case 3:
            if(ParkingSystem.small){
                ParkingSystem.small--;
                return true;
            }
            return false;
        default: 
            break;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */