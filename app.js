const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function City(
  location,
  mincust,
  maxcust,
  averagecookie,
  custperhour,
  cookiesperhour,
  totalcookies
) {
  this.location = location;
  this.minCust = mincust;
  this.maxCust = maxcust;
  this.avgCookiesPerCust = averagecookie;
  this.customersPerHour = custperhour;
  this.cookiesPerHour = cookiesperhour;
  this.totalCookiesSold = totalcookies;
}

const seattle = new City("Seattle", 23, 65, 6.3, [], []);
const tokyo = new City("Tokyo", 3, 24, 1.2, [], []);
const dubai = new City("Dubai", 11, 38, 3.7, [], []);
const paris = new City("Paris", 20, 38, 2.3, [], []);
const lima = new City("Lima", 2, 16, 4.6, [], []);

// take element tableofcookies
const tableDiv = document.getElementById("tableOfCookies");
// create table
const cookieTable = document.createElement("table");
tableDiv.appendChild(cookieTable);
//create header
const headerRow = document.createElement("tr");
cookieTable.appendChild(headerRow);
const emptyCell = document.createElement("td");
emptyCell.textContent = "";
headerRow.appendChild(emptyCell);
// put hours into header
for (i = 0; i < hours.length; i++);
{
  const headerTD = document.createElement("th");
  headerTD.textContent = hours[i];
  headerRow.appendChild(headerTD);
}

City.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const randNum = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(randNum);
    this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    this.totalCookieSold += this.cookiesPerHour[i];
  }
};

seattle.calculateSales();
tokyo.calculateSales();
dubai.calculateSales();
paris.calculateSales();
lima.calculateSales();

// get the element on the page with the id salesData
const salesData = document.getElementById("salesData");

// add the title for the location
const seattleH2 = document.createElement("h2");
seattleH2.textContent = seattle.location;
salesData.appendChild(seattleH2);

// create a list to show the cookies sold at each hour
const seattleUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  seattleUl.appendChild(li);
}

salesData.appendChild(seattleUl);

// add the title for the location
const tokyoH2 = document.createElement("h2");
tokyoH2.textContent = tokyo.location;
salesData.appendChild(tokyoH2);

// create a list to show the cookies sold at each hour
const tokyoUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
  tokyoUl.appendChild(li);
}

salesData.appendChild(tokyoUl);

// add the title for the location
const dubaiH2 = document.createElement("h2");
dubaiH2.textContent = dubai.location;
salesData.appendChild(dubaiH2);

// create a list to show the cookies sold at each hour
const dubaiUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]} cookies`;
  dubaiUl.appendChild(li);
}

salesData.appendChild(dubaiUl);

// add the title for the location
const parisH2 = document.createElement("h2");
parisH2.textContent = paris.location;
salesData.appendChild(parisH2);

// create a list to show the cookies sold at each hour
const parisUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${paris.cookiesPerHour[i]} cookies`;
  parisUl.appendChild(li);
}

salesData.appendChild(parisUl);

// add the title for the location
const limaH2 = document.createElement("h2");
limaH2.textContent = lima.location;
salesData.appendChild(limaH2);

// create a list to show the cookies sold at each hour
const limaUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${lima.cookiesPerHour[i]} cookies`;
  limaUl.appendChild(li);
}

salesData.appendChild(limaUl);
