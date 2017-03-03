{
  applyEvents: function (elevators, floors) {
    elevators.map(function (elevator, index) {
      elevator.on("stopped_at_floor", function (floorNum) {
        console.log('Stopped', floorNum);
        console.log('getPressedFloors', elevator.getPressedFloors());
        var pressedFloors = elevator.getPressedFloors();
        var up = elevator.destinationDirection === 'up' &&
          if (typeof pressedFloors[0] !== 'undefined' && destinationDirection) elevator.goToFloor(elevator.getPressedFloors()[0]);
          else elevator.goToFloor(0)
      })

      elevator.on("passing_floor", function (floorNum, direction) {
        console.log('passing', floorNum, direction)
        console.log('getPressedFloors', elevator.getPressedFloors());
        // elevator.goToFloor(floorNum)
      });

      elevator.on("floor_button_pressed", function (floorNum) {
        console.log('floor_pressed', floorNum);
        console.log('floor_press_quicked', elevator.destinationQueue)
        console.log('getPressedFloors', elevator.getPressedFloors());
        var nextFloor = elevator.destinationQueue.sort((a, b) => a - b)[0]
        elevator.goToFloor(nextFloor)
      })

      elevator.on("idle", function () {
        console.log('idle');
        console.log('getPressedFloors', elevator.getPressedFloors());
        var floorsPressed = elevator.getPressedFloors();
        // elevator.goToFloor(floorsPressed[0]);
      });

    })
  },
  init: function (elevators, floors) {
    this.applyEvents(elevators, floors)
  },
  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}
