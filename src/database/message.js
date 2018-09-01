class Message {
  constructor (db) {
    this.db = db
  }

  findByRoomId (roomId, limit) {
    const options = {}

    if (limit) {
      options.limit = limit
    }

    return this.db.collection('messages').find({ roomId }, options).toArray()
  }

  /**
   * Add message
   * @param {string} from author's username
   * @param {string} text message text
   * @param {number} datetime time of send
   * @param {ObjectID} roomId room's id
   * @return {Promise}
   */
  addOne (from, text, datetime, roomId) {
    return this.db.collection('messages').insertOne({
      from,
      text,
      datetime,
      roomId
    })
  }
}

module.exports = Message