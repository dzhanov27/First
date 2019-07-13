var Elevator = {
  floor: 1,
  oneFloorUp: function(){
    if(this.floor < 16) this.floor++;
    else console.log("it's highest floor");
  },
  oneFloorDown: function(){
    if(this.floor > 1) this.floor--;
    else console.log("it's lowest floor");
  },
  printFloor: function(){console.log(`Elevator is on the floor ${this.floor}`)},
  toFloor: function(n){
    if(n>16 || n<1) console.log("There're only 16 floors");
    else{
      if(n>this.floor){
      while(this.floor<n){
        Elevator.oneFloorUp();
        this.printFloor();
      }
      }
      else{
        while(this.floor>n){
          Elevator.oneFloorDown();
          this.printFloor();
        }
      }
    }
  }
}

Elevator.toFloor(14);
Elevator.toFloor(8);