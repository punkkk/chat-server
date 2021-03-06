/**
 * @enum {string}
 */
const RoomEvents = {
  CREATE: 'create room',
  CREATE_SUCCESS: 'create room success',
  CREATE_ERROR: 'create room error',
  ADD: 'add room',
  ADD_ERROR: 'add room error',
  REMOVE: 'remove room',
  REMOVE_ERROR: 'remove room error',
  SEND: 'rooms',
  NEW: 'new room',
  JOIN: 'join room',
  LEAVE: 'leave room',
  JOIN_SUCCESS: 'join room success',
  JOIN_ERROR: 'join room error',
  USER_JOINED: 'user joined',
  USER_LEAVE: 'user leave'
}

module.exports = Object.freeze(RoomEvents)
