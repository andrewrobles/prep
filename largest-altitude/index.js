const largestAltitude = gain => {
    let altitude = 0, maximum = 0
    gain.forEach(x => {
        altitude = altitude + x
        if (altitude > maximum) {
            maximum = altitude
        }
    })
    return maximum 
}
module.exports = largestAltitude 