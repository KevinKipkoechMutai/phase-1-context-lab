/* Your Code Here */
//creating employee record
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

//creating employee records
let createEmployeeRecords = (employeeRowData) => {
    return employeeRowData.map(row => {return createEmployeeRecord(row);});
};

//Time-in event
let createTimeInEvent = dateStamp => {
    let [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    });
    return this;
}

//Time-out event
let createTimeOutEvent = dateStamp => {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

//Hours worked on specific date
let hoursWorkedOnDate = specificDate => {
    let timeInEvent = this.timeInEvents.find(e => {return e.date === specificDate});
    let timeOutEvent = this.timeOutEvents.find(e => {return e.date === specificDate});
    return (timeOutEvent.hour - timeInEvent.hour)/100;
}

//wages earned on date
let wagesEarnedOnDate = specDate => {
    let newWage = hoursWorkedOnDate.call(this, specDate)
    *this.payPerHour
    return parseFloat(newWage.toString())
}

//total wages
/*let allWageFor = () => {
    let eligibleDates = this.timeInEvents.map(e => {return e.date});
    let payable = eligibleDates.reduce(function(memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }
    .bind(this), 0    
    );
    return payable;
}*/

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 

    return payable
}


//Finding specific employee
let findEmployeeByFirstName = (xArray, firstName) => {
    return xArray.find(rec => {return rec.firstName === firstName});
}

//Payroll
let calculatePayroll = (employeeRecordsArray) => {
    return employeeRecordsArray.reduce((memo, rec) => {return memo + allWagesFor.call(rec)});
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


