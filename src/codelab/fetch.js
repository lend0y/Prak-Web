    const form = document.getElementById('searchForm');
    const input = document.getElementById('query');
    const resultsEl = document.getElementById('results');
    const statusEl = document.getElementById('status');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    let currentQuery = '';
    let startIndex = 0;
    const maxResults = 12;
    let totalItems = 0;
    let inFlightController = null; 

    const html = (strings, ...values) =>
    strings.reduce((acc, str, i) => acc + str + (values[i] ?? ''), '');

    function setStatus(message, isError = false) {
    statusEl.textContent = message || '';
    statusEl.style.color = isError ? '#b91c1c' : '#374151';
    }

    function clearResults() {
    resultsEl.innerHTML = '';
    }

    function sanitize(text) {
    return String(text ?? '—').replace(/[<>&]/g, s => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[s]));
    }

    function bookCard(b) {
    const title = sanitize(b.title);
    const authors = sanitize(b.authors?.join(', ') || 'Tidak diketahui');
    const year = sanitize((b.publishedDate || '').split('-')[0] || '—');
    const thumb = b.imageLinks?.thumbnail || b.imageLinks?.smallThumbnail;
    const lang = sanitize(b.language?.toUpperCase() || '');
    const categories = sanitize((b.categories || []).join(', '));
    const preview = b.previewLink || b.infoLink || '#';

    return html`
        <article class="card">
        <div class="thumb">
            ${thumb ? `<img alt="Sampul: ${title}" src="${thumb}">` : '<span class="muted">Tidak ada gambar</span>'}
        </div>
        <div class="content grow">
            <h3 class="title">${title}</h3>
            <div class="meta">${authors} • ${year} ${lang ? `• ${lang}` : ''}</div>
            ${categories ? `<div class="meta">Kategori: ${categories}</div>` : ''}
        </div>
        <div class="actions">
            <a href="${preview}" target="_blank" rel="noopener">Preview</a>
        </div>
        </article>
    `;
    }

    function appendBooks(items = []) {
    const frag = document.createDocumentFragment();
    items.forEach(item => {
        const v = item.volumeInfo || {};
        const wrap = document.createElement('div');
        wrap.innerHTML = bookCard(v);
        frag.appendChild(wrap.firstElementChild);
    });
    resultsEl.appendChild(frag);
    }

    async function fetchBooks(query, { append = false } = {}) {
    if (inFlightController) inFlightController.abort();
    inFlightController = new AbortController();

    const q = query.trim();
    if (!q) {
        setStatus('Masukkan kata kunci pencarian (contoh: "javascript").', true);
        return;
    }

    if (!append) {
        startIndex = 0;
        totalItems = 0;
        clearResults();
    }

    const url = new URL('https://www.googleapis.com/books/v1/volumes');
    url.searchParams.set('q', q);
    url.searchParams.set('startIndex', String(startIndex));
    url.searchParams.set('maxResults', String(maxResults));

    try {
        setStatus('Mengambil data…');
        loadMoreBtn.hidden = true;

        const res = await fetch(url.toString(), {
        method: 'GET',
        signal: inFlightController.signal,
        headers: {
            'Accept': 'application/json'
        }
        });

        if (!res.ok) {
        throw new Error(`Gagal mengambil data (HTTP ${res.status})`);
        }

        const data = await res.json();
        totalItems = Number(data.totalItems || 0);
        const items = Array.isArray(data.items) ? data.items : [];

        if (items.length === 0 && startIndex === 0) {
        setStatus('Tidak ada hasil. Coba kata kunci lain.', true);
        return;
        }

        appendBooks(items);

        startIndex += items.length;

        const shown = Math.min(startIndex, totalItems);
        if (totalItems > shown) {
        setStatus(`Menampilkan ${shown} dari ${totalItems} hasil.`);
        loadMoreBtn.hidden = false;
        } else {
        setStatus(`Menampilkan ${shown} hasil.`);
        loadMoreBtn.hidden = true;
        }
    } catch (err) {
        if (err.name === 'AbortError') {
        return;
        }
        console.error(err);
        setStatus(err.message || 'Terjadi kesalahan tak terduga.', true);
    } finally {
        inFlightController = null;
    }
    }

    form.addEventListener('submit', (e) => {
    e.preventDefault();
    currentQuery = input.value || '';
    fetchBooks(currentQuery, { append: false });
    });

    loadMoreBtn.addEventListener('click', () => {
    if (!currentQuery) return;
    fetchBooks(currentQuery, { append: true });
    });