// Your code here

function createEmployeeRecord(employee) {
    
    return {
        firstName: employee[0],
        familyName: employee[1], 
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
 
function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event) {
    let [date, hour] = event.split(" ")
    let eventObj = {
        typeof: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    employee.timeInEvents.push(eventObj)
    // employee.timeInEvents.push(eventObj)
    return employee
}

function createTimeOutEvent(event) {
    let [date, hour] = event.split(" ")
    let eventObj = {
        typeof: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }

    employee.timeOutEvents.push(eventObj)
    return employee
}