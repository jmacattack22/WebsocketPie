# Echo Server

## Info

Echo Server is a client-agnostic web socket server, generally designed for turn-based multiplayer games.  It fascilitates lobbies/rooms for connecting players who are using a client of the same name and version.  Then messages are send from client to server, which echos the message to all other clients in the room.  In this way, the server doesn't care about the content of the game and can fascilitate any game (if latency allows).

## Files (abstract to specific)

- index.js
  - Starts the Echo server.
- Network.js
  - Handles socket specifics, parses JSON
- RoomManager.js
  - Holds rooms, handles adding clients to rooms, passes on data to room with metadata
- Room.js
  - A group of clients playing the same game

## API: from client to server

Data from one client, to be echoed to other client(s) in the same room

``` js
{
    type: 'data',
    payload: <client defined payload>
}
```

When a client tries to join a room

``` js
{
    type: 'joinRoom',
    name: string, // The name of the user who sent the message 
    roomProps: {
        name: string, // room name
        app: string, // app name
        version: string, // app version
    },

}
```

## API: from server to client

Client:  Info about all clients connected to a room.  Useful for displaying the state of the room lobby for example.

```js
{
    type:'client',
    clients: ['Neo', 'Trinity', 'Morpheus']
}
```

Data : Data send from the server that is an echo of data that the server recieved from another client.  This is up to the client to implement

```js
{
    type: 'data',
    fromClient: 'Trinity',
    time: 1567963601131, // millis since epoch
    payload: {
        // client defined
        // This is the magic of echo server that allows it to be client agnostic
    }
}
```

## Tasks

- Whisper messages
- Support for client uuids
- Client ordering for authority (if one user's client needs to make a decision)
- Investigate 2 users connecting for one page
- Implement Client leave room
- [Should support rejoining if player disconnect](https://github.com/websockets/ws#how-to-detect-and-close-broken-connections)
