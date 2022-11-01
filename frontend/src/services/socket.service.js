import io from 'socket.io-client'

export const SOCKET_EMIT_USER_WATCH = 'user-watch';
export const SOCKET_EVENT_USER_UPDATED = 'user-updated';
export const SOCKET_EVENT_REVIEW_ADDED = 'review-added';
export const SOCKET_EVENT_REVIEW_ABOUT_YOU = 'review-about-you';
export const SOCKET_EVENT_ON_BOARD_SAVED = 'on-board-saved';
export const SOCKET_EVENT_START_BOARD = 'start-board';
export const SOCKET_EVENT_ON_RELOAD_BOARD = 'reload-board';


const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

window.socketService = socketService

var socketIsReady = false;

function createSocketService() {
  var socket = null;
  const socketService = {
    async setup() {
      if (socket) return
      socket = io(baseUrl)
      socketIsReady = true;
    },
    async on(eventName, cb) {
      if (!socket) await socketService.setup();
      socket.on(eventName, cb)
    },
    async off(eventName, cb = null) {
      if (!socket) await socketService.setup();
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    async emit(eventName, data) {

      if (!socket) await socketService.setup()
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
      socketIsReady = false
    }
  }
  return socketService
}

