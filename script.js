// SCROLL ANIMATION
window.addEventListener("scroll", function() {
  let cards = document.querySelectorAll(".section-card");

  cards.forEach(card => {
    let position = card.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if (position < screen - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// NAVBAR HIDE/SHOW
let prevScroll = window.pageYOffset;

window.onscroll = function() {
  let currentScroll = window.pageYOffset;

  if (prevScroll > currentScroll) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }

  prevScroll = currentScroll;
};

// IMAGE POPUP
function openImage(src) {
  document.getElementById("imagePopup").style.display = "flex";
  document.getElementById("popupImg").src = src;
}

function closeImage() {
  document.getElementById("imagePopup").style.display = "none";
}
