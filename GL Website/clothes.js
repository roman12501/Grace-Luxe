const WHATSAPP_NUMBER = "923127802780";

// Apni tasveer lagane ke liye kisi product mein image: "images/kurta.jpg" likh dein
const PRODUCTS = [
  { name: "Linen Kurta Set", price: 5400, image: "images/lenkurta.jpg", icon: "👘", c: ["#ffe4c4", "#c9873a"], desc: "Breathable linen, relaxed fit, matching trousers." },
  { name: "Premium Cotton Shirt", price: 3200, image: "images/shirt.jpg", icon: "👔", c: ["#cfe3ff", "#4a6fa5"], desc: "Crisp collar, easy-iron cotton." },
  { name: "Evening Maxi Dress", price: 7800, image: "images/eveningmaxi.jpg", icon: "👗", c: ["#ff9ab8", "#8a1f4d"], desc: "Flowing maxi with a tailored waist." },
  { name: "Slim Fit Trousers", price: 3900, image: "images/pent.jpg", icon: "👖", c: ["#b9b9c9", "#3c3c52"], desc: "Stretch fabric that keeps its shape all day." },
  { name: "Printed Lawn Suit", price: 4600, image: "images/printedlawn.jpg", icon: "👗", c: ["#ffd9a0", "#d9663a"], desc: "3-piece lawn with printed shirt and dupatta." },
  { name: "Casual Polo T-Shirt", price: 2200,image: "images/tshirt.jpg", icon: "👕", c: ["#9fe0c0", "#2a7a5a"], desc: "Soft pique cotton, regular fit, six colours." }
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