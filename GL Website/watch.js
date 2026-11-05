const WHATSAPP_NUMBER = "923127802780";

// Apni tasveer lagane ke liye kisi product mein image: "images/watch1.jpg" likh dein
const PRODUCTS = [
  { name: "Gold Classic Chronograph", price: 12500, image: "images/watch1.jpg", icon: "⌚", c: ["#ffd29a", "#b8741a"], desc: "Gold-tone steel case." },
  { name: "Midnight Leather Watch", price: 8900, image: "images/watch4.jpg", icon: "⌚", c: ["#6a4a8a", "#1d1020"], desc: "Slim black dial on a soft leather strap." },
  { name: "Rose Gold Ladies Watch", price: 9800, image: "images/watch2.jpg", icon: "⌚", c: ["#ffc2b0", "#c66a5a"], desc: "Small rose gold face with a mesh band." },
  { name: "Silver Steel Automatic", price: 15900,image: "images/watch6.jpg", icon: "⌚", c: ["#e3e8ee", "#6b7684"], desc: "Self-winding movement in a brushed steel case." },
  { name: "Sports Digital Watch", price: 5500, image: "images/watch4.jpg", icon: "⌚", c: ["#7fd1ff", "#1b4f7a"], desc: "Water resistant, stopwatch and backlight." },
  { name: "Couple Watch Set", price: 14500, image: "images/watch3.jpg", icon: "⌚", c: ["#ffb199", "#7a2a3a"], desc: "Matching his and hers watches in a gift box." }
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