import state from './state.js'
import * as event from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds
  
  event.registerControls()
  timer.updateDisplay()
  
}