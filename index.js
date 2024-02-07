// Have you defined arrays for possible names and occupations?
// Have you defined an initial array of freelancers?
const freelancers = [
  { name: "Alice", price: 30, occupation: "writer"},
  { name: "Bob", price: 50, occupation: "teacher"},
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let count = 2
// **Do you know how you want the freelancers' information to be displayed on the page?
// Have you written and called a function to render the initial freelancer data?
function render(){
  const root = document.getElementById("root")
  root.innerHTML=""
  const employee = document.createElement("div")
 for(let i=0; i<count; i++){
  const freelancerElement = document.createElement('li')
  freelancerElement.textContent = `${freelancers[i].name} - ${freelancers[i].occupation} - ${freelancers[i].price}`
  employee.append(freelancerElement)
 }
  root.append(employee)
  count++
}

setInterval(render, 1000)

render()

function renderAverage () {
  const averageDiv = document.getElementById("averagePrice")
  const result = freelancers.reduce((total, freelancers) => total+freelancers.price, 0)/freelancers.length
  averageDiv.textContent = `$${result}`
  }

renderAverage()

// Have you written a function to generate a new random freelancer?
// Is this function being called in an interval?
// Have you written a function to calculate the average starting price of your freelancers' array?
// When should this function be called to update the displayed message?

//create list of available freelancers with name, occupation, and starting price
//view Alice & Bob on list
//Message "The average starting price is $40."
//seconds later another freelancer updates
//updates with new freelancer every few seconds