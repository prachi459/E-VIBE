id="wishlist-count"

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function calculateImpact() {
  const km = document.getElementById("distance").value;
  const result = document.getElementById("impactResult");
  if (km <= 0) {
    result.innerHTML = "Enter a valid distance!";
    return;
  }
  const co2 = km * 30 * 0.12;
  result.innerHTML = `🌿 You save approximately <b>${co2.toFixed(2)} kg</b> CO₂ monthly.`;
}

function bookTestRide() {
  alert("Thank you! We will contact you soon for a test ride 📞");
}

function knowMore() {
  window.location.href = "https://yourshopifyshop.com/pages/e-vibe";
}

function toggleFAQ(item) {
  const answer = item.querySelector("p");
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}

function submitForm() {
  alert("Thank you! Our team will contact you soon 🚲");
}
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//updateWishlistCount();

function addToWishlist(product) {
  if (!wishlist.includes(product)) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    alert("❤️ Added to wishlist");
  }
}

function updateWishlistCount() {
  //document.getElementById("wishlist-count").innerText = wishlist.length;
}

function toggleWishlist() {
  const modal = document.getElementById("wishlist-modal");
  const list = document.getElementById("wishlist-items");

  list.innerHTML = "";

  wishlist.forEach((item, index) => {
    list.innerHTML += `
      <li>
        ${item}
        <button onclick="removeFromWishlist(${index})">❌</button>
      </li>
    `;
  });

  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function removeFromWishlist(index) {
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  toggleWishlist();
  toggleWishlist();
}


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

function showTab(id) {
  document.querySelectorAll(".tab-content")
    .forEach(tab => tab.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🛒 Added to cart");
  toggleCart();
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  const list = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    list.innerHTML += `
      <li>
        ${item.product} - ₹${item.price}
        <button onclick="removeFromCart(${index})">❌</button>
      </li>
    `;
  });

  totalEl.innerText = total;

  modal.style.display =
    modal.style.display === "block" ? "none" : "block";
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  toggleCart();
  toggleCart();
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const orderId = "EV" + Math.floor(Math.random() * 100000);

  alert(
    `✅ Order Placed Successfully!\n\nOrder ID: ${orderId}\n\nThank you for choosing E-VIBE 🚲`
  );

  cart = [];
  localStorage.removeItem("cart");
  toggleCart();
}
function openCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  document.getElementById("cart-modal").style.display = "none";
  document.getElementById("checkout-modal").style.display = "block";
}

function closeCheckout() {
  document.getElementById("checkout-modal").style.display = "none";
}

function confirmPurchase() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const pincode = document.getElementById("pincode").value;

  if (!name || !phone || !address || !city || !pincode) {
    alert("Please fill all delivery details.");
    return;
  }

  const orderId = "EVIBE-" + Math.floor(Math.random() * 100000);

  alert(
    `🎉 Purchase Successful!\n\nOrder ID: ${orderId}\n\nThank you ${name} for choosing E-VIBE 🚲`
  );

  cart = [];
  localStorage.removeItem("cart");

  document.getElementById("checkout-modal").style.display = "none";
}
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
