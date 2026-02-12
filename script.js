"use strict";

console.log("SCRIPT.JS LOADED");

const allowedPages = ["arts", "works"];
const content = document.getElementById("content");
const links = document.querySelectorAll(".link");

/* HASH ROUTER */

function setActiveLink(page) {
  links.forEach(l => l.classList.remove("active"));
  const activeLink = document.querySelector(`.link.${page}`);
  if (activeLink) activeLink.classList.add("active");
}

function loadPage() {
  let page = location.hash.replace("#", "") || "arts";
  if (!allowedPages.includes(page)) page = "arts";

  setActiveLink(page);
  content.classList.add("fade-out");

  fetch(`pages/${page}.html`)
    .then(res => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
    })
    .then(html => {
      content.innerHTML = html;
      content.classList.remove("fade-out");

      if (page === "arts") initArtGallery();
    })
    .catch(err => {
      console.error(err);
      content.innerHTML = "<p>Page not found.</p>";
      content.classList.remove("fade-out");
    });
}

links.forEach(link => {
  link.addEventListener("click", () => {
    const page = link.classList.contains("arts") ? "arts" : "works";
    location.hash = page;
  });
});

/* CONTACT MODAL */

function initContactModal() {
  const modal = document.getElementById("contactModal");
  const trigger = document.getElementById("contactTrigger");

  if (!modal || !trigger) return;

  trigger.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
}

function closeContact() {
  const modal = document.getElementById("contactModal");
  if (modal) modal.style.display = "none";
}

/* ART GALLERY */

const artsData = [
  { image: "assets/art1.jpg", title: "Sanity", desc: "I was raised on a theory that was constantly drilled into me: “Being a good person will keep you away from life’s problems.” That sentence echoed in my mind for 25 years. And over the past five years, I’ve come to curse it." },
  { image: "assets/art2.jpg", title: "Closer to Life", desc: "I thought my first experience with a panic attack was nothing more than a single unlucky day I had gone through. But, I was wrong. That one day shattered what little remained of the beginning of a life that had only just started." },
  { image: "assets/art3.jpg", title: "Sta(i)rs", desc: "Have you ever imagined what it would be like if the door that leads you to eternity felt like a spinning warp, making you forget the life you once lived in this world?" },
  { image: "assets/art4.jpg", title: "Kerzenschein", desc: "An eclipse is like a candle: its light is faint, small, and fragile, yet over time it will pierce your eyes and burn your lids." },
  { image: "assets/art5.jpg", title: "Ein Gebrochener Mensch.", desc: "When a life once filled with joyful laughter, pleasure, and freedom from problems suddenly vanishes in a single day, it turns you into someone else—so much so that you even forget who you truly are." },
  { image: "assets/art6.jpg", title: "Oblivione", desc: "And that problem throws you far away from reality, isolating a self that was once surrounded by noise and life, now feeling unbearably silent. How long will you endure?" },
  { image: "assets/art7.jpg", title: "K_Night", desc: "All of the sudden, when you thought that life is all about your own problems, there comes a second wave of threatens. Not from yourself, but your closest people." },
  { image: "assets/art8.jpg", title: "Non-Senses", desc: "And now you're thinking. 'I don't wanna do this anymore.' But that exactly how life actually works." },
  { image: "assets/art9.jpg", title: "Hypocrites", desc: "People who speak up for their rights are silenced by a handful of humans who see themselves as gods. Two hundred eighty-seven million lives are shattered by the decisions of only a few thousand people. What if we finally stood together and refused to bow to them any longer?" },
  { image: "assets/art10.jpg", title: "Dethroned", desc: "And the people closest to you turn out to be part of those who flatter their superiors. They look proud of what they have gained. You watch them with cynicism and feel the injustice, yet you also realize that this is what real life truly is." },
  { image: "assets/art11.jpg", title: "mother's light", desc: "Mom keeps me alive even tho my mental health is getting worse. I just want you to know that I love you." },
  { image: "assets/art12.jpg", title: "alles hat seine zeit", desc: "The moment I realized, that everything has it's timeline. I feel more anxious yet relieved." }
];

let artIndex = 0;

function initArtGallery() {
  const img = document.getElementById("artImage");
  const title = document.getElementById("artTitle");
  const desc = document.getElementById("artDesc");
  const prev = document.getElementById("btnPrev");
  const next = document.getElementById("btnNext");

  if (!img || !prev || !next) return;

  function updateArt() {
    const art = artsData[artIndex];
    img.src = art.image;
    title.textContent = art.title;
    desc.textContent = art.desc;

    prev.disabled = artIndex === 0;
    next.disabled = artIndex === artsData.length - 1;
  }

  prev.addEventListener("click", () => {
    if (artIndex > 0) {
      artIndex--;
      updateArt();
    }
  });

  next.addEventListener("click", () => {
    if (artIndex < artsData.length - 1) {
      artIndex++;
      updateArt();
    }
  });

  updateArt();
}

/* OPENING TYPEWRITER */

function runOpening() {
  const opening = document.getElementById("opening");
  const textEl = document.getElementById("opening-text");

  if (!opening || !textEl) return;
  if (sessionStorage.getItem("opened")) {
    opening.style.display = "none";
    return;
  }

  const text = "Initializing Portfolio...";
  let i = 0;

  function type() {
    if (i < text.length) {
      textEl.textContent += text[i++];
      setTimeout(type, 60);
      return;
    }

    setTimeout(() => {
      opening.classList.add("fade-out");
      sessionStorage.setItem("opened", "true");

      setTimeout(() => {
        opening.style.display = "none";
      }, 1000);
    }, 600);
  }

  type();
}

/* BOOTSTRAP */

window.addEventListener("hashchange", loadPage);

document.addEventListener("DOMContentLoaded", () => {
  runOpening();
  initContactModal();
  loadPage();
});
