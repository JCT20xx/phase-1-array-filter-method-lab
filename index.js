function findMatching(array, name){
    return array.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(array, name){
    return array.filter(driver => driver.startsWith(name))
}

function matchName(array,name){
    return array.filter(driver => driver.name === name)
}