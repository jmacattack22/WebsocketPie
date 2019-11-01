const MessageType = {
  // Both client and server:
  Data: 'Data',
  // Server to client:
  Rooms: 'Rooms',
  ClientPresenceChanged: 'ClientPresenceChanged',
  ServerAssignedData: 'ServerAssignedData',
  // Client to Server:
  MakeRoom: 'MakeRoom',
  JoinRoom: 'JoinRoom',
  LeaveRoom: 'LeaveRoom',
  GetRooms: 'GetRooms',
  // Unique to PieClient
  ConnectInfo: 'ConnectInfo',
};

module.exports = MessageType;
