// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return arr.slice(0, 2);
  }



const returnLastTwoDrivers = function(arr){
  return arr.slice(arr.length - 2)

}

const selectingDrivers =
  [returnFirstTwoDrivers,
  returnLastTwoDrivers]


function createFareMultiplier(int){
 return function multiply(fare){
   return int * fare
 }
}

function fareDoubler(fare){
  return fare * 2
}

function fareTripler(fare){
  return fare * 3
}

function fetchSpecifiedDrivers(arr, func){
return func(arr)
}
