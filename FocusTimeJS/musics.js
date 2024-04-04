import * as songs from "./sounds.js"
import * as el from "./elements.js"
import * as state from "./state.js"

el.tree.addEventListener("click", () => {
  songs.tree.play()
  songs.frontStore.pause()
  songs.rain.pause()
  songs.fire.pause()
})
el.cloudRain.addEventListener("click", () => {
  songs.tree.pause()
  songs.frontStore.pause()
  songs.rain.play()
  songs.fire.pause()
})
el.frontStore.addEventListener("click", () => {
  songs.tree.pause()
  songs.frontStore.play()
  songs.rain.pause()
  songs.fire.pause()
})
el.fire.addEventListener("click", () => {
  songs.tree.pause()
  songs.frontStore.pause()
  songs.rain.pause()
  songs.fire.play()
})
el.pause.addEventListener('click', () => {
  songs.tree.pause()
  songs.frontStore.pause()
  songs.rain.pause()
  songs.fire.pause()
  el.cloudRain.classList.remove("select")
  el.frontStore.classList.remove("select")
  el.fire.classList.remove("select")
  el.tree.classList.remove("select")
})
el.tree.addEventListener("click", () => {
  el.cloudRain.classList.remove("select")
  el.frontStore.classList.remove("select")
  el.fire.classList.remove("select")
  el.tree.classList.toggle("select")
})
el.cloudRain.addEventListener("click", () => {
  el.tree.classList.remove("select")
  el.frontStore.classList.remove("select")
  el.fire.classList.remove("select")
  el.cloudRain.classList.toggle("select")
})
el.frontStore.addEventListener("click", () => {
  el.cloudRain.classList.remove("select")
  el.tree.classList.remove("select")
  el.fire.classList.remove("select")
  el.frontStore.classList.toggle("select")
})
el.fire.addEventListener("click", () => {
  el.cloudRain.classList.remove("select")
  el.frontStore.classList.remove("select")
  el.tree.classList.remove("select")
  el.fire.classList.toggle("select")
})
