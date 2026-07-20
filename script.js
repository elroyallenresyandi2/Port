/* ============================================================
   DATA PROYEK — TAMBAHKAN PROYEKMU DI SINI
   Salin satu blok { ... } di bawah, lalu ganti isinya.
   - title      : nama proyek
   - year       : tahun pengerjaan
   - category   : kategori singkat (mis. "Web App", "Mobile")
   - description: deskripsi singkat untuk kartu proyek, 1-2 kalimat
   - details    : penjelasan lebih panjang, muncul saat "Lihat Detail" dipencet
   - role       : peranmu di proyek ini (kosongkan "" jika tidak perlu)
   - highlights : daftar poin — fitur/hal yang kamu kerjakan (boleh dikosongkan [])
   - tags       : array teknologi/tools yang dipakai
   - link       : url demo/repo asli (kosongkan "" jika belum ada — tombol
                   "Kunjungi Proyek" otomatis disembunyikan)
   - image      : url gambar thumbnail (kosongkan "" jika belum punya,
                   nanti otomatis pakai pola visual default)
============================================================ */
const projects = [
 {
    title: "Natural Reserve",
    year: "2026",
    category: "Web App",
    description: "a web for counting FR for fishery — fishery resource counting for Food, Fcr, Etc.",
    details: "A web that design for counting fishery resources and help fishers manage their resources effectively.",
    role: "Pm and Frontend Developer",
    highlights: [
      "how to maintain a project",
      "learn how to manage a project with a team",
      "go global with a project"
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    link: "",
    image: "images/image2.png"
  },
  {
    title: "Design app",
    year: "2025",
    category: "UI Design",
    description: "Design for a app for rent or buy a property.",
    details: "i use Figma for the design and for the wireframe i design it for 2 days.",
    role: "Designer",
    highlights: [
      "i learn how to use Figma for design and prototyping",
      "how to manage a design project",
],
    tags: ["Figma", "Prototyping"],
    link: "",
    image: "images/image.png"
  },
  {
    title: "Kotak Studio",
    year: "2025",
    category: "Web App",
    description: "A web for photobox and print services.",
    details: "A photobox web application for managing photo printing services and can be used by customers to order and customize their photo products.",
    role: "",
    highlights: [],
    tags: ["HTML", "CSS", "JavaScript"],
    link: "",
    image: "images/image3.png"
  },
  {
    title: "Moonbieve",
    year: "2026",
    category: "Eksperimen",
    description: "a project that i made cause my friend wan't to make one.",
    details: "i learn a lot of stuff such as how to make a blog website.",
    role: "",
    highlights: [],
    tags: ["HTML", "CSS", "JavaScript"],
    link: "",
    image: "images/image4.png"
  },
   {
    title: "Random Design",
    year: "2026",
    category: "Eksperimen",
    description: "a project that i made cause i love making things.",
    details: "i learn a lot of stuff such as how to make a good design.",
    role: "",
    highlights: [],
    tags: ["Figma"],
    link: "",
    image: "images/image5.png"
  }
];

const grid = document.getElementById('project-grid');
grid.innerHTML = projects.map((p, i) => {
  const num = String(i + 1).padStart(2, '0');
  const visual = p.image
    ? `<img src="${p.image}" alt="${p.title}">`
    : `<span class="ghost-num">${num}</span>`;
  const tags = p.tags.map(t => `<span>${t}</span>`).join('');
  return `
    <article class="project-card reveal">
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>
      <div class="project-visual">${visual}</div>
      <div class="project-meta">
        <span>${num} / ${p.category}</span>
        <span>${p.year}</span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">${tags}</div>
      <button class="project-link" data-index="${i}" type="button">Lihat Detail →</button>
    </article>
  `;
}).join('');

/* ============================================================
   DATA SERTIFIKAT & LOMBA — TAMBAHKAN DI SINI
   Salin satu blok { ... } di bawah, lalu ganti isinya.
   - title  : nama sertifikat / lomba / penghargaan
   - issuer : penyelenggara atau lembaga pemberi
   - date   : bulan/tahun didapat
   - category: label singkat, mis. "Sertifikat", "Juara 1", "Peserta"
   - image  : url gambar/scan sertifikat (kosongkan "" jika belum ada)
   - link   : url verifikasi/sumber asli (kosongkan "" jika tidak ada)
============================================================ */
const certificates = [
  {
    title: "FLS2N 2025",
    issuer: "Puspresnas",
    date: "2025",
    category: "certificate",
    image: "images/cert1.png",
  },
  {
    title: "MPK certificate",
    issuer: "Nama penyelenggara",
    date: "2025",
    category: "certificate",
    image: "images/cert2.png",
  },
   {
    title: "Kubivent 2025",
    issuer: "Kubivent",
    date: "2025",
    category: "certificate",
    image: "images/cert3.png",
  }
];

const certGrid = document.getElementById('cert-grid');
certGrid.innerHTML = certificates.map((c, i) => {
  const visual = c.image
    ? `<img src="${c.image}" alt="${c.title}">`
    : `<span class="ghost-icon">🏆</span>`;
  return `
    <article class="cert-card reveal">
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>
      <div class="cert-visual" data-index="${i}">${visual}</div>
      <div class="cert-meta">${c.category} — ${c.date}</div>
      <h3 class="cert-title">${c.title}</h3>
      <p class="cert-issuer">${c.issuer}</p>
      <button class="cert-action" data-index="${i}" type="button">Lihat Sertifikat →</button>
    </article>
  `;
}).join('');

/* ---------------- Lightbox sertifikat ---------------- */
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(index){
  const c = certificates[index];
  if (c.image) {
    lightboxImg.src = c.image;
    lightboxImg.alt = c.title;
    lightboxCaption.textContent = `${c.title} — ${c.issuer}`;
    lightboxOverlay.classList.add('open');
    lightboxOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  } else if (c.link) {
    window.open(c.link, '_blank', 'noopener');
  }
}
function closeLightbox(){
  lightboxOverlay.classList.remove('open');
  lightboxOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

certGrid.addEventListener('click', (e) => {
  const target = e.target.closest('.cert-visual, .cert-action');
  if (target) openLightbox(Number(target.dataset.index));
});
lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', (e) => {
  if (e.target === lightboxOverlay) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightboxOverlay.classList.contains('open')) closeLightbox();
});

/* ---------------- Carousel proyek: drag, tombol panah, progress ---------------- */
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselProgress = document.getElementById('carousel-progress-bar');

function cardStep(){
  const card = grid.querySelector('.project-card');
  if (!card) return 0;
  return card.getBoundingClientRect().width + 1; // +1 untuk gap antar kartu
}

function updateCarouselUI(){
  const max = grid.scrollWidth - grid.clientWidth;
  const pct = max > 0 ? (grid.scrollLeft / max) * 100 : 0;
  carouselProgress.style.width = Math.max(pct, 6) + '%';
  carouselPrev.disabled = grid.scrollLeft <= 4;
  carouselNext.disabled = grid.scrollLeft >= max - 4;
}

carouselPrev.addEventListener('click', () => {
  grid.scrollBy({ left: -cardStep(), behavior: reduceMotion ? 'auto' : 'smooth' });
});
carouselNext.addEventListener('click', () => {
  grid.scrollBy({ left: cardStep(), behavior: reduceMotion ? 'auto' : 'smooth' });
});
grid.addEventListener('scroll', () => requestAnimationFrame(updateCarouselUI), { passive:true });
window.addEventListener('resize', updateCarouselUI);
updateCarouselUI();

// Geser dengan klik + tarik mouse (desktop)
let isDragging = false, dragStartX = 0, dragScrollStart = 0, dragMoved = false;
grid.addEventListener('mousedown', (e) => {
  isDragging = true;
  dragMoved = false;
  grid.classList.add('dragging');
  dragStartX = e.pageX;
  dragScrollStart = grid.scrollLeft;
});
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dx = e.pageX - dragStartX;
  if (Math.abs(dx) > 4) dragMoved = true;
  grid.scrollLeft = dragScrollStart - dx;
});
window.addEventListener('mouseup', () => {
  isDragging = false;
  grid.classList.remove('dragging');
});
// Mencegah modal detail terbuka tidak sengaja saat habis drag
grid.addEventListener('click', (e) => {
  if (dragMoved) { e.stopPropagation(); e.preventDefault(); }
}, true);

/* ---------------- Modal detail proyek ---------------- */
const overlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalVisual = document.getElementById('modal-visual');
const modalMeta = document.getElementById('modal-meta');
const modalTitle = document.getElementById('modal-title');
const modalRole = document.getElementById('modal-role');
const modalDetails = document.getElementById('modal-details');
const modalHighlights = document.getElementById('modal-highlights');
const modalTags = document.getElementById('modal-tags');
const modalLink = document.getElementById('modal-link');

function openModal(index){
  const p = projects[index];
  const num = String(index + 1).padStart(2, '0');

  modalVisual.innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.title}">`
    : `<span class="ghost-num">${num}</span>`;
  modalMeta.innerHTML = `<span>${num} / ${p.category}</span><span>${p.year}</span>`;
  modalTitle.textContent = p.title;
  modalRole.textContent = p.role ? `Peran — ${p.role}` : '';
  modalRole.style.display = p.role ? 'block' : 'none';
  modalDetails.textContent = p.details || p.description;

  const highlights = p.highlights || [];
  modalHighlights.innerHTML = highlights.map(h => `<li>${h}</li>`).join('');
  modalHighlights.style.display = highlights.length ? 'block' : 'none';

  modalTags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');

  if (p.link && p.link !== '#') {
    modalLink.href = p.link;
    modalLink.classList.remove('hidden');
  } else {
    modalLink.classList.add('hidden');
  }

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalClose.focus();
}

function closeModal(){
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('.project-link');
  if (btn) openModal(Number(btn.dataset.index));
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
});

/* ---------------- Nav backdrop on scroll ---------------- */
const nav = document.getElementById('mainnav');

function onScroll(){
  nav.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

/* ---------------- Hero cursor spotlight ---------------- */
const hero = document.getElementById('hero');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty('--mx', x + '%');
    hero.style.setProperty('--my', y + '%');
  });
}

/* ---------------- Scroll reveal ---------------- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

/* ---------------- Back to top ---------------- */
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});