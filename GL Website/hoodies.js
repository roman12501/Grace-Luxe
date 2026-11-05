const WHATSAPP_NUMBER = "923127802780";

// Apni tasveer lagane ke liye kisi product mein image: "images/hoodie1.jpg" likh dein
const PRODUCTS = [
  { name: "Orange Signature Hoodie", price: 4500,  image: "images/orange.jpg", icon: "🧥", c: ["#ffb066", "#e8590c"], desc: "GL logo on chest, brushed fleece inside." },
  { name: "Black Oversized Hoodie", price: 4800,  image: "images/black.jpg", icon: "🧥", c: ["#555555", "#111111"], desc: "Drop shoulders and a deep hood." },
  { name: "Zip-Up Winter Hoodie", price: 5200,  image: "images/red.jpg", icon: "🧥", c: ["#9fb4d6", "#3b4d73"], desc: "Full zip with two warm pockets." },
  { name: "Cream Cozy Hoodie", price: 4600,  image: "images/white.jpg", icon: "🧥", c: ["#fff1d6", "#c8a77a"], desc: "Soft cream cotton blend, unisex fit." },
  { name: "Maroon Pullover Hoodie", price: 4700, image: "images/blue.jpg", icon: "🧥", c: ["#c0506a", "#5a1028"], desc: "Thick fleece, kangaroo pocket, ribbed cuffs." },
  { name: "Cropped Ladies Hoodie", price: 4200,  image: "images/croped.jpg", icon: "🧥", c: ["#ffc2d6", "#b8456f"], desc: "Short fit with a soft inner lining." }
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