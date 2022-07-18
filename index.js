// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => (driver.toLowerCase() == name.toLowerCase()));
}

function fuzzyMatch(drivers, substr) {
    return drivers.filter(driver => driver.substr(0, substr.length) == substr);
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name == name);
}