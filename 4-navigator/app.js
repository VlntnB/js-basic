const addressLat = 120;
const addressLong = 83;
const positionLat = 28;
const positionLong = 56;
const distanceLat = addressLat - positionLat;
const distanceLong = addressLong - positionLong;
const distance = Math.sqrt((distanceLat**2)+(distanceLong**2));
console.log(distance);