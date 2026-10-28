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
if (CONFIG.photos.length) {
  document.querySelector(".hero").style.backgroundImage = `url("${CONFIG.photos[0].src}")`;
}

// Gallery + filters
let visible = CONFIG.photos;
const grid = $("grid");

function renderGrid() {
  grid.innerHTML = "";
  visible.forEach((p, i) => {
    const img = document.createElement("img");
    img.src = p.src;
    img.alt = p.caption || "";
    img.loading = "lazy";
    img.addEventListener("click", () => openLightbox(i));
    grid.appendChild(img);
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
  current = (i + visible.length) % visible.length;
  $("lb-img").src = visible[current].src;
  $("lb-caption").textContent = visible[current].caption || "";
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
