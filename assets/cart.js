/* ============ CART STATE (dipakai bersama semua halaman) ============ */
let cart = {};
let selectedCartKeys = new Set();

function loadCart(){
  try{ cart = JSON.parse(localStorage.getItem("avstore_cart") || "{}"); }
  catch(e){ cart = {}; }
}
function saveCart(){
  try{ localStorage.setItem("avstore_cart", JSON.stringify(cart)); }catch(e){}
}

/* Pilihan item di halaman keranjang */
function initCartSelection(){
  selectedCartKeys.clear();
  let directKey = "";
  try{
    directKey = sessionStorage.getItem("avstore_direct_key") || "";
    sessionStorage.removeItem("avstore_direct_key");
  }catch(e){}

  if(directKey && cart[directKey]){
    selectedCartKeys.add(directKey);
  }else{
    Object.keys(cart).forEach(key=>selectedCartKeys.add(key));
  }
}
function selectedCartEntries(){
  return Object.entries(cart).filter(([key])=>selectedCartKeys.has(key));
}
function selectedItems(){
  return selectedCartEntries().reduce((sum,[,qty])=>sum+Number(qty || 0),0);
}
function selectedPrice(){
  return selectedCartEntries().reduce((sum,[key,qty])=>{
    const line = getCartLine(key);
    return sum + (line ? line.price * qty : 0);
  },0);
}
function toggleCartSelection(key){
  if(selectedCartKeys.has(key)) selectedCartKeys.delete(key);
  else if(cart[key]) selectedCartKeys.add(key);
  if(typeof renderCart === "function") renderCart();
}
function toggleSelectAll(){
  const keys = Object.keys(cart);
  const allSelected = keys.length > 0 && keys.every(key=>selectedCartKeys.has(key));
  selectedCartKeys.clear();
  if(!allSelected) keys.forEach(key=>selectedCartKeys.add(key));
  if(typeof renderCart === "function") renderCart();
}

function rupiah(n){
  return "Rp" + Number(n || 0).toLocaleString("id-ID");
}

/* Key keranjang mendukung produk + variasi. Format: productId::variantId */
function makeCartKey(productId, variantId){
  return variantId ? `${productId}::${variantId}` : productId;
}
function parseCartKey(key){
  const parts = String(key).split("::");
  return { productId: parts[0], variantId: parts.length > 1 ? parts.slice(1).join("::") : null };
}
function getProductVariants(product){
  if(product && Array.isArray(product.variants) && product.variants.length) return product.variants;
  return product ? [{ id:"default", name:"Paket Utama", price:product.price, stock:999, type:"", warranty:"" }] : [];
}
function getCartLine(key){
  const parsed = parseCartKey(key);
  const product = PRODUCTS.find(x=>x.id===parsed.productId);
  if(!product) return null;
  const variant = parsed.variantId
    ? getProductVariants(product).find(v=>v.id===parsed.variantId)
    : null;
  return {
    key,
    product,
    variant,
    price: variant && variant.price != null ? variant.price : product.price,
    variantName: variant ? variant.name : ""
  };
}

function totalItems(){
  return Object.values(cart).reduce((a,b)=>a+Number(b || 0),0);
}
function totalPrice(){
  return Object.entries(cart).reduce((sum,[key,qty])=>{
    const line = getCartLine(key);
    return sum + (line ? line.price * qty : 0);
  },0);
}

/* Cart dot + floating cart bar */
function refreshCartBar(){
  const items = totalItems();
  const dot = document.getElementById("cart-dot");
  if(dot){
    if(items>0){ dot.style.display="flex"; dot.textContent=items; } else { dot.style.display="none"; }
  }
  const barCount = document.getElementById("bar-count");
  const barTotal = document.getElementById("bar-total");
  if(barCount) barCount.textContent = items + " item dipilih";
  if(barTotal) barTotal.textContent = rupiah(totalPrice());
}

/* Tambah/kurang qty berdasarkan key produk/variasi. */
function changeQty(key, delta, showBarOnThisPage){
  const cur = cart[key]||0;
  const next = Math.max(0, cur+delta);
  if(next===0){
    delete cart[key];
    selectedCartKeys.delete(key);
  }else{
    cart[key]=next;
  }
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
function showToast(msg, duration=1600){
  const el = document.getElementById("toast");
  if(!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove("show"), duration);
}

/* WA checkout — dipakai halaman cart */
function checkoutWA(){
  const entries = selectedCartEntries();
  if(entries.length===0){
    showToast("Pilih minimal 1 produk untuk checkout");
    return;
  }
  let lines = ["Halo AVstore, saya mau order:"];
  entries.forEach(([key,qty])=>{
    const line = getCartLine(key);
    if(!line) return;
    const variantText = line.variantName ? ` (${line.variantName})` : "";
    lines.push(`- ${line.product.name}${variantText} x${qty} — ${rupiah(line.price*qty)}`);
  });
  lines.push("");
  lines.push(`Total: ${rupiah(selectedPrice())}`);
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
initCartSelection();
