const $ = (id) => document.getElementById(id);

// Fill text from config
$("site-name").textContent = CONFIG.name;
$("hero-name").textContent = CONFIG.name;
$("tagline").textContent = CONFIG.tagline;
$("about-text").textContent = CONFIG.about;
$("footer-name").textContent = CONFIG.name;
$("year").textContent = new Date().getFullYear();
$("email-link").textContent = CONFIG.email;
$("email-link").href = `mailto:${CONFIG.email}`;
$("ig-link").textContent = `@${CONFIG.instagram}`;
$("ig-link").href = `https://instagram.com/${CONFIG.instagram}`;
document.title = `${CONFIG.name} — Portfolio`;

// Brands
const brandGroups = Object.entries(CONFIG.brands || {});
const brandTotal = brandGroups.reduce((n, [, list]) => n + list.length, 0);
$("brand-count").textContent = `${brandTotal}+ collaborations`;
brandGroups.forEach(([group, list]) => {
  const wrap = document.createElement("div");
  wrap.className = "brand-group";
  const h3 = document.createElement("h3");
  h3.textContent = group;
  const ul = document.createElement("ul");
  list.forEach((brand) => {
    const li = document.createElement("li");
    li.textContent = brand;
    ul.appendChild(li);
  });
  wrap.append(h3, ul);
  $("brand-groups").appendChild(wrap);
});
if (!brandGroups.length) $("brands").remove();

// Hero background = first photo
const heroImg = CONFIG.hero || (CONFIG.photos[0] && CONFIG.photos[0].src);
if (heroImg) {
  document.querySelector(".hero").style.backgroundImage = `url("${heroImg}")`;
}

// Gallery + filters
let visible = CONFIG.photos;
let slides = []; // visible items that have an image, for the lightbox
const grid = $("grid");

function renderGrid() {
  grid.innerHTML = "";
  slides = visible.filter((p) => p.src);
  visible.forEach((p) => {
    const card = document.createElement("figure");
    card.className = "card";

    if (p.src) {
      const img = document.createElement("img");
      img.src = p.src;
      img.alt = p.caption || "";
      img.loading = "lazy";
      card.appendChild(img);
      card.addEventListener("click", () => openLightbox(slides.indexOf(p)));
    } else {
      // No screenshot yet: show a text tile that opens the reel directly
      card.classList.add("no-img");
      card.addEventListener("click", () => window.open(p.link, "_blank", "noopener"));
    }

    if (p.views) {
      const badge = document.createElement("span");
      badge.className = "views";
      badge.textContent = `▶ ${p.views} views`;
      card.appendChild(badge);
    }
    if (p.caption) {
      const cap = document.createElement("figcaption");
      cap.textContent = p.caption;
      card.appendChild(cap);
    }
    grid.appendChild(card);
  });
}

const tags = [...new Set(CONFIG.photos.map((p) => p.tag).filter(Boolean))];
if (tags.length > 1) {
  ["all", ...tags].forEach((tag) => {
    const btn = document.createElement("button");
    btn.textContent = tag;
    if (tag === "all") btn.classList.add("active");
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      visible = tag === "all" ? CONFIG.photos : CONFIG.photos.filter((p) => p.tag === tag);
      renderGrid();
    });
    $("filters").appendChild(btn);
  });
}
renderGrid();

// Lightbox
const lb = $("lightbox");
let current = 0;

function show(i) {
  current = (i + slides.length) % slides.length;
  $("lb-img").src = slides[current].src;
  $("lb-caption").textContent = slides[current].caption || "";
  const link = $("lb-link");
  link.hidden = !slides[current].link;
  if (slides[current].link) link.href = slides[current].link;
}
function openLightbox(i) {
  show(i);
  lb.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lb.hidden = true;
  document.body.style.overflow = "";
}

document.querySelector(".lb-close").addEventListener("click", closeLightbox);
document.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
document.querySelector(".lb-next").addEventListener("click", () => show(current + 1));
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});

// Swipe on phones
let touchX = null;
lb.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX));
lb.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
  touchX = null;
});
