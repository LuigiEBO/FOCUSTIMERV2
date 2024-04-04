import * as el from "./elements.js"
import * as actions from "./actions.js"
export function registerControls() {
  el.controls.addEventListener("click", (event) => {
  const action = event.target.dataset.action
  if (typeof actions[action] != "function") {
    return
  }

  actions[action]()
  })
}
