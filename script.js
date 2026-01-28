"use strict";

/* ===============================
   SIMPLE HASH ROUTER
================================ */

const allowedPages = ["arts", "works"];
const content = document.getElementById("content");

function loadPage() {
  let page = location.hash.replace("#", "") || "arts";

  if (!allowedPages.includes(page)) {
    page = "arts";
  }

  fetch(`pages/${page}.html`)
    .then(res => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
    })
    .then(html => {
      content.innerHTML = html;

      // init per halaman
      if (page === "arts") {
        initArtGallery();
      }
    })
    .catch(() => {
      content.innerHTML = "<p>Page not found.</p>";
    });
}

/* ===============================
   CONTACT MODAL
================================ */

function initContactModal() {
  const modal = document.getElementById("contactModal");
  const trigger = document.getElementById("contactTrigger");

  if (!modal || !trigger) return;

  trigger.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

function closeContact() {
  const modal = document.getElementById("contactModal");
  if (modal) modal.style.display = "none";
}

/* ===============================
   ART GALLERY (ARTS PAGE)
================================ */

const artsData = [
  { image: "assets/art1.png", title: "Sanity", desc: "Desc" },
  { image: "assets/art2.png", title: "Closer to Life", desc: "Deskripsi artwork kedua." },
  { image: "assets/art3.png", title: "Sta(i)rs", desc: "Deskripsi artwork ketiga." },
  { image: "assets/art4.png", title: "Kerzenschein", desc: "Desc" },
  { image: "assets/art5.png", title: "Ein Gebrochener Mensch.", desc: "Deskripsi artwork kelima." },
  { image: "assets/art6.png", title: "Oblivione", desc: "Desc" },
  { image: "assets/art7.png", title: "K_Night", desc: "Desc" },
  { image: "assets/art8.png", title: "Non-Senses", desc: "Deskripsi artwork kedelapan." },
  { image: "assets/art9.png", title: "Hypocrites", desc: "Deskripsi artwork kesembilan." },
  { image: "assets/art10.png", title: "Dethroned", desc: "Deskripsi artwork kesepuluh." },
  { image: "assets/art11.png", title: "i hate me too", desc: "Desc" },
  { image: "assets/art12.png", title: "alles hat seine zeit", desc: "Deskripsi artwork kedua." }
  

];

let artIndex = 0;

function initArtGallery() {
  const img   = document.getElementById("artImage");
  const title = document.getElementById("artTitle");
  const desc  = document.getElementById("artDesc");
  const prev  = document.getElementById("btnPrev");
  const next  = document.getElementById("btnNext");

  if (!img || !prev || !next) return;

  function updateArt() {
    img.src = artsData[artIndex].image;
    title.textContent = artsData[artIndex].title;
    desc.textContent  = artsData[artIndex].desc;

    prev.disabled = artIndex === 0;
    next.disabled = artIndex === artsData.length - 1;
  }

  prev.onclick = () => {
    if (artIndex > 0) {
      artIndex--;
      updateArt();
    }
  };

  next.onclick = () => {
    if (artIndex < artsData.length - 1) {
      artIndex++;
      updateArt();
    }
  };

  updateArt();
}

/* ===============================
   BOOTSTRAP
================================ */

window.addEventListener("hashchange", loadPage);

document.addEventListener("DOMContentLoaded", () => {
  initContactModal();
  loadPage();
});
