// code your solution here
function saturdayFun(ToDo="roller-skate") {
    return `This Saturday, I want to ${ToDo}!`
  }
  
  let mondayWork = function(Todo="go to the office") {
    return `This Monday, I will ${Todo}.`
  }
  // code your solution here
function saturdayFun(ToDo="roller-skate") {
  return `This Saturday, I want to ${ToDo}!`
}

let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}