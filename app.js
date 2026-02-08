setTimeout(()=>{
  const loader = document.getElementById("loader");
  if(loader) loader.style.display="none";
},3000);

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart 🛒");
}


const products = [
  { id: 1, name: "Apple", price: 120, image: "../public/images/apple.jpg" },
  { id: 2, name: "Banana", price: 60, image: "../public/images/banana.jpg" },
   {id: 3, name: "Tomato", price: 80, image: "../public/images/tomato.jpg" },
   {id: 4, name: "rice", price: 298, image: "../public/images/rice.jpg" },
   {id: 5, name: "bag", price: 50, image: "../public/images/bag.jpg" },
];

const productList = document.getElementById("productList");

function displayProducts() {
  productList.innerHTML = "";
  products.forEach(p => {
    productList.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card product-card p-2 text-center">
          <img src="${p.image}" class="product-img">
          <h5>${p.name}</h5>
          <p>₹${p.price}</p>
          <button class="btn btn-success" onclick="addToCart(${p.id})">
            Add to Cart 🛒
          </button>
        </div>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart ✅");
}

displayProducts();

  const searchInput = document.getElementById("search");

if(searchInput){
  searchInput.addEventListener("input", ()=>{
    const text = searchInput.value.toLowerCase();
    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(text)
    );
    displayProducts(filtered);
  });
}

function toggleDark(){
  document.body.classList.toggle("dark");
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader){
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      setTimeout(()=> loader.remove(), 500);
    }, 1200);
  }
});

function loadProducts(){
  
  displayProducts(allProducts);
  loadSlider();
}

const canvas = document.getElementById("particles");
let ctx;

if(canvas){
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}


function animateParticles(){
  if(!ctx) return;

  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,255,0.4)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if(p.x>canvas.width || p.y>canvas.height){
      p.x=0;
      p.y=Math.random()*canvas.height;
    }
  });
  requestAnimationFrame(animateParticles);
}

