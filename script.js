// Preencha com o número da liderança (formato 55DDDNÚMERO) para ativar o botão de WhatsApp.
const WHATSAPP = "5583998376994";

const btn = document.getElementById("whats");
if (WHATSAPP) {
  btn.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Oi! Quero conhecer o culto dos adolescentes.")}`;
  btn.target = "_blank";
  btn.rel = "noopener";
}

const items = document.querySelectorAll(".card, .timeline li, .info > div, .section h2");
items.forEach(el => el.classList.add("reveal"));
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.15 });
items.forEach(el => io.observe(el));

// Duplica o grupo de perguntas para a faixa rolar em loop (cópia escondida de leitores de tela)
const track = document.querySelector(".faq-track");
if (track && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const copy = track.firstElementChild.cloneNode(true);
  copy.setAttribute("aria-hidden", "true");
  track.appendChild(copy);
}
