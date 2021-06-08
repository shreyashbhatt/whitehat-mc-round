const { v4: uuid } = require('uuid');

class Customer {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.uid = uuid();
    }

    getEmail() {
        return this.email;
    }

    getUserName() {
        return this.username;
    }
}

module.exports = Customer;


// uid vin startTime endTime 