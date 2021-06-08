const { v4: uuid } = require('uuid');
const moment = require('moment');

class Vehicle{
    constructor(make, model, pricePerMinute, parkingStallNumber, isAvailable = true, type) {
        this.make = make;
        this.model = model;
        this.pricePerMinute = pricePerMinute;
        this.isAvailable = isAvailable;
        this.isRented = false;
        this.vin = uuid();
        this.bookedBy = null;
        this.parkingStallNumber = parkingStallNumber;
    }

    book(user, dateTimeRange) {
        this.isAvailable = false;
        this.bookedBy = user;
        this.timeRange = dateTimeRange;
        this.isRented = true;
    }

    return() {
        this.isAvailable = true;
        this.bookedBy = null;
        this.timeRange = null;
        this.isRented = false;
    } 

    calculateAmountToPay(dateTimeRange) {
        return moment(dateTimeRange.getStartDateTIme()).diff(dateTimeRange.getEndDateTime());
    }

    getCurrentAvailability() {
        return this.isAvailable;
    }

    getAvailabilityFor(dateTimeRange) {
        if(!this.timeRange) return true;
        return !this.timeRange.intersectWith(dateTimeRange);
    }

    locate() {
        if(this.isRetned) return this.bookedBy;
        return this.parkingStallNumber;
    }
}

module.exports = Vehicle;