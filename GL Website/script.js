const WHATSAPP_NUMBER = "923127802780";

// Home page ki featured products (har category se ek)
const FEATURED = [
  { name: "Gold Classic Chronograph", price: 12500, image: "images/watch1.jpg", icon: "", c: ["#ffd29a", "#b8741a"], desc: "Gold-tone steel case with a sapphire-style glass face." },
  { name: "Linen Kurta Set", price: 5400, image: "images/lenkurta.jpg", icon: "", c: ["#ffe4c4", "#c9873a"], desc: "Breathable linen, relaxed fit, matching trousers." },
  { name: "Orange Signature Hoodie", price: 4500, image: "images/orange1.jpg", icon: "", c: ["#ffb066", "#e8590c"], desc: "GL logo on chest, brushed fleece inside." },
  { name: "Oud Royale 100ml", price: 6900, image: "images/oud royale.jpg", icon: "", c: ["#d9a05b", "#4a2a0a"], desc: "Deep oud with amber and a touch of spice." },
  { name: "Pearl Drop Earrings", price: 2400, image: "images/earingss.jpg", icon: "", c: ["#fff", "#b9a9c9"], desc: "Freshwater-style pearls on gold-plated hooks." }
];

const money = n => "Rs. " + n.toLocaleString("en-PK");

function waLink(p) {
  const msg = `Assalam o Alaikum! I want to order from GL - Grace & Luxe:\n\nProduct: ${p.name}\nPrice: ${money(p.price)}\n\nPlease confirm availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function cardHTML(p) {
  const thumb = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.remove()"><span>${p.icon}</span>`
    : `<span>${p.icon}</span>`;
  return `
    <article class="card">
      <div class="thumb" style="--c1:${p.c[0]};--c2:${p.c[1]}">${thumb}</div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="price">${money(p.price)}</div>
      <a class="wa-btn" target="_blank" rel="noopener" href="${waLink(p)}">Order on WhatsApp</a>
    </article>`;
}

document.getElementById("featured").innerHTML = FEATURED.map(cardHTML).join("");

// 3D tilt effect
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg) translateZ(10px)`;
    });
    card.addEventListener("mouseleave", () => card.style.transform = "");
  });
}

// Mobile sidebar toggle
document.getElementById("menuBtn").addEventListener("click", () =>
  document.getElementById("sidebar").classList.toggle("open"));