const Vehicle = require('./models/Vehicle');
const Customer = require('./models/Customer');
const VehicleType = require('./models/VehicleType');
const db = require('./db');

function main() {
    const suvCar = new Vehicle("2020", "maruti", 10, 1, true, VehicleType.SUV);
    const bike = new Vehicle("2020", "maruti", 2, 2, true, VehicleType.BIKE);
    const sedan = new Vehicle("2020", "maruti", 2, 3, true, VehicleType.SEDAN);
    const users = new Customer('Shreyash', 'email.gmail@gmail.com');

    db.getInstance().push(suvCar, bike);

    suvCar.book(users);
    suvCar.return();

    console.log(`Rented out vehicles : %j`, db.getInstance().filter(vehicle => !vehicle.getCurrentAvailability()));
    console.log(`Available vehicles : %j`, db.getInstance().filter(vehicle => vehicle.getCurrentAvailability()));
}

main();