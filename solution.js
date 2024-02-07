// data needed:
// an array of freelancer objects to start with
const freelancers = [
  {name: 'Alice', occupation: 'Writer', price: 30},
  {name: 'Bob', occupation: 'Teacher', price: 50},
  {name: 'Carol', occupation: 'Programmer', price: 70}
]
// arrays of names and occupations to generate new random freelancers
const names = ['Daisy', 'Eva', 'Frank', 'Grace', 'Helen', 'Ivan', 'Jack', 'Katherine'];

const occupations = ['Dentist', 'Engineer', 'Financial Analyst', 'Graphic Designer', 'Human Resources Manager', 'IT Specialist', 'Journalist', 'Kindergarten Teacher', 'Landscape Architect', 'Marketing Coordinator', 'Nurse', 'Operations Manager']

// function to render all the freelancers
function renderFreelancers(){
  // select the freelancers list by id
  const freelancersList = document.getElementById("freelancersList")
  // create the new list to be displayed in the browser
  const unorderedList = document.createElement('ul')
  freelancers.forEach(freelancer => {
    const listItem = document.createElement('li')
    listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - ${freelancer.price}`
    unorderedList.append(listItem)
  })
  // replace the existing contents of the freelancers list with our new list
  freelancersList.replaceChildren(unorderedList)
}

function renderAverage() {
  const averageDiv = document.getElementById("averagePrice")
  const average = freelancers.reduce((total, current) => total+current.price, 0)/freelancers.length
  averageDiv.textContent = `$${average.toFixed(2)}`
}

function newFreelancers(){
  const randomNameIndex = Math.floor(Math.random()*names.length)
  const randomOccupationIndex = Math.floor(Math.random()*occupations.length)
  const randomPrice = Math.floor(Math.random()*70)+30
  freelancers.push({
    name: names [randomNameIndex],
    occupation: occupations [randomOccupationIndex],
    price: randomPrice
  })

  renderFreelancers()
  renderAverage()

}

renderFreelancers()
renderAverage()
setInterval(newFreelancers, 3000)


// function to calculate and render the average
// renderAverage should:
// select the averagePrice div
// calculate the average
// update the averagePrice div to display the new calculated average

// function to add a new freelancer to the list (should also call the renderFreelancers and renderAverage functions)
// addNewFreelancer should:
// select a name and occupation at random from the lists at the top
// generate a random hourly rate (between 30 and 100)
// push a new object to the freelancers array representing the name, occupation, and rate for the new freelancer
// call the renderFreelancers and renderAverage functions

// call renderFreelancers - initial render
// generate new random freelancers at a pre-set interval