function Grid(width, height) {
  this.width = width;
  this.height = height;
  this.cell = new Array(width * height);
}
Grid.prototype.valueAt = function(point){
  return this.cells[point.y * this.width + point.x];
};
Grid.prototype.setValueAt = function(point, value){
  this.cells[point.y * this.width + point.x] = value;
};
Grid.prototype.isInside = function(point){
  return point.x >= 0 && point.y >= 0 && point.x < this.width && point.y < this.height;
};
Grid.prototype.moveValue = function(from, to){
  this.setValueAt(to, this.valueAt(from));
  this.setValueAt(from, undefined);
};

Grid.prototype.each = function(action){
  for (var y = 0; y < this.height; y++) {
   for (var x = 0; x < this.width; x++) {
    var point = new Point(x,y);
    action(point, this.valueAt(point));
  }
}
};

//loops row by row

var wall = {};

function elementFromCharacter(character) {
  if (character ==  "")
    return undefined;
  else if (character == "#")
    return  wall;
  else (character == "o")
    return  new Stupidbug();
}

//checks for the other wall

function Terrarium(plan) {
  var grid = new Grid(plan[0].length , plan.length);
  for (var y = o; y < plan.length; y++){
    var line = plan[y];
    for (var x = o; x < line.length; x++){
      grid.setValueAt(new point(x,y), elementFromCharacter(line.charAt(x)));
    }
  }
this.grid = grid
};

