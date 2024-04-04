import state from "./state.js"
import * as timer from "./timer.js"
import * as el from './elements.js'
export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countDown()
}
export function reset () {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}
export function minus() {
  let newNumber = Number(el.minutes.textContent) - 1
  if (Number(el.minutes.textContent) <= 0 ) {
    return
  } else {
    el.minutes.textContent = newNumber
  }
}
export function plus() {
  let newNumber = Number(el.minutes.textContent) + 1
  
  if (Number(el.minutes.textContent) < 60) {
    el.minutes.textContent = newNumber
  } else {
    return
  }
}