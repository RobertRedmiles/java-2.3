let grades = ["56","87","99","40"]
console.log (grades)
grades.push ("68")
console.log (grades)
grades[3] = "60";
console.log (grades)
let average = (56 + 87 + 99 + 60 + 68) / 5;
console.log (average)
const vehicle = {
    name: "mustang",
    brand: "ford",
    year: "2000",
    wheels: "four",
    EnvironmentFriendly: "no"
}
console.log (vehicle)
let key = "name";

for (let key in vehicle) {
    console.log(key);
}
for (let key in vehicle) {
    console.log(vehicle[key]);
}