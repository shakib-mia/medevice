import Lenis from "lenis";

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

AOS.init({
  once: true,
});

// scrollDirection.js

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    if (scrollDirection === "up") {
      // console.log(scrollDirection);
      document.getElementById("navbar").style.top = "1.875rem";
      document.getElementById("navbar").style.transition = "all 0.5s ease";
    } else {
      document.getElementById("navbar").style.top = "-4rem";
      document.getElementById("navbar").style.transition = "all 0.5s ease";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();

const date = new Date();

document.getElementById("year").innerText = date.getFullYear();

var player;

// This function gets called by the YouTube IFrame API when it's ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player("#player", {
    events: {
      onReady: onPlayerReady,
    },
  });
}
function onPlayerReady(event) {
  console.log("Player is ready");
}

function pauseVideo() {
  if (player && player.pauseVideo) {
    player.pauseVideo();
  } else {
    console.error("Player not initialized or pauseVideo method not available");
  }
}

document.querySelector("#video-check").addEventListener("change", (e) => {
  if (e.target.checked) {
    pauseVideo();
  }
});
