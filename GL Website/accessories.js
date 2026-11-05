const WHATSAPP_NUMBER = "923127802780";

// Apni tasveer lagane ke liye kisi product mein image: "images/bag.jpg" likh dein
const PRODUCTS = [
  { name: "Pearl Drop Earrings", price: 2400, image: "images/earings.jpg", icon: "💎", c: ["#ffffff", "#b9a9c9"], desc: "Freshwater-style pearls on gold-plated hooks." },
  { name: "Leather Handbag", price: 8500, image: "images/purse.jpg", icon: "👜", c: ["#e0a47a", "#7a3b16"], desc: "Roomy bag with a zip pocket inside." },
  { name: "Silk Scarf", price: 1800, image: "images/silk.jpg", icon: "🧣", c: ["#ffb199", "#c1356b"], desc: "Printed silk-feel scarf, 90×90 cm." },
  { name: "Gold Bangle Set", price: 3600,image: "images/bracelet.jpg", icon: "📿", c: ["#ffe27a", "#b8860b"], desc: "Set of four stackable bangles." },
  { name: "Sunglasses Cat-Eye", price: 2900, image: "images/glasses.jpg", icon: "🕶️", c: ["#d6b3ff", "#4a2a7a"], desc: "UV400 lenses with a lightweight frame." },
  { name: "Locket", price: 1500, image: "images/locket.jpg", icon: "✨", c: ["#ffd6ec", "#c75a98"], desc: "Six sparkling clips for everyday and parties." }
];

const money = n => "Rs. " + n.toLocaleString("en-PK");

function waLink(p) {
  const msg = `Assalam o Alaikum! I want to order from GL - Grace & Luxe:\n\nProduct: ${p.name}\nPrice: ${money(p.price)}\n\nPlease confirm availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function cardHTML(p) {
  const thumb = p.image ? `<img src="${p.image}" alt="${p.name}">` : `<span>${p.icon}</span>`;
  return `
    <article class="card">
      <div class="thumb" style="--c1:${p.c[0]};--c2:${p.c[1]}">${thumb}</div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="price">${money(p.price)}</div>
      <a class="wa-btn" target="_blank" rel="noopener" href="${waLink(p)}">Order on WhatsApp</a>
    </article>`;
}

document.getElementById("products").innerHTML = PRODUCTS.map(cardHTML).join("");

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