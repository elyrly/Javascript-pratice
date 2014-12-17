// function findSequence(goal){
//   function find(start, history) {
//     if (start == goal)
//       return history;
//     else if (start > goal)
//       return null;
//     else
//       return find(start + 5, "(" + history + " + 5)") ||
//       return find(start + 3, "(" + history + " + 3)");
//   }
//   return find(1, "1");
// }

// findSequence(24);

// function between(string, start, end) {
//   var startAt = string.indexOf(start);
//   if (startAt == -1)
//     return undefined;
//   startAt += start.length;
//  var endAt = string.indexOf(end, startAt);
//   if (endAt == -1)
//     return undefined;

//   return string.slice(startAt, endAt);
//   body...
// }


function lastElement(array) {
  if (array.length > 0 )
    return array.length -1;
  else
    return undefined;
  // body...
}

console.log(lastElement("firsttime"));