/* ============ CART STATE (dipakai bersama semua halaman) ============ */
let cart = {};

function loadCart(){
  try{ cart = JSON.parse(localStorage.getItem("avstore_cart") || "{}"); }
  catch(e){ cart = {}; }
}
function saveCart(){
  try{ localStorage.setItem("avstore_cart", JSON.stringify(cart)); }catch(e){}
}

function rupiah(n){
  return "Rp" + n.toLocaleString("id-ID");
}

function totalItems(){
  return Object.values(cart).reduce((a,b)=>a+b,0);
}
function totalPrice(){
  return Object.entries(cart).reduce((sum,[id,qty])=>{
    const p = PRODUCTS.find(x=>x.id===id);
    return sum + (p? p.price*qty : 0);
  },0);
}

/* Cart dot + floating cart bar (elemen ini ada di halaman menu/detail/cart) */
function refreshCartBar(){
  const items = totalItems();
  const dot = document.getElementById("cart-dot");
  if(dot){
    if(items>0){ dot.style.display="flex"; dot.textContent=items; } else { dot.style.display="none"; }
  }
  const barCount = document.getElementById("bar-count");
  const barTotal = document.getElementById("bar-total");
  if(barCount) barCount.textContent = items + (items===1?" item dipilih":" item dipilih");
  if(barTotal) barTotal.textContent = rupiah(totalPrice());
}

/* Tambah/kurang qty produk. showBarOnThisPage: true jika halaman ini punya floating cart-bar yang harus tampil saat ada item */
function changeQty(id, delta, showBarOnThisPage){
  const cur = cart[id]||0;
  const next = Math.max(0, cur+delta);
  if(next===0) delete cart[id]; else cart[id]=next;
  saveCart();
  if(typeof renderGrid === "function") renderGrid();
  if(typeof renderCart === "function") renderCart();
  refreshCartBar();
  const bar = document.getElementById("cart-bar");
  if(bar) bar.classList.toggle("show", !!showBarOnThisPage && totalItems()>0);
  if(delta>0) showToast("Ditambahkan ke keranjang");
}

/* ============ TOAST ============ */
let toastTimer=null;
function showToast(msg){
  const el = document.getElementById("toast");
  if(!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove("show"), 1600);
}

/* WA checkout — dipakai halaman cart */
function checkoutWA(){
  const entries = Object.entries(cart);
  if(entries.length===0) return;
  let lines = ["Halo AVstore, saya mau order:"];
  entries.forEach(([id,qty])=>{
    const p = PRODUCTS.find(x=>x.id===id);
    if(p) lines.push(`- ${p.name} x${qty} — ${rupiah(p.price*qty)}`);
  });
  lines.push("");
  lines.push(`Total: ${rupiah(totalPrice())}`);
  lines.push("");
  lines.push("Mohon info langkah selanjutnya ya, terima kasih!");
  const text = encodeURIComponent(lines.join("\n"));
  window.open(`https://wa.me/${WA_ADMIN}?text=${text}`, "_blank");
}

function openCS(){
  const text = encodeURIComponent("Aku ingin bertanya mengenai cara order di AVstore");
  window.open(`https://wa.me/${WA_ADMIN}?text=${text}`, "_blank");
}

loadCart();
