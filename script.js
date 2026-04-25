// CERT MODAL
function openModal(img) {
    document.getElementById("certModal").style.display = "flex";
    document.getElementById("certModalImg").src = img.src;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}

// SCROLL ANIMATION (SMOOTH)
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

// FLOATING AUTO TEXT CHANGE
const messages = [
  "✔ Trusted Construction Company in Delhi NCR",
  "✔ 100+ Projects Completed",
  "✔ Government Tender Specialist",
  "✔ Quality Work with Guarantee",
  "✔ On-Time Project Delivery"
];

let i = 0;

setInterval(() => {
  i = (i + 1) % messages.length;
  document.getElementById("floatingBanner").innerText = messages[i];
}, 3000);

// OLD POPUP (kept for compatibility)
function openImage(src) {
  document.getElementById("imagePopup").style.display = "flex";
  document.getElementById("popupImg").src = src;
}

function closeImage() {
  document.getElementById("imagePopup").style.display = "none";
}
