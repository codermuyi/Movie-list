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
const circleBar = document.querySelector(".side-section")
const bodyOverlay = document.querySelector("body > .overlay")

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
    try {
      floatBtn.animate([{left: x, top: y}, {left: 0, top: 0}], {duration: 300, easing: "ease-in-out"})
    } catch(error) {
      console.log(error.message)
    }
    floatBtn.style.left = "0"
    floatBtn.style.top = "0"
  }
})

let isOpen = false
 const circleBarControl = e => {
  if (!isOpen) {
    floatBtn.classList.add("fill-dot")
    circleBar.classList.add("slide")
    bodyOverlay.style.display = "block"
    isOpen = true
  } else {
    floatBtn.classList.remove("fill-dot")
    circleBar.classList.remove("slide")
    bodyOverlay.style.display = "none"
    isOpen = false
  }
}

floatBtn.addEventListener("click", circleBarControl)
bodyOverlay.addEventListener("click", circleBarControl)

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
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Boys_(2019_TV_series)&ved=2ahUKEwjmwqvWt83zAhVD4eAKHeIICeIQFnoFCJEBEAE&usg=AOvVaw2Iw5vWcailwSjJc2lymBWT"
  },
  {
    name: "The flash",
    seasons: "7",
    status: "active",
    imgLink: "https://www.google.com/url?q=https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_FMjpg_UX1000_.jpg&sa=U&ved=0ahUKEwiskJST-8nzAhVCsKQKHauqDSkQ5hMIBQ&usg=AOvVaw0eIkYhqqahoBw3rFjHV2nq",
    wikiLink: "https://www.google.com/url?q=https://en.m.wikipedia.org/wiki/The_Flash_(2014_TV_series)&sa=U&ved=2ahUKEwjDwIKV-snzAhVD4eAKHb3FCOoQFnoECAoQAg&usg=AOvVaw12V1kfBC5Xr5j3ueauctIT"
  },
  {
    name: "Shadow and bone",
    seasons: "1",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn00KBSXbRWMhmTqgZb3V8KUHyk8HqGM3iXg&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Shadow_and_Bone_(TV_series)&ved=2ahUKEwiZr5Ljtc3zAhWvB2MBHQaZD4UQFnoECFkQAQ&usg=AOvVaw37579pFi7FsfJV-5p7QKFO"
  },
  {
    name: "the witcher",
    seasons: "1",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4rei1iMNOB3-COzBocSSuVDTlZP26Oo9JA&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Witcher_(TV_series)&ved=2ahUKEwiVt_PKts3zAhUC6OAKHb5qDCwQFnoECFMQAQ&usg=AOvVaw0_JgZY_IRdE0JZZDJd0VuM"
  },
  {
    name: "the equalizer",
    seasons: "2",
    status: "airing",
    imgLink: "https://m.media-amazon.com/images/M/MV5BYmY3MTgwYWUtMTc2NC00ZDdmLWIyNDAtOGJkNTQyZjM0NDA5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Equalizer_(2021_TV_series)&ved=2ahUKEwifppKUt83zAhWMsBQKHXfVDd4QFnoECDgQAQ&usg=AOvVaw0wYeWu7TBYWLp3aaNiFtZv"
  },
  {
    name: "chucky",
    seasons: "1",
    status: "airing",
    imgLink: "https://www.dreadcentral.com/wp-content/uploads/2021/09/Chucky-TV-series-poster-750x938.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Chucky_(TV_series)&ved=2ahUKEwjH2vv3tM3zAhWK2hQKHbsnCUMQFnoECG4QAQ&usg=AOvVaw29HhsnTKNBMxR8nwgeMyw1"
  },
  {
    name: "young sheldon",
    seasons: "5",
    status: "airing",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OpPJKb9npvsHvF8iWPSZs3AL2QOU6hJV_A&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Young_Sheldon&ved=2ahUKEwiEl-TxtM3zAhVC0uAKHWa7BoEQFnoECHQQAQ&usg=AOvVaw2H-d9at71TA1vCOeNyrUK0&cshid=1634335315403"
  },
  {
    name: "the mandalorian",
    seasons: "2",
    status: "active",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwP4CfCKPjfkjfEz3VsG-0rmBdND389E7NhhsMGVAcryxlSeNne7EDPc&s=10",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/The_Mandalorian&ved=2ahUKEwj7ysOPtM3zAhWLA2MBHWOeDFMQFnoECDEQAQ&usg=AOvVaw0mRW4s2BczkVJHCIouB9Em"
  },
  {
    name: "one of us is lying",
    seasons: "1",
    status: "airing",
    imgLink: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1632078539l/58679358.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/One_of_Us_Is_Lying_(TV_series)&ved=2ahUKEwiE3-Shs83zAhVFcBQKHda-AlUQFnoECEIQAQ&usg=AOvVaw0Rb0gN1wKo_x_6pFIZ1Em-"
  },
  {
    name: "squid game",
    seasons: "1",
    status: "TBA",
    imgLink: "https://i.pinimg.com/736x/c5/1b/ef/c51bef377278466e6419a8e91d136dfb.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Squid_Game&ved=2ahUKEwj29YfAss3zAhVs7OAKHfjkD48QFnoECDIQAQ&usg=AOvVaw06tnqIsmH3ow2NmQ48i9zo&cshid=1634334877542"
  },
  {
    name: "mare of easttown",
    seasons: "1",
    status: "finished",
    imgLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpceOhkOM43O1-czOGBiyaz76nEO3uPh325sQUSmAxKwvQeQ_2",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Mare_of_Easttown&ved=2ahUKEwjM0drbsc3zAhWNkxQKHbX7AUUQFnoECD0QAQ&usg=AOvVaw0Iv1h53p6Q3-nN7Q5ABrsU"
  },
  {
    name: "see",
    seasons: "2",
    status: "airing",
    imgLink: "https://static.netnaija.com/i/qEQN25YXa6W.jpg",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/See_(TV_series)&ved=2ahUKEwjX5fepqs3zAhUT8eAKHW6TCr0QFnoECDoQAQ&usg=AOvVaw0Ho7s201d5S0w28x6N8Vy3"
  },
  {
    name: "Stargirl",
    seasons: "2",
    status: "airing",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3xp4e9LMjZU8NbaANBeWiik7GKQW5qGEB1Fb_IVA8XBFShZSby3chLCE&s=10",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Stargirl_(TV_series)&ved=2ahUKEwjIweqwuM3zAhUMnxQKHUcvARQQFnoECDgQAQ&usg=AOvVaw18RIIxO7TwG8UdJLLEaz5Y&cshid=1634336157384"
  },
  {
    name: "titans",
    seasons: "3",
    status: "airing",
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8O13-lXVw5S15BCPA8mC1H77kBFwxK7vXg&usqp=CAU",
    wikiLink: "https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/Titans_(2018_TV_series)&ved=2ahUKEwjzgtLruM3zAhUQnBQKHdrbBsgQFnoECG8QAQ&usg=AOvVaw23eWjSBSzPfNquDahQEJ_B"
  },
]

createMovieCards(tvShows)
document.querySelector(".no-of-series").innerText = tvShows.length
