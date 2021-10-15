const root = document.documentElement

const movies = [
  "", ""
]

function createMovieCards(tvShows) {
  let series = document.querySelector(".series")
  for (let tvShow of tvShows) {
    series.innerHTML += `
      <div class="movie-card">
        <img class="movie-image" src="${tvShow.imgLink}" alt="${tvShow.name}" />
        <div class="more-info">
          <p class="movie-title">${tvShow.name}</p>
          <p>Seasons: <span class="no">${tvShow.seasons}</span></p>
          <p class="status">Status: <span class="no">${tvShow.status}</span></p>
          <button>More Info</button>
        </div>
        <div class="overlay"></div>
      </div>
    `
  }
}

const floatBtn = document.querySelector(".float-btn")
const backToTop = document.querySelector(".return-btn")

floatBtn.addEventListener("touchmove", e => {
  let touchPoints = e.targetTouches[0]

  floatBtn.style.left = `${touchPoints.pageX - floatBtn.clientWidth/2}px`
  floatBtn.style.top = `${touchPoints.pageY - floatBtn.clientHeight/2}px`
})

floatBtn.addEventListener("touchend", e => {
  let x = floatBtn.style.left
  let y = floatBtn.style.top
  if (parseInt(y) < (document.body.clientHeight - floatBtn.clientHeight) && parseInt(y) > 0) {
    floatBtn.animate([{left: x}, {left: 0}], {duration: 300, easing: "ease-out"})
    floatBtn.style.left = "0"
  } else {
    floatBtn.animate([{left: x, top: y}, {left: 0, top: 0}], {duration: 300, easing: "ease-out"})
    floatBtn.style.left = "0"
    floatBtn.style.top = "0"
  }
})

let isOpen = false
floatBtn.addEventListener("click", e => {
  if (!isOpen) {
    floatBtn.classList.add("fill-dot")
    isOpen = true
  } else {
    floatBtn.classList.remove("fill-dot")
    isOpen = fal
  }
})

backToTop.addEventListener("click", e => {
  document.body.scrollTop = 0
})

document.body.addEventListener("scroll", e => {
  if (document.body.scrollTop > root.clientHeight*1.5) {
    backToTop.style.right = "1rem"
  } else {
    backToTop.style.right = "-3rem"
  }
})



const tvShows = [
  {
    name: "stranger things",
    seasons: "3",
    status: "active",
    imgLink: "http://t3.gstatic.com/images?q=tbn:ANd9GcQzBPeJBL1nrbE44py9eA0PFWzRQjQlW4NwjIBKuOMjVi4ou8UR",
    wikiLink: "https://www.google.com/url?q=https://en.m.wikipedia.org/wiki/Stranger_Things&sa=U&ved=2ahUKEwjv1uyhtsfzAhUU5uAKHeMCB00QFnoECAUQAg&usg=AOvVaw0Z_sw39TVLMn6e-BBfB6mC"
  },
  {
    name: "the boys",
    seasons: "2",
    status: "active",
    imgLink: "https://www.google.com/url?q=https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ%40._V1_FMjpg_UX1000_.jpg&sa=U&ved=0ahUKEwi-qpSc-cnzAhVNzaQKHcVADRoQ5hMIBQ&usg=AOvVaw1kTRVpuY7jm9u98jyxdKPQ",
    wikiLink: ""
  },
  {
    name: "The flash",
    seasons: "7",
    status: "active",
    imgLink: "https://www.google.com/url?q=https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_FMjpg_UX1000_.jpg&sa=U&ved=0ahUKEwiskJST-8nzAhVCsKQKHauqDSkQ5hMIBQ&usg=AOvVaw0eIkYhqqahoBw3rFjHV2nq",
    wikiLink: "https://www.google.com/url?q=https://en.m.wikipedia.org/wiki/The_Flash_(2014_TV_series)&sa=U&ved=2ahUKEwjDwIKV-snzAhVD4eAKHb3FCOoQFnoECAoQAg&usg=AOvVaw12V1kfBC5Xr5j3ueauctIT"
  },
  {
    name: "Shadow and bones",
    seasons: "1",
    status: "active",
    imgLink: "",
    wikiLink: ""
  },
  {
    name: "the witcher",
    seasons: "1",
    status: "active",
    imgLink: "",
    wikiLink: ""
  },
  {
    name: "the equaliser",
    seasons: "2",
    status: "airing",
    imgLink: "",
    wikiLink: ""
  },
  {
    name: "chucky",
    seasons: "1",
    status: "airing",
    imgLink: "",
    wikiLink: ""
  },
  {
    name: "young sheldon",
    seasons: "5",
    status: "airing",
    imgLink: "",
    wikiLink: ""
  },
  {
    name: "the mandalorian",
    seasons: "2",
    status: "active",
    imgLink: "",
    wikiLink: ""
  },
  {
    name: "one of us is lying",
    seasons: "1",
    status: "airing",
    imgLink: "",
    wikiLink: ""
  },
  {
    name: "squid game",
    seasons: "1",
    status: "TBA",
    imgLink: "",
    wikiLink: ""
  },
  {
    name: "mare of easttown",
    seasons: "1",
    status: "finished",
    imgLink: "",
    wikiLink: ""
  },
]

createMovieCards(tvShows)

