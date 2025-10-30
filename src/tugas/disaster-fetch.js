const section = document.querySelector("#programs > div");
if (!section) {
  console.error("⚠️ Section #programs tidak ditemukan di index.html");
}

const form = document.createElement("form");
form.className = "mt-8 flex flex-col sm:flex-row justify-center gap-3";

const input = document.createElement("input");
input.type = "search";
input.placeholder = "Cari kata kunci (mis. flood, earthquake)…";
input.className =
  "w-full sm:w-80 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500";

const select = document.createElement("select");
select.className = "border rounded-lg px-3 py-2";
select.innerHTML = `
  <option value="Indonesia" selected>Indonesia</option>
  <option value="">Semua Negara</option>
  <option value="Philippines">Filipina</option>
  <option value="India">India</option>
  <option value="Japan">Jepang</option>
  <option value="United States">Amerika Serikat</option>
`;

const button = document.createElement("button");
button.type = "submit";
button.className =
  "rounded-lg bg-rose-600 px-5 py-2 text-white hover:bg-rose-700";
button.textContent = "Cari";

form.append(input, select, button);

const statusEl = document.createElement("p");
statusEl.className = "mt-4 text-slate-500 text-center";
statusEl.textContent = "Menampilkan bencana terbaru di Indonesia...";

const grid = document.createElement("div");
grid.className =
  "mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch [grid-auto-rows:1fr]";

section.appendChild(form);
section.appendChild(statusEl);
section.appendChild(grid);

function thumbFor(title = "", type = "") {
  const text = `${title} ${type}`.toLowerCase();

  const pick = (url) => `${url}?auto=format&fit=crop&w=1200&q=60`;

  if (text.includes("tsunami"))
    return pick("https://images.unsplash.com/photo-1504719261368-5a180c56d44a");
  if (text.includes("earthquake"))
    return pick("https://images.unsplash.com/photo-1509395176047-4a66953fd231");
  if (text.includes("flood"))
    return pick("https://images.unsplash.com/photo-1508182311256-e3f7d50ed1dc");
  if (text.includes("landslide"))
    return pick("https://images.unsplash.com/photo-1501594907352-04cda38ebc29");
  if (text.includes("volcano"))
    return pick("https://images.unsplash.com/photo-1519681393784-d120267933ba");
  if (text.includes("drought"))
    return pick("https://images.unsplash.com/photo-1472396961693-142e6e269027");
  if (
    text.includes("storm") ||
    text.includes("cyclone") ||
    text.includes("typhoon")
  )
    return pick("https://images.unsplash.com/photo-1500673922987-e212871fec22");

  // fallback generic
  return pick("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee");
}

async function fetchDisasters(q = "", country = "Indonesia") {
  grid.innerHTML = "";
  statusEl.textContent = "Mengambil data dari ReliefWeb API...";

  try {
    const url = new URL("https://api.reliefweb.int/v1/disasters");
    url.searchParams.set("appname", "bantucare");
    url.searchParams.set("profile", "full");
    url.searchParams.set("sort[]", "date:desc");
    url.searchParams.set("limit", "6");
    if (q) url.searchParams.set("query[value]", q);
    if (country) {
      url.searchParams.set("filter[field]", "country");
      url.searchParams.set("filter[value]", country);
    }

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    const data = json?.data || [];
    if (data.length === 0) {
      statusEl.textContent = "Tidak ada hasil ditemukan untuk filter ini.";
      return;
    }

    data.forEach((item) => {
      const f = item.fields;
      const title = f.name || "Tanpa Judul";
      const type = f.primary_type?.name || "Bencana";
      const countries =
        (f.country || []).map((c) => c.name).join(", ") || "Global";
      const started = f.date?.[0]?.name || f.date?.[0]?.from || "";
      const link =
        f.url ||
        `https://reliefweb.int/disasters?search=${encodeURIComponent(title)}`;
      const img = thumbFor(title, type);

      const percent = Math.floor(Math.random() * 60) + 30;
      const donasi = (Math.random() * 700 + 100).toFixed(0);
      const target = (donasi / (percent / 100)).toFixed(0);

      let tanggal = "Tidak diketahui";
      if (started && !isNaN(new Date(started).getTime())) {
        tanggal = new Date(started).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }

      const card = document.createElement("div");
      card.className =
        "bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col";

      card.innerHTML = `
        <div class="relative">
          <img src="${img}" alt="${type}" 
               class="h-48 w-full object-cover bg-gray-100"
               onerror="this.src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60'">
          <div class="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full shadow">${type}</div>
        </div>
        <div class="p-5 text-left flex flex-col grow">
          <p class="text-sm text-gray-500 mb-1">📍 ${countries}</p>
          <h3 class="text-lg font-semibold mb-2">${title}</h3>
          <p class="text-sm text-gray-600 mb-3">Mulai: ${tanggal}</p>
          
          <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div class="bg-rose-600 h-2 rounded-full" style="width:${percent}%"></div>
          </div>
          <div class="flex justify-between text-sm text-gray-700 mb-4">
            <span>Rp ${donasi}.000.000</span>
            <span>dari Rp ${target}.000.000</span>
          </div>
          <a href="${link}" target="_blank" 
             class="mt-auto block w-full text-center bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition">
            Detail
          </a>
        </div>
      `;
      grid.appendChild(card);
    });

    statusEl.textContent = `Menampilkan ${data.length} item${
      country ? ` • ${country}` : ""
    }${q ? ` • "${q}"` : ""}.`;
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Gagal memuat data. Silakan coba lagi.";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = input.value.trim();
  const c = select.value.trim();
  fetchDisasters(q, c);
});

fetchDisasters("", "Indonesia");
