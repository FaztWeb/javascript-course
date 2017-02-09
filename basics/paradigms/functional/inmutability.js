var rooms = ['H1', 'H2', 'H3'];

// rooms[2] = 'H4';

var newRooms = rooms.map(function (room) {
  if (room === 'H3') { return 'H4'; }
  else { return room; };
});

console.log(rooms);
console.log(newRooms);
