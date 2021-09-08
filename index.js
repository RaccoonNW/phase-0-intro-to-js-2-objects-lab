const employee = {
    name: "Gabriel",
    streetAddress: "5428 49th Ave SW",
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function  deleteFromEmployeeByKey (employee, key) {
    let deletedEmployee = {...employee};
    delete deletedEmployee.name;
    return deletedEmployee;
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}