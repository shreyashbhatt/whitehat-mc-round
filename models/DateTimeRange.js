const moment = require('moment');

class DateTimeRange {
    constructor(startDateTIme, duration) {
        if(!moment(startDateTIme).isValid() || !moment(endDateTIme).isValid()) {
            throw new Error(`Invalid start or end date`);
        }
        this.startDateTIme = moment(startDateTIme);

        this.endDateTime = moment(startDateTIme).add(duration, 'minutes');
    } 

    getStartDateTime() {
        return this.startDateTIme;
    }

    getEndDateTime() {
        return this.endDateTime;
    }

    intersectWith(dateTimeRange) {
        return dateTimeRange.getStartDateTime().isBefore(this.startDateTIme) 
                && dateTimeRange.getEndDateTime().isAfter(this.endDateTime);
    }
}

module.exports = DateTimeRange;