/* ============================================================
   DATA PROYEK — TAMBAHKAN PROYEKMU DI SINI
   Salin satu blok { ... } di bawah, lalu ganti isinya.
   - title      : nama proyek
   - year       : tahun pengerjaan
   - category   : kategori singkat (mis. "Web App", "Mobile")
   - description: deskripsi singkat, 1-2 kalimat
   - tags       : array teknologi/tools yang dipakai
   - link       : url ke demo/repo (pakai "#" jika belum ada)
   - image      : url gambar thumbnail (kosongkan "" jika belum punya,
                   nanti otomatis pakai pola visual default)
============================================================ */
const projects = [
  {
    title: "Natural Reserve Web",
    year: "2026",
    category: "Web",
    description: "Sebuah Web penghitung FR untuk perikanan — seringkali ada miss calculate pada pakan dll.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    image: "images/Natural.png"
  },
  {
    title: "Nama Proyek Kedua",
    year: "2026",
    category: "UI Design",
    description: "Ceritakan proses desain, keputusan yang diambil, dan hasil akhirnya secara singkat.",
    tags: ["Figma", "Prototyping"],
    link: "#",
    image: ""
  },
  {
    title: "Nama Proyek Ketiga",
    year: "2025",
    category: "Mobile",
    description: "Jelaskan fitur utama dan peranmu dalam proyek ini.",
    tags: ["React Native"],
    link: "#",
    image: ""
  },
  {
    title: "Nama Proyek Keempat",
    year: "2025",
    category: "Eksperimen",
    description: "Proyek iseng atau eksperimen belajar — tetap layak ditampilkan.",
    tags: ["JavaScript", "Canvas"],
    link: "#",
    image: ""
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
      <a href="${p.link}" class="project-link" target="_blank" rel="noopener">Lihat Detail ↗</a>
    </article>
  `;
}).join('');

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
