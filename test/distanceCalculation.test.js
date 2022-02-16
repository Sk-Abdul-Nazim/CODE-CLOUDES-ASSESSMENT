const lib = require('../util/distanceCalculation')

const deafaultCityLat = 22.568746;
const deafaultCityLong = 88.3463;

test('test whether distance between to latitute longitute which is > 100 km ', () => {
    const userCityLat = 18.95238;
    const userCityLong = 72.832711;
    const distance = lib.getDistanceFromLatLonInKm(deafaultCityLat,deafaultCityLong,userCityLat,userCityLong);
    expect(distance).toBeGreaterThan(100);
});

test('test whether distance between to latitute longitute which is < 100 km ', () => {
    const userCityLat = 22.588222;
    const userCityLong = 88.323139;
    const distance = lib.getDistanceFromLatLonInKm(deafaultCityLat,deafaultCityLong,userCityLat,userCityLong);
    expect(distance).toBeLessThan(100);
});