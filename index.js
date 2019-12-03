// Code your solution in this file!
let returnFirstTwoDrivers = function(driver){
  let two= [];
  for (let i = 0; i <= 1; i++) {
    two.push(driver[i]);
  }
  return two;
}

let returnLastTwoDrivers = function(driver){
  let two = [];
  for(let i = drivers.length - 2; i <= drivers.length - 1; i++){
    lastTwo.push(drivers[i]);
  }
  return lastTwo;
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
  return function(){
    return num * num;
  }
}

let fareDoubler = function(fare){
  return fare * 2;
}

let fareTripler = function(fare){
  return fare * 3;
}

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers);
}
