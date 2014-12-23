// function Rabbit(adjective) {
//   this.adjective = adjective;
//   this.speak = function(line) {
//     console.log(" The ", this.adjective, " rabbit says ' ", line, "'");
//   };
// }

// var KillerRabiit = new Rabbit("killer");
// KillerRabiit.speak("ASDGASDF")

// function Dictionary(startValue) {
//   this.values = startValue || {};
// }
// Dictionary.prototype.store = function(name, value) {
//   this.values[name] = value;
// };
// Dictionary.prototype.lookup = function(name) {
//   return this.values[name];
// };
// Dictionary.prototype.contains = function(name) {
//   return Object.prototype.propertyIsEnumerable.call(this.values, name);
// };
// Dictionary.prototype.each = function(action) {
//   forEachIn(this.values, action);
// };

// var colors = new Dictionary({Richard: "blue",
//                                                    Eric: "yellow",
//                                                    Greg: "green"});

// console.log(colors.contains("Richard"));

// colors.store("red","silver");

// colors.each(function(name,color){
//   print(name, "is", color);
// });

// Dictionary function is meant to check if the value is included.

            // function Point(x,y) {
            //   this.x = x;
            //   this.y = y;
            // }
            // Point.prototype.add =function(other){
            //   return new Point( this.x + other.x, this.y + other.y);
            // };


