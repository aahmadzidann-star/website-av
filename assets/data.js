/* ============ DATA (dipakai bersama semua halaman) ============ */
const WA_ADMIN = "6287717164906";

const ICONS = {
  streaming: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M9.5 9l5 3-5 3V9z" fill="currentColor" stroke="none"/><path d="M8 21h8" stroke-linecap="round"/></svg>`,
  music: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18V5l11-2v13" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>`,
  spark: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" stroke-linejoin="round"/></svg>`,
  phone: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2" stroke-linecap="round"/></svg>`,
  unlock: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 017.6-1.8" stroke-linecap="round"/></svg>`,
};

const CATEGORIES = ["Semua", "Aplikasi Premium", "Unblock IMEI", "iPhone"];

const PRODUCTS = [

  {
    id:"netflix", name:"Netflix Premium", category:"Aplikasi Premium", price:28000,
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"1 Bulan", price:28000, stock:10, xofCode:"net1u", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"streaming", img:"assets/netflix.png",
    shortDesc:"Private Profil, 1 Bulan, 4K UHD, Full Garansi.",
    longDesc:"Tonton ribuan film dan serial eksklusif berkualitas HD tanpa batas.\n• 4K UHD, Support All Device\n• Private Profile (1 Profile 1 User)\n• Full Garansi 1 Bulan\n• Ada Kendala ? Segera Hubungi Admin !"
  },

  {
    id:"spotify", name:"Spotify Premium", category:"Aplikasi Premium", price:20000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"Paket 1", price:20000, stock:10, xofCode:"spo1b", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"music", img:"assets/spotify.png",
    shortDesc:"Private Akun, 1 Bulan, Akun Seller, Full Garansi.",
    longDesc:"Nikmati jutaan lagu tanpa iklan, kualitas audio tinggi, dan bisa didownload untuk didengarkan offline.\n• Private Akun\n• Full Garansi 1 Bulan\n• Akun Dari Seller, Tinggal Login\n• Ada Kendala ? Segera Hubungi Admin !"
  },

  {
    id:"youtube", name:"Youtube Premium", category:"Aplikasi Premium", price:18000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"1 Bulan", price:18000, stock:10, xofCode:"yt1b", type:"Private", warranty:"Full Garansi" },
      { id:"paket-2", name:"3 Bulan", price:30000, stock:10, xofCode:"yt3b", type:"Private", warranty:"Full Garansi" },
      { id:"paket-3", name:"5 Bulan", price:45000, stock:10, xofCode:"yt5b", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"streaming", img:"assets/youtube.png",
    shortDesc:"Private Akun, Akun Seller, Full Garansi.",
    longDesc:"Nikmati tayangan video dan musik bebas iklan yang bisa diputar di latar belakang.\n• Paket Indplan & Mixplan \n• Full Garansi\n• Akun Dari Seller, Tinggal Login\n• Ada Kendala ? Segera Hubungi Admin !"
  },

  {
    id:"disney", name:"Disney+ Hotstar", category:"Aplikasi Premium", price:12000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"Paket 1", price:12000, stock:10, xofCode:"disney", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"spark", img:"assets/disney.png",
    shortDesc:"Sharing Akun, 1 Bulan, Akun Seller, Full Garansi.",
    longDesc:"Akses ke katalog Disney, Marvel, Star Wars, Pixar, sampai tayangan olahraga pilihan. Satu akun, hiburan lengkap untuk seluruh keluarga.\n• Sharing Akun\n• Premium, Support All Device\n• Ada Kendala ? Segera Hubungi Admin !"
   },

  {
    id:"capcut", name:"Capcut Pro", category:"Aplikasi Premium", price:13000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"7 Hari", price:13000, stock:10, xofCode:"cc35d", type:"Private", warranty:"Full Garansi" },
      { id:"paket-2", name:"1 Bulan", price:35000, stock:10, xofCode:"cc7d", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"streaming", img:"assets/capcut.png",
    shortDesc:"Private Akun, Akun Seller, Full Garansi.",
    longDesc:"Edit video layaknya profesional dengan akses penuh ke semua efek dan fitur berbayar.\n• Paket Pro Full Garansi \n• Akun Dari Seller, Tinggal Login\n• Ada Kendala ? Segera Hubungi Admin !"
  },

  {
    id:"alightmotion", name:"Alight Motion", category:"Aplikasi Premium", price:13000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"Paket 1", price:13000, stock:10, xofCode:"alightmotion", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"spark", img:"assets/am.png",
    shortDesc:"Private Akun, 1 Tahun, Akun Seller, Full Garansi.",
    longDesc:"Nikmati Alight Motion Private dengan akses premium hingga 1 tahun.\n• Private 1 Tahun\n• Garansi 11 Bulan (Selama Metode Bisa)\n• Khusus Android (Tidak Bisa di iPhone/iOS)\n• Ada Akses\n• Ada Kendala? Segera Hubungi Admin!"
   },

  {
    id:"bstation", name:"Bstation Premium", category:"Aplikasi Premium", price:15000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"Paket 1", price:15000, stock:10, xofCode:"bstation3b", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"spark", img:"assets/am.png",
    shortDesc:"Private Akun, 1 Tahun, Akun Seller, Full Garansi.",
    longDesc:"Nikmati Alight Motion Private dengan akses premium hingga 1 tahun.\n• Private 1 Tahun\n• Garansi 11 Bulan (Selama Metode Bisa)\n• Khusus Android (Tidak Bisa di iPhone/iOS)\n• Ada Akses\n• Ada Kendala? Segera Hubungi Admin!"
   },

  {
    id:"prime", name:"Prime Video", category:"Aplikasi Premium", price:13000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"Paket 1", price:13000, stock:10, xofCode:"prime", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"spark", img:"assets/prime.png",
    shortDesc:"Private Akun, 1 Bulan, Akun Seller, Full Garansi.",
    longDesc:"Akses serial orisinal pemenang penghargaan dan koleksi film eksklusif Amazon.\n• Private Akun, Bisa All Device\n• Full Garansi 1 Bulan\n• Ada Kendala ? Segera Hubungi Admin !"
   },

   {
    id:"canva", name:"Canva Pro", category:"Aplikasi Premium", price:10000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"Paket 1", price:10000, stock:10, xofCode:"canvaedu", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"spark", img:"assets/canva.png",
    shortDesc:"Via Invite, Lifetime, Paket Pro, Garansi.",
    longDesc:"Buat desain grafis memukau dengan mudah menggunakan jutaan elemen dan template premium.\n• Via invite email (email mu diinvite ke pro)\n• Durasi Lifetime Garansi 5 Bulan\n• Ada Kendala ? Segera Hubungi Admin !"
  },

  {
    id:"vidio", name:"Vidio Platinum", category:"Aplikasi Premium", price:30000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"Mobile", price:28000, stock:10, xofCode:"vidio", type:"Private", warranty:"Full Garansi" },
      { id:"paket-2", name:"All Device", price:40000, stock:10, xofCode:"vidioall", type:"Private", warranty:"Full Garansi" }
    ],
    icon:"spark", img:"assets/vidio.png",
    shortDesc:"Private Akun, 1 Bulan, Full Garansi.",
    longDesc:"Pusat tayangan olahraga terlengkap, sinetron favorit, dan serial orisinal lokal eksklusif tanpa jeda iklan.\n• Mobile = Hanya Bisa di HP/TAB\n• All Device = Support Semua Perangkat\n• Paket Platinum\n• Full Garansi 1 Bulan\n• Ada Kendala ? Segera Hubungi Admin !"
  },

  {
    id:"imei1", name:"Unblock IMEI", category:"Unblock IMEI", price:125000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"1 Bulan", price:125000, stock:10, type:"Proses Fast", warranty:"Full Garansi" },
      { id:"paket-2", name:"3 Bulan", price:125000, stock:10, type:"Proses Slow", warranty:"Full Garansi" }
    ],
    icon:"unlock", img:"assets/imei.png",
    shortDesc:"Layanan Unblock IMEI iPhone, Full Garansi.",
    longDesc:"Layanan unblock IMEI untuk iPhone yang terblokir/blacklist, dengan masa garansi full. Proses dibantu penuh oleh admin, tinggal kirim data unit kamu."
  },

  {
    id:"iphone13", name:"iPhone 13 256GB", category:"iPhone", price:5400000, 
    // Edit daftar variasi produk ini sesuai kebutuhan.
    variants:[
      { id:"paket-1", name:"Paket 1", price:5400000, stock:10, type:"Private", warranty:"Full Garansi" }
    ],
    icon:"phone", img:"assets/iphone.png",
    shortDesc:"Unit Nominus, Bisa cek ig : @avphone_katalog",
    longDesc:"iPhone 13 256GB Inter ALL Operator, unit mulus nominus , fungsi semua on, battery health diatas 90, info selengkapnya silahkan cek ig @avphone_katalog"
  },
];

const TESTIMONI = [
  { name:"Rafi A.", initial:"R", stars:5, msg:"Order Netflix langsung fast respon, kurang dari 10 menit udah aktif. Recommended banget!", tag:"Aplikasi Premium" },
  { name:"Dinda P.", initial:"D", stars:5, msg:"Respon admin kilat! Langsung bisa pakai CapCut Pro kurang dari 10 menit. Aman dan terpercaya!", tag:"Aplikasi Premium" },
  { name:"Yoga S.", initial:"Y", stars:5, msg:"Unblock IMEI HP aku yang tadinya gabisa pakai jaringan, sekarang udah normal lagi. Prosesnya jelas dan gak lama.", tag:"Unblock IMEI" },
  { name:"Salsa M.", initial:"S", stars:4, msg:"Langganan Spotify + Disney sekalian di sini, harganya jauh lebih hemat dibanding beli sendiri-sendiri.", tag:"Aplikasi Premium" },
];

const KONTAK = [
  { label:"WhatsApp Admin", value:"Chat Admin", url:"https://wa.me/6287717164906", icon:"wa" },
  { label:"TikTok AVDigital", value:"@avdigital_store", url:"https://www.tiktok.com/@avdigital_store", icon:"tiktok" },
  { label:"Grup WhatsApp", value:"Gabung grup info & promo", url:"https://chat.whatsapp.com/J1AjXEeL6js3p9kNr7y8P3", icon:"group" },
  { label:"Saluran Rekomendasi Film", value:"WhatsApp Channel", url:"https://whatsapp.com/channel/0029Var3te5FnSzBPGY7T30i", icon:"channel" },
  { label:"Bot Telegram", value:"Bot Auto Order", url:"https://t.me/avdigital_bot", icon:"telegram" },
  { label:"Bot WhatsApp", value:"Bot Auto Order", url:"https://wa.me/6287766403975", icon:"wa" },
  { label:"TikTok AVPhone", value:"@avphonestore", url:"https://www.tiktok.com/@avphonestore", icon:"tiktok" },
  { label:"Instagram", value:"@avphone_katalog", url:"https://www.instagram.com/avphone_katalog/", icon:"instagram" },
];

const KICONS = {
  wa: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3z"/></svg>`,
  group: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c.7-3.2 3.3-5 6.5-5s5.8 1.8 6.5 5" stroke-linecap="round"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 20c.4-2.2 1.7-3.7 3.6-4.4" stroke-linecap="round"/></svg>`,
  channel: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11l16-7-5 17-4-6-6-2z" stroke-linejoin="round"/></svg>`,
  telegram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 3L2 11l6 2m14-10l-4 18-8-6m12-12L8 13" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
  tiktok: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3v11.5a3.5 3.5 0 11-3.5-3.5" stroke-linecap="round"/><path d="M14 3c.3 2.3 2 4 4.5 4.2" stroke-linecap="round"/></svg>`,
  instagram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>`,
};
