const WHATSAPP_NUMBER = "923127802780";

// Apni tasveer lagane ke liye kisi product mein image: "images/oud.jpg" likh dein
const PRODUCTS = [
  { name: "Oud Royale 100ml", price: 6900, image: "images/oud royale.jpg", icon: "🧴", c: ["#d9a05b", "#4a2a0a"], desc: "Deep oud with amber and a touch of spice." },
  { name: "Rose Petal Eau de Parfum", price: 5600, image: "images/rose petel.jpg", icon: "🌹", c: ["#ffb3c7", "#a3295a"], desc: "Fresh rose, musk and soft vanilla." },
  { name: "Citrus Bloom 50ml", price: 3800, image: "images/citrus.jpg", icon: "🍊", c: ["#ffe08a", "#f08a00"], desc: "Light orange blossom for daytime." },
  { name: "Midnight Musk Attar", price: 4200, image: "images/midnight.jpg", icon: "🧴", c: ["#8d7ab8", "#1f1535"], desc: "Alcohol-free musk attar, strong and warm." },
  { name: "Ocean Breeze for Men", price: 4900, image: "images/decian.jpg", icon: "🌊", c: ["#8fd3f4", "#1b5e8a"], desc: "Clean aquatic notes with a woody base." },
  { name: "Vanilla Amber Mist", price: 3500, image: "images/vanila.jpg", icon: "🧴", c: ["#ffe4b5", "#b8742a"], desc: "Sweet vanilla body mist, light and long lasting." }
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