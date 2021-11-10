const root = document.documentElement;
console.log(window.innerWidth);
log = console.log

function createMovieCards(tvShows) {
  let series = document.querySelector(".series");
  
  for (let tvShow of tvShows) {
    series.innerHTML += `
      <div class="movie-card" data-id=${tvShow.id}>
        <img class="movie-image" src="${tvShow.imgLink}" alt="${tvShow.name}" />
        <div class="view-btn centre" onclick="displayInfo('${tvShow.id}')"><span>View</span></div>
        <div class="overlay"></div>
      </div>
    `;
  }
}
createMovieCards(tvShows)
document.querySelector(".no-of-series").innerText = tvShows.length
const floatBtn = document.querySelector(".float-btn"),
      backToTop = document.querySelector(".return-btn"),
      circleBar = document.querySelector(".side-section"),
      bodyOverlay = document.querySelector("body > .overlay"),
      footer = document.querySelector("footer"),
      mIContainer = document.querySelector(".movie-info-container");

function infoCard(id) {
  let content;
  for (let tvShow of tvShows) {
    if (id === tvShow.id) {
      content = `
        <div class="movie-info">
          <div class="col-1">
            <img class="full-movie-image" src="${tvShow.imgLink}" alt="${tvShow.name}" />
          </div>
          <div class="col-2">
            <div class="movie-title">
              ${tvShow.name}
            </div>
            <div class="details centre">
              <div>Seasons: ${tvShow.seasons}</div>
              <div>Status: ${tvShow.status}</div>
              <div class="more-info-btn"><a href="${tvShow.wikiLink}" >More Info</a></div>
            </div>
          </div>
        </div>
        <div class="overlay" onclick="hideInfo()"></div>
      `;
      log(tvShow.name)
    }
  }
  return content;
}

function displayInfo(id) {
  mIContainer.classList.add("open");
  mIContainer.style.display = "flex";
  mIContainer.innerHTML = infoCard(id);
  
  document.querySelector(".details").style.bottom = document.querySelector(".col-2").clientHeight + "px";
}

function hideInfo() {
  mIContainer.classList.remove("open");
  mIContainer.style.display = "none";
  mIContainer.innerHTML = "";
}

floatBtn.addEventListener("touchmove", e => {
  let touchPoints = e.targetTouches[0];

  floatBtn.style.left = `${touchPoints.pageX - floatBtn.clientWidth/2}px`;
  floatBtn.style.top = `${touchPoints.pageY - floatBtn.clientHeight/2}px`;
})

floatBtn.addEventListener("touchend", e => {
  let x = floatBtn.style.left;
  let y = floatBtn.style.top;
  if (parseInt(y) < (document.body.clientHeight - floatBtn.clientHeight) && parseInt(y) > 0) {
    floatBtn.animate([{left: x}, {left: 0}], {duration: 300, easing: "ease-out"})
    floatBtn.style.left = "0";
  } else {
    try {
      floatBtn.animate([{left: x, top: y}, {left: 0, top: 0}], {duration: 300, easing: "ease-in-out"});
    } catch(error) {
      console.log(error.message);
    }
    floatBtn.style.left = "0";
    floatBtn.style.top = "0";
  }
})

let isOpen = false
const circleBarControl = e => {
  if (!isOpen) {
    floatBtn.classList.add("fill-dot");
    circleBar.classList.add("slide");
    bodyOverlay.style.display = "block";
    isOpen = true;
  } else {
    floatBtn.classList.remove("fill-dot");
    circleBar.classList.remove("slide");
    bodyOverlay.style.display = "none";
    isOpen = false;
  }
}

floatBtn.addEventListener("click", circleBarControl);
bodyOverlay.addEventListener("click", circleBarControl);

backToTop.addEventListener("click", e => {
  document.body.scrollTop = 0;
})

document.body.addEventListener("scroll", e => {
  if (document.body.scrollTop > root.clientHeight) {
    backToTop.style.right = "1rem";
  } else {
    backToTop.style.right = "-3rem";
  }
  if (document.body.scrollTop + document.body.clientHeight - backToTop.offsetHeight > footer.offsetTop) {
    backToTop.style.color = "#046307";
  } else {
    backToTop.style.color = "black";
  }
})

// Animating Header Text
let textWrapper = document.querySelector('.header-text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.header-text .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.header-text .line',
    translateX: [0, document.querySelector('.header-text .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.header-text .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=755',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.header-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });