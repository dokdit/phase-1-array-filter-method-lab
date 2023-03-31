const findMatching = (drivers,searchString)=> drivers.filter(driver => driver.toLowerCase() === searchString.toLowerCase())
const fuzzyMatch = (drivers, searchString) =>drivers.filter(driver => driver.startsWith(searchString))
const matchName = (drivers, searchString) =>  drivers.filter(driver => driver.name === searchString)