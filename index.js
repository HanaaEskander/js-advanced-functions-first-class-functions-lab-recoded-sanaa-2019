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
  for(let i = driver.length - 2; i <= driver.length - 1; i++){
    two.push(driver[i]);
  }
  return two;
}

let select = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
  return function(){
    return digit * digit;
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
