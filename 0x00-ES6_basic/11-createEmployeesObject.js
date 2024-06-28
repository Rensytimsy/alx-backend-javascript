export default function createEmployeesObject(departmentName, employees) {
    //return an object
    return {
        [departmentName] : [...employees]
    }
}
