// =============================================
//  CENTRIX CONSTRUCTION PRIVATE LIMITED
//  script.js — Professional Version
// =============================================

// === CERT MODAL ===
function openModal(img) {
  document.getElementById("certModal").style.display = "flex";
  document.getElementById("certModalImg").src = img.src;
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

// Close modal on Escape key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
    closeImage();
  }
});

// === SCROLL ANIMATION (section-card fade-in) ===
window.addEventListener("scroll", function () {
  let cards = document.querySelectorAll(".section-card");
  cards.forEach(function (card) {
    let position = card.getBoundingClientRect().top;
    let screen = window.innerHeight;
    if (position < screen - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// === NAVBAR HIDE ON SCROLL DOWN / SHOW ON SCROLL UP ===
let prevScroll = window.pageYOffset;

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  if (prevScroll > currentScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  prevScroll = currentScroll;
});

// === FLOATING BANNER AUTO-ROTATE ===
const messages = [
  "✔ Trusted Construction Company in Delhi NCR",
  "✔ Government Tender Specialist",
  "✔ Quality Work with Guarantee",
  "✔ On-Time Project Delivery",
  "✔ Professional & Certified Team"
];

let msgIndex = 0;
const banner = document.getElementById("floatingBanner");

if (banner) {
  setInterval(function () {
    msgIndex = (msgIndex + 1) % messages.length;
    banner.style.opacity = "0";
    setTimeout(function () {
      banner.innerText = messages[msgIndex];
      banner.style.opacity = "1";
    }, 300);
  }, 3000);
}

// === IMAGE POPUP (legacy compatibility) ===
function openImage(src) {
  const popup = document.getElementById("imagePopup");
  const img   = document.getElementById("popupImg");
  if (popup && img) {
    img.src = src;
    popup.style.display = "flex";
  }
}

function closeImage() {
  const popup = document.getElementById("imagePopup");
  if (popup) popup.style.display = "none";
}
