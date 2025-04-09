const tickets = [
  ["Paris", "Skopje"],
  ["Zurich", "Amsterdam"],
  ["Prague", "Zurich"],
  ["Barcelona", "Berlin"],
  ["Kiev", "Prague"],
  ["Skopje", "Paris"],
  ["Amsterdam", "Barcelona"],
  ["Berlin", "Kiev"],
  ["Berlin", "Amsterdam"]
];

const visitedCities = new Set(["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"]);

const graph = {};
for (let [from, to] of tickets) {
  if (!graph[from]) graph[from] = [];
  graph[from].push(to);
}

let route = ["Kiev"];
let current = "Kiev";

while (route.length < visitedCities.size) {
  let found = false;
  const nextCities = graph[current] || [];
  for (let city of nextCities) {
    if (visitedCities.has(city) && !route.includes(city)) {
      route.push(city);
      current = city;
      found = true;
      break;
    }
  }
  if (!found) break;
}

if (route.length === visitedCities.size) {
  console.log("Kid's Route:");
  console.log(route.join(" → "));
} else {
  console.log("Could not find a valid route through all cities.");
}
