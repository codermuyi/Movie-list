const c = console.log

const movies = [

]

const tvShows = [
  {
    name: "stranger things",
    seasons: "3",
    status: "active"
  },
  {
    name: "the boys",
    seasons: "2",
    status: "active"
  },
  {
    name: "squid game",
    seasons: "1",
    status: "TBA"
  },
  {
    name: "mare of easttown",
    seasons: "1",
    status: "miniseries"
  },
]

let series = document.querySelector(".series")
for (let tvShow of tvShows) {
  series.innerHTML += `

  `
}

const floatBtn = document.querySelector(".float-btn")

floatBtn.addEventListener("touchmove", e => {
  let touchPoints = e.targetTouches[0]

  floatBtn.style.left = `${touchPoints.pageX - floatBtn.clientWidth/2}px`
  floatBtn.style.top = `${touchPoints.pageY - floatBtn.clientHeight/2}px`

})

floatBtn.addEventListener("touchend", e => {
  let x = floatBtn.style.left
  let y = floatBtn.style.top
  if (parseInt(y) < (document.body.clientHeight - floatBtn.clientHeight) && parseInt(y) > 0) {
    floatBtn.animate([{left: x}, {left: 0}], {duration: 400, easing: "ease-out"})
    floatBtn.style.left = "0"
  } else {
    floatBtn.animate([{left: x, top: y}, {left: 0, top: 0}], {duration: 400, easing: "ease-out"})
    floatBtn.style.left = "0"
    floatBtn.style.top = "0"
  }
})