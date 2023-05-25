
// -------------- ARRAY CREATION --------------

const avgTemp = []

avgTemp[0] = 31.9 
avgTemp[1] = 35.9
avgTemp[2] = 29.5
avgTemp[3] = 28.5
avgTemp[4] = 27.4

console.log('🚀🔴  avgTemp:', avgTemp)

const daysOfWeek = [
  'Sunday', 
  'Monday', 
  'Tuesday', 
  'Wednsday', 
  'Thursday', 
  'Friday', 
  'Saturnday'
]

console.log('🚀🔴  daysOfWeek:', daysOfWeek)

// -------------- ACCESSING ARRAY DATA BY ITERATING --------------

for(let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i])
}

var fibbonachi = []
fibbonachi[0] = 0
fibbonachi[1] = 1
fibbonachi[2] = 1

for (let i = 3; i < 20; i++) {
  fibbonachi[i] = fibbonachi[i - 1] + fibbonachi[i - 2]
}

console.log('🚀🔴  fibbonachi:', fibbonachi)

// -------------- INSERT VALUES -------------- 

let numbers = [0,1,2,3,4,5,6,7,8,9]

numbers.push(10) 
numbers.unshift(-1)

console.log('add', numbers)

// -------------- REMOVE VALUES -------------- 

numbers.pop()
numbers.pop()

numbers.shift()
numbers.shift()

console.log('remove', numbers)

// -------------- INSERT/REMOVE VALUES IN SPECIFC POSITION --------------

const toRemoveArr = [0,1,2,3,4,5]
toRemoveArr.splice(3,3) // remove
console.log('🚀🔴  removed:', toRemoveArr)

toRemoveArr.splice(3,0, 3,4,5) // add again
console.log('🚀🔴  added again:', toRemoveArr)

// -------------- BIDIMENSIONAL ARRAY --------------

const allAvgTempWeek = []

const avgTempWeek1 = [28.5,27.8,29,25,30,27.4,23.6]
const avgTempWeek2 = [29.5,28.8,30,26,27.8,28.4,25]

allAvgTempWeek[0] = avgTempWeek1
allAvgTempWeek[1] = avgTempWeek2
console.log('🚀🔴  allAvgTempWeek:', allAvgTempWeek[0][2])
console.log('🚀🔴  allAvgTempWeek:', allAvgTempWeek[1][3])

for(let i = 0; i < allAvgTempWeek.length; i++) { //iterating bidimensional array
  for(var j = 0; j < allAvgTempWeek[i].length; j++) {
    console.log(allAvgTempWeek[i][j])
  }
}

// -------------- MULTIDIMENSIONAL ARRAY --------------

var months = []

var firstWeeks = []
var lastWeeks = []

var MavgTempWeek1 = [28.5,27.8,29,25,30,27.4,23.6]
var MavgTempWeek2 = [29.5,28.8,30,26,27.8,28.4,25]

var MavgTempWeek3 = [30,31.8,29,28,25,27.4,26]
var MavgTempWeek4 = [22,26,27,24,25,30,29]

firstWeeks = [MavgTempWeek1, MavgTempWeek2]
lastWeeks = [MavgTempWeek3, MavgTempWeek4]

months = [firstWeeks, lastWeeks]

console.log('🚀🔴  months:', months[0][1][5]) 


for (let x = 0; x < months.length; x++) {
  for (let y = 0; y < months[x].length; y++) {
    for (let z = 0; z < months[x][y].length; z++) {
      console.log('MONTH TEMPERATURES:', months[x][y][z])
    }
  }
}