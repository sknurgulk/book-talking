
const BOOKS = [
    // ===== ҚАЗАҚ ӘДЕБИЕТІ =====
    {
        id: 1,
        cat: 'kazakh',
        title: "Абай жолы",
        author: "Мұхтар Әуезов",
        genre: "Роман",
        emoji: "📜",
        hot: true,
        image: "https://adebiportal.kz/storage/tmp/resize/authors/1200_0_a02e6a6132ea810492634ba59f5a9eed.jpg",
        color: "#2d1b00",
        rating: 5.0,
        desc: "Абай Құнанбайұлының өмірі мен шығармашылығы туралы эпопея.",
        pdf: "https://online.pubhtml5.com/gzki/emnj/",
        video: "https://youtube.com/shorts/viO0U8sJspc?si=I0isk3fo21X2nYHw"
    },
    {
        id: 2,
        cat: 'kazakh',
        title: "Қан мен тер",
        author: "Әбдіжәмил Нұрпейісов",
        genre: "Роман",
        emoji: "🌊",
        hot: false,
        image: "https://upload.wikimedia.org/wikipedia/kk/thumb/3/3c/%D3%98%D0%B1%D0%B4%D1%96%D0%B6%D3%99%D0%BC%D1%96%D0%BB_%D0%9D%D2%B1%D1%80%D0%BF%D0%B5%D0%B9%D1%96%D1%81%D0%BE%D0%B2.jpeg/250px-%D3%98%D0%B1%D0%B4%D1%96%D0%B6%D3%99%D0%BC%D1%96%D0%BB_%D0%9D%D2%B1%D1%80%D0%BF%D0%B5%D0%B9%D1%96%D1%81%D0%BE%D0%B2.jpeg",
        color: "#001a2d",
        rating: 4.9,
        desc: "Арал теңізіндегі балықшылар өмірі туралы роман.",
        pdf: "https://soyle.kz/upload/orig/article/385525_1608554350.pdf",
        video: "https://youtube.com/shorts/d2wQrO5b61M?si=WYgNHnTaOWgxBkzN"
    },
    {
        id: 3,
        cat: 'kazakh',
        title: "Гаухартас",
        author: "Дулат Исабеков",
        genre: "Повесть",
        emoji: "🌿",
        hot: false,
        image: "https://astanatv.kz/cache/imagine/1200/uploads/article/2025/2/22/1740195436474.jpeg",
        color: "#0d2200",
        rating: 4.7,
        desc: "Салтанат есімді кейіпкердің тағдыры баяндалады.",
        pdf: "https://ru.scribd.com/document/792928021/%D0%94%D1%83%D0%BB%D0%B0%D1%82-%D0%98%D1%81%D0%B0%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-%D0%93%D0%B0%D1%83%D1%85%D0%B0%D1%80%D1%82%D0%B0%D1%81",
        video: "https://youtube.com/shorts/DI9dqAv1K2o?si=xQgXfsOJiCas3AX4"
    },
    {
        id: 4,
        cat: 'kazakh',
        title: "Ботагөз",
        author: "Сәбит Мұқанов",
        genre: "Роман",
        emoji: "🌸",
        hot: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/%D0%A1%D0%B0%D0%B1%D0%B8%D1%82_%D0%9C%D1%83%D0%BA%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_%D0%9C%D1%83%D0%BA%D0%B0%D0%BD%D0%BE%D0%B2.jpg",
        color: "#2d0020",
        rating: 4.6,
        desc: "Қазақ қыздарының тағдыры туралы тарихи роман.",
        pdf: "https://pubhtml5.com/gzki/pbhw/",
        video: "https://youtube.com/shorts/lDG9LlVSETA?si=Zl9wKqt54vGdFeG9"
    },
    {
        id: 5,
        cat: 'kazakh',
        title: "Менің атым Қожа",
        author: "Бердібек Соқпақбаев",
        genre: "Повесть",
        emoji: "👦",
        hot: true,
        image: "https://adebiportal.kz/storage/tmp/resize/authors/1200_0_691cdff0b1cfbca5ce1b1787945d1105.jpg",
        color: "#00142d",
        rating: 4.8,
        desc: "Балалар арасындағы достық туралы шығарма.",
        pdf: "https://cbs-saran.gov.kz/wp-content/uploads/2024/01/berdibek_so-pa-baev-meni-_atym_-ozha.pdf",
        video: "https://youtube.com/shorts/-cxNt8vQMFc?si=Vnz5AvxG_HOqph0G"
    },
    {
        id: 6,
        cat: 'kazakh',
        title: "Көшпенділер",
        author: "Ілияс Есенберлин",
        genre: "Роман",
        emoji: "⚔️",
        hot: false,
        image: "https://adebiportal.kz/storage/tmp/resize/authors/1200_0_60399f0d25097d9e7369425217de52c3.jpg",
        color: "#2d1400",
        rating: 4.7,
        desc: "Қазақстан тарихындағы маңызды кезең туралы роман.",
        pdf: "https://pubhtml5.com/gzki/pmmd/",
        video: "https://youtube.com/shorts/F1Sfw-hJreM?si=V6W6fxcree_jQ06s"
    },
    {
        id: 7,
        cat: 'kazakh',
        title: "Қазақ солдаты",
        author: "Ғабит Мүсірепов",
        genre: "Роман",
        emoji: "🎭",
        hot: false,
        image: "https://adebiportal.kz/storage/tmp/resize/authors/1200_0_f07fb748d48c25868b75de40cb51bf81.jpg",
        color: "#1a002d",
        rating: 4.5,
        desc: "қарапайым ауыл баласының нағыз жауынгерге айналу жолы мен майдандағы ерлігі баяндалады.",
        pdf: "https://online.pubhtml5.com/gzki/vtxr/#p=1",
        video: "https://youtube.com/shorts/lBqfgVf2ywI?si=KTeVTEufHZgCY29w"
    },
    {
        id: 8,
        cat: 'kazakh',
        title: "Соңғы парыз",
        author: "Әбдіжәмил Нұрпейісов",
        genre: "Хикая",
        emoji: "🕯️",
        hot: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgdKeARsW5mDhY2BFpN6SFA1dMb32FPKAGQ&s",
        color: "#2d2200",
        rating: 4.6,
        desc: "Қазақ прозасының классикалық шығармасы.",
        pdf: "https://ru.scribd.com/document/844327648/%D3%98-%D0%9D%D2%B1%D1%80%D0%BF%D0%B5%D0%B8-%D1%96%D1%81-%D0%A1%D0%BE%D2%A3%D2%93%D1%8B-%D0%BF%D0%B0%D1%80%D1%8B%D0%B7",
        video: "https://youtube.com/shorts/5hnzeLgcSOI?si=qqwhfTRAOFmOcyum"
    },

    // ===== ОРЫС ӘДЕБИЕТІ =====
    {
        id: 9,
        cat: 'russian',
        title: "Война и мир",
        author: "Лев Толстой",
        genre: "Роман-эпопея",
        emoji: "🏰",
        hot: true,
        image: "https://obrazovaka.ru/wp-content/uploads/2019/04/lev-tolstoy-e1555678835957.jpg",
        color: "#1a0a00",
        rating: 4.9,
        desc: "Наполеон соғысы кезіндегі қоғам туралы шығарма.",
        pdf: "https://tolstoy.ru/upload/iblock/519/voina-i-mir.pdf",
        video: "https://youtube.com/shorts/B_o6YpvYA0o?si=ZIY5yRP37Gyue4OR"
    },
    {
        id: 10,
        cat: 'russian',
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        genre: "Роман",
        emoji: "🔮",
        hot: true,
        image: "https://adebiportal.kz/storage/tmp/resize/authors/1200_0_64dcbcf9e30be5fdb2fd95de311440df.jpg",
        color: "#0d0020",
        rating: 5.0,
        desc: "Мистикалық және философиялық роман.",
        pdf: "https://www.bulgakov.ru/pdf/Master-i-Margarita.pdf",
        video: "https://youtube.com/shorts/WU2KyDY8vOo?si=uH733q1bbcAjft1f"
    },
    {
        id: 11,
        cat: 'russian',
        title: "Преступление и наказание",
        author: "Фёдор Достоевский",
        genre: "Роман",
        emoji: "⚖️",
        hot: false,
        image: "https://cbs.omsk.muzkult.ru/media/2021/04/14/1249454338/1421857567_dostoyevsky4.jpg",
        color: "#200000",
        rating: 4.9,
        desc: "Адам психологиясы туралы терең шығарма.",
        pdf: "https://www.100bestbooks.ru/files/Dostoevskyi_Prestuplenie_i_nakazanie.pdf",
        video: "https://youtube.com/shorts/ek7VIiwMFiU?si=9vLDyWFvRzmwnZsM"
    },
    {
        id: 12,
        cat: 'russian',
        title: "Анна Каренина",
        author: "Лев Толстой",
        genre: "Роман",
        emoji: "🌹",
        hot: false,
        image: "https://adebiportal.kz/storage/tmp/resize/authors/1200_0_385f92c675aa26091ce3bf791ca9fede.png",
        color: "#2d0010",
        rating: 4.8,
        desc: "Махаббат, міндет және қоғам туралы роман.",
        pdf: "https://ktm.kharkov.ua/files/upload/Tolstoyi_L_Anna_KareninaI.a6.pdf",
        video: "https://youtube.com/shorts/hMgHWz3UeT8?si=J-Zk0jHDW5R00aLA"
    },
    {
        id: 13,
        cat: 'russian',
        title: "Отцы и дети",
        author: "Иван Тургенев",
        genre: "Роман",
        emoji: "🌾",
        hot: false,
        image: "https://adebiportal.kz/storage/tmp/resize/authors/1200_0_f577f7d56188f8b87e119546d30f0bdb.jpg",
        color: "#1a1500",
        rating: 4.6,
        desc: "Ұрпақтар арасындағы қайшылықтар туралы роман.",
        pdf: "https://olehnik.ru/files/literatura/%D0%98.%20%D0%A2%D1%83%D1%80%D0%B3%D0%B5%D0%BD%D0%B5%D0%B2%20%D0%BE%D1%82%D1%86%D1%8B%20%D0%B8%20%D0%B4%D0%B5%D1%82%D0%B8%20.pdf",
        video: "https://youtube.com/shorts/teStPN0aw3M?si=MRAxz9JDTHUt9Q5T"
    },

    // ===== ӘЛЕМ ӘДЕБИЕТІ =====
    {
        id: 15,
        cat: 'world',
        title: "Алхимик",
        author: "Паулу Коэльо",
        genre: "Роман",
        emoji: "✨",
        hot: true,
        image: "https://ast.ru/upload/authors/4fc/4fc4cdf723cdd739789743e955e986b1.jpg",
        color: "#2d1500",
        rating: 4.8,
        desc: "Арманды іздеу туралы танымал кітап.",
        pdf: "https://pubhtml5.com/gzki/vcgd/%D0%9F%D0%B0%D1%83%D0%BB%D0%BE_%D0%9A%D0%BE%D1%8D%D0%BB%D1%8C%D0%BE_%D0%90%D0%BB%D1%85%D0%B8%D0%BC%D0%B8%D0%BA/",
        video: "https://youtube.com/shorts/S0yITgHM4pY?si=3f7IyaotYfbLs1Bn"
    },
    {
        id: 16,
        cat: 'world',
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        genre: "Повесть",
        emoji: "🌍",
        hot: false,
        image: "https://fantlab.ru/images/autors/3978",
        color: "#001a2d",
        rating: 5.0,
        desc: "Философиялық ертегі.",
        pdf: "https://www.booksite.ru/archiv_new/02_2016/02.pdf?ysclid=l2hw0f03e8",
        video: "https://youtube.com/shorts/I_WNrmJZcRQ?si=cpTnYiRevm5Qn6fj"
    },
    {
        id: 17,
        cat: 'world',
        title: "Гарри Поттер",
        author: "Дж.К.Роулинг",
        genre: "Фэнтези",
        emoji: "⚡",
        hot: true,
        image: "https://fantlab.ru/images/autors/131",
        color: "#120020",
        rating: 4.9,
        desc: "Сиқыр әлеміндегі оқиға.",
        pdf: "https://adebiportal.kz/upload/iblock/d0c/d0c6c691696e67053925bc9f280c3e75.pdf",
        video: "https://youtube.com/shorts/dZt4zpeFC0Y?si=S5OBby1nB5wHPwdC"
    },
    {
        id: 18,
        cat: 'world',
        title: "1984",
        author: "Джордж Оруэлл",
        genre: "Антиутопия",
        emoji: "👁️",
        hot: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRUI5KUGrG2Z_aK7jfp1LHtpCIolRROagnA&s",
        color: "#0a0a00",
        rating: 4.9,
        desc: "Тоталитарлық қоғам туралы антиутопия.",
        pdf: "https://boomdown.org/sites/default/files/1984_1948.pdf",
        video: "https://youtube.com/shorts/HZy8EZe00nU?si=08ShyqR_quW6bX1A"
    },
    {
        id: 19,
        cat: 'world',
        title: "Шантарам",
        author: "Грегори Робертс",
        genre: "Роман",
        emoji: "🌏",
        hot: false,
        image: "https://7days.ru/upload/images/38e/5bee9e540413f0526ad442d2f93c1.jpg",
        color: "#1a1000",
        rating: 4.7,
        desc: "Мумбай қаласындағы өмір туралы шытырман роман.",
        pdf: "https://ru.scribd.com/document/704415477/%D0%A0%D0%BE%D0%B1%D0%B5%D1%80%D1%82%D1%81-%D0%94%D1%8D%D0%B2%D0%B8%D0%B4-%D0%93%D1%80%D0%B5%D0%B3%D0%BE%D1%80%D0%B8-%D0%A8%D0%B0%D0%BD%D1%82%D0%B0%D1%80%D0%B0%D0%BC-1-%D0%A2%D0%BE%D0%BC",
        video: "https://youtube.com/shorts/crhLNQBVgBU?si=fNqsa5FJfGlkV0vB"
    },

    // ===== ҚАЗІРГІ ЗАМАН =====
    {
        id: 22,
        cat: 'modern',
        title: "Атомдық әдет",
        author: "Джеймс Клир",
        genre: "Self-help",
        emoji: "⚛️",
        hot: true,
        image: "https://snob.ru/indoc/attachments/snob2/da/77/da77e1fb6b9ff91fa7f1f316aecf1cf5a2207224f84d77c5272e856a07e55819.jpg",
        color: "#0a0020",
        rating: 4.8,
        desc: "Кішкентай әдеттердің күші туралы кітап.",
        pdf: "https://ru.scribd.com/document/678740442/%D0%90%D1%82%D0%BE%D0%BC-%D3%99%D0%B4%D0%B5%D1%82%D1%82%D0%B5%D1%80-%D0%94%D0%B6%D0%B5%D0%B9%D0%BC%D1%81-%D0%9A%D0%BB%D0%B8%D1%80",
        video: "https://youtube.com/shorts/VFNDbUO4EPg?si=P9HgDQBPBILu-rCR"
    },
    {
        id: 23,
        cat: 'modern',
        title: "Думай медленно, решай быстро",
        author: "Д.Канеман",
        genre: "Психология",
        emoji: "🧠",
        hot: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjUS2QKEPaxmuM7-V99yuTaawGo9qQA2udg&s",
        color: "#1a0a00",
        rating: 4.8,
        desc: "Ойлау жүйелері туралы кітап.",
        pdf: "http://www.r-5.org/files/books/ethology/human-mind/thinking/Daniel_Kahneman-Thinking_Fast_and_Slow-RU.pdf",
        video: "https://youtube.com/shorts/7OEGxwh3pM8?si=cpwboxMDraemfYzi"
    },
    {
        id: 24,
        cat: 'modern',
        title: "Сапиенс",
        author: "Юваль Ной Харари",
        genre: "Тарих/Ғылым",
        emoji: "🦴",
        hot: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/58/MKr364751_Yuval_Noah_Harari_%28Frankfurter_Buchmesse_2024%29.jpg",
        color: "#002010",
        rating: 4.9,
        desc: "Адамзат тарихының қысқаша баяны.",
        pdf: "https://belousenko.de/books/publicism/harari_sapiens.pdf",
        video: "https://youtube.com/shorts/n9qV3wY58aI?si=ZMdP-cakn5DSx538"
    },
    {
        id: 25,
        cat: 'modern',
        title: "Богатый папа, бедный папа",
        author: "Роберт Кийосаки",
        genre: "Қаржы",
        emoji: "💰",
        hot: false,
        image: "https://cdn.litres.ru/pub/authors/100/00/04/48/00044830.jpg",
        color: "#1a1000",
        rating: 4.7,
        desc: "Қаржылық сауаттылық туралы кітап.",
        pdf: "https://ru.scribd.com/doc/83805164/kiosaki-Robert-%D0%91%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D0%B9-%D0%BF%D0%B0%D0%BF%D0%B0-%D0%B1%D0%B5%D0%B4%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B0%D0%BF%D0%B0",
        video: "https://youtube.com/shorts/awP9FzJ6w1Y?si=C6iR4YpAUlSYS1aB"
    }
];

// =============================================
// YouTube URL → embed URL converter
// Supports: youtu.be/ID, youtube.com/watch?v=ID,
//           youtube.com/shorts/ID, youtube.com/embed/ID
// =============================================
function toYouTubeEmbed(url) {
    if (!url || url.includes('VIDEO_ID')) return null;
    
    // Already embed format
    if (url.includes('youtube.com/embed/')) return url;
    
    let videoId = null;
    
    // youtu.be/VIDEO_ID
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) videoId = shortMatch[1];
    
    // youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) videoId = watchMatch[1];
    
    // youtube.com/shorts/VIDEO_ID
    const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch) videoId = shortsMatch[1];
    
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
    
    return null;
}

let currentFilteredBooks = [...BOOKS];
let selectedBookForReview = null;

// ========== INIT SELECTS ==========
function populateBookSelects() {
    const selects = ['reviewBook', 'dBook'];
    selects.forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        BOOKS.forEach(b => {
            const opt = document.createElement('option');
            opt.value = b.id;
            opt.textContent = `${b.title} — ${b.author}`;
            sel.appendChild(opt);
        });
    });
}

// ========== CATEGORY LABEL ==========
function getCatLabel(cat) {
    const labels = {
        kazakh: '🇰🇿 Қазақ',
        russian: '🇷🇺 Орыс',
        world: '🌍 Әлем',
        modern: '✨ Қазіргі'
    };
    return labels[cat] || '📚';
}

// ========== BOOKS RENDER ==========
function renderBooks(list) {
    const grid = document.getElementById('booksGrid');
    if (!list.length) {
        grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">📚</div><p>Кітап табылмады</p></div>';
        return;
    }
    grid.innerHTML = list.map(b => `
        <div class="book-card" onclick="showBook(${b.id})">
            <div class="book-cover" style="background:linear-gradient(135deg, ${b.color} 0%, #1a1a2e 100%)">
                ${b.image ? `<img src="${b.image}" alt="${b.title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:inherit;">` : `<span style="position:relative;z-index:1;font-size:3.5rem">📖</span>`}
                ${b.hot ? '<div class="book-badge">Үздік</div>' : ''}
            </div>
            <div class="book-info">
                <div class="book-genre">${getCatLabel(b.cat)}</div>
                <div class="book-title">${b.title}</div>
                <div class="book-author">${b.author}</div>
                <div class="book-rating">${'★'.repeat(Math.round(b.rating))} <span style="color:var(--muted);font-size:0.8rem">${b.rating}</span></div>
            </div>
        </div>
    `).join('');
}

function filterBooks(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilteredBooks = cat === 'all' ? [...BOOKS] : BOOKS.filter(b => b.cat === cat);
    renderBooks(currentFilteredBooks);
}

function showBook(id) {
    const b = BOOKS.find(x => x.id === id);
    if (!b) return;
    document.getElementById('bookDetailCover').style.background = b.image ? 'none' : `linear-gradient(135deg, ${b.color} 0%, #1a1a2e 100%)`;
    document.getElementById('bookDetailCover').innerHTML = b.image
        ? `<img src="${b.image}" alt="${b.title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:inherit;">`
        : `<span style="font-size:5rem">📖</span>`;
    document.getElementById('bookDetailGenre').textContent = b.genre;
    document.getElementById('bookDetailTitle').textContent = b.title;
    document.getElementById('bookDetailAuthor').textContent = b.author;
    document.getElementById('bookDetailRating').textContent = '★'.repeat(Math.round(b.rating)) + ' ' + b.rating;
    document.getElementById('bookDetailDesc').textContent = b.desc;
    selectedBookForReview = b;
    openModal('bookModal');
}

function openReviewForBook() {
    closeModal('bookModal');
    if (selectedBookForReview) {
        document.getElementById('reviewBook').value = selectedBookForReview.id;
    }
    document.getElementById('reviews-section').scrollIntoView({ behavior:'smooth' });
    setTimeout(() => document.getElementById('reviewName').focus(), 600);
}

// ========== REVIEWS ==========
let reviews = JSON.parse(localStorage.getItem('btReviews') || '[]');

const DEFAULT_REVIEWS = [
    { name:"Айгерім Н.", book:"Абай жолы", rating:5, text:"Қазақтың ұлттық рухын сезіну үшін міндетті оқуға тиіс шығарма. Мұхтар Әуезовтің таланты таңқаларлық!", date:"2026-03-15" },
    { name:"Сергей В.", book:"Мастер и Маргарита", rating:5, text:"Булгаковтың бұл романын үш рет оқыдым — әр жолы жаңа мағына ашылады. Ұлы шығарма!", date:"2026-03-22" },
    { name:"Данара Қ.", book:"Алхимик", rating:5, text:"Өз арманыма сену үшін осы кітап серпін берді. Өмірімді өзгертті деп айта аламын!", date:"2026-04-01" },
    { name:"Аман Б.", book:"Менің атым Қожа", rating:5, text:"Балалықтың ең жарқын суреті. Балаларым да оқыды — екеуіміз бірге күлдік!", date:"2026-04-03" },
];

function renderReviews() {
    const all = [...DEFAULT_REVIEWS, ...reviews];
    const grid = document.getElementById('reviewsGrid');
    if (!all.length) {
        grid.innerHTML = '<div class="empty-state"><div class="empty-icon">💬</div><p>Әлі пікір жоқ — бірінші болыңыз!</p></div>';
        return;
    }
    grid.innerHTML = all.map(r => `
        <div class="review-card">
            <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
            <div class="review-text">"${r.text}"</div>
            ${r.book ? `<div style="font-size:0.78rem;color:var(--blue);margin-bottom:10px;font-weight:600">📖 ${r.book}</div>` : ''}
            <div class="review-author">
                <div class="review-avatar">${r.name[0]}</div>
                <div>
                    <div class="review-name">${r.name}</div>
                    <div class="review-date">${r.date || ''}</div>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('reviewCount').textContent = all.length + '+';
}

document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const rating = Number(document.querySelector('input[name="star"]:checked')?.value || 0);
    const name = document.getElementById('reviewName').value.trim();
    const bookId = document.getElementById('reviewBook').value;
    const text = document.getElementById('reviewText').value.trim();

    if (!name || !text || !rating || !bookId) { showToast("⚠️ Барлық өрісті толтырыңыз!"); return; }

    const book = BOOKS.find(b => b.id == bookId);
    const today = new Date().toISOString().split('T')[0];
    reviews.push({ name, book: book?.title || '', rating, text, date: today });
    localStorage.setItem('btReviews', JSON.stringify(reviews));
    renderReviews();
    this.reset();
    showToast("✅ Пікіріңіз үшін рахмет!");
});

// ========== DISCUSSIONS ==========
let threads = JSON.parse(localStorage.getItem('btThreads') || '[]');

const DEFAULT_THREADS = [
    { name:"Арман Т.", book:"Абай жолы", topic:"Абайдың философиялық ойлары бүгінгі заманға қаншалықты сай?", date:"2026-04-05", replies:12 },
    { name:"Лена С.", book:"Мастер и Маргарита", topic:"Романдағы Воланд кейіпкері жаман ба, жақсы ба?", date:"2026-04-04", replies:8 },
    { name:"Нұрзат Қ.", book:"Алхимик", topic:"'Бүкіл жер жаратылысы' идеясы — ертегі ме, шындық па?", date:"2026-04-03", replies:5 },
];

function renderThreads() {
    const all = [...DEFAULT_THREADS, ...threads];
    const cont = document.getElementById('threadsContainer');
    document.getElementById('threadCount').textContent = all.length + '+';
    if (!all.length) {
        cont.innerHTML = '<div class="empty-state"><div class="empty-icon">💬</div><p>Тақырып жоқ</p></div>';
        return;
    }
    cont.innerHTML = all.map(t => `
        <div class="thread-item">
            <div class="thread-tag">📖 ${t.book}</div>
            <div class="thread-topic">${t.topic}</div>
            <div class="thread-meta">
                <span>👤 ${t.name}</span>
                <span>📅 ${t.date}</span>
                <span>💬 ${t.replies || 0} жауап</span>
            </div>
        </div>
    `).join('');
}

document.getElementById('discussForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('dName').value.trim();
    const bookId = document.getElementById('dBook').value;
    const topic = document.getElementById('dTopic').value.trim();

    if (!name || !topic || !bookId) { showToast("⚠️ Барлық өрісті толтырыңыз!"); return; }

    const book = BOOKS.find(b => b.id == bookId);
    const today = new Date().toISOString().split('T')[0];
    threads.unshift({ name, book: book?.title || '', topic, date: today, replies: 0 });
    localStorage.setItem('btThreads', JSON.stringify(threads));
    renderThreads();
    this.reset();
    showToast("🚀 Талқылау тақырыбы ашылды!");
});

// ========== MODAL ==========
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.classList.add('modal-open');
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    // Hide footer only if no other modal is open
    if (!document.querySelector('.modal[style*="flex"]')) {
        document.body.classList.remove('modal-open');
    }
}
window.onclick = e => { 
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
};
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(m => { m.style.display='none'; });
        document.body.classList.remove('modal-open');
    }
});

// ========== TOAST ==========
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// ========== SCROLL ==========
function scrollTo(selector) {
    document.querySelector(selector)?.scrollIntoView({ behavior:'smooth' });
}

// ========== INIT ==========
populateBookSelects();
renderBooks(BOOKS);
renderReviews();
renderThreads();

// ========== BOOK MEDIA STORAGE (per-book, persisted) ==========
let bookMedia = JSON.parse(localStorage.getItem('btBookMedia') || '{}');

function saveBookMedia() {
    localStorage.setItem('btBookMedia', JSON.stringify(bookMedia));
}

// ========== SUMMARY MODAL — YouTube + URL input ==========
function openSummaryModal() {
    if (!selectedBookForReview) return;
    const b = selectedBookForReview;
    closeModal('bookModal');

    document.getElementById('summaryModalTitle').textContent = '🎬 ' + b.title + ' — Қысқаша мазмұны';
    document.getElementById('summaryModalAuthor').textContent = b.author + ' · ' + b.genre;
    document.getElementById('summaryText').textContent = b.desc;

    // Video URL is set by developer in BOOKS object only
    const embedUrl = toYouTubeEmbed(b.video);

    renderVideoArea(b.id, embedUrl);
    openModal('summaryModal');
}

function renderVideoArea(bookId, embedUrl) {
    const area = document.getElementById('videoArea');
    // Remove click handler — URL is set by developer in BOOKS object only
    area.onclick = null;
    area.style.cursor = 'default';

    if (embedUrl) {
        area.innerHTML = `
            <div style="position:relative;padding-bottom:56.25%;height:0;border-radius:12px;overflow:hidden;">
                <iframe 
                    src="${embedUrl}"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;border-radius:12px;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        `;
    } else {
        area.innerHTML = `
            <div style="text-align:center;padding:40px 20px;">
                <div style="font-size:3rem;margin-bottom:12px;">🎬</div>
                <p style="color:var(--muted);font-size:0.9rem;">Видео қосылмаған</p>
            </div>
        `;
    }
}

// ========== FULL BOOK MODAL ==========
function openFullBookModal() {
    if (!selectedBookForReview) return;
    const b = selectedBookForReview;
    closeModal('bookModal');
    document.getElementById('fullBookModalTitle').textContent = '📖 ' + b.title;
    document.getElementById('fullBookModalAuthor').textContent = b.author + ' · ' + b.genre;
    openModal('fullBookModal');
    window.open(b.pdf, '_blank');
}

function openPdf() {
    if (!selectedBookForReview) return;
    window.open(selectedBookForReview.pdf, '_blank');
}
