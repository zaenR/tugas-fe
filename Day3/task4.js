let bdays = ['10-17','05-19','20-19'];
const newBdays = bdays.toString().replace(/-/g ,"/").split(",");

console.log(newBdays);

