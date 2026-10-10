const colors = {
  blush: '#f0c4c0',
  rose: '#dc7f88',
  crimson: '#a8203c',
  gold: '#e6a93f',
  sky: '#8fb4d3',
  ink: '#2e2b4a',
  paper: '#faeedd',
  leaf: '#6f8f66',
  leafLight: '#8aa27a',
  champagne: '#f1d9a8',
  sea: '#b9d5e8',
  land: '#efe0c0',
  coast: '#7d4a45',
};

const photoUrl = (name) => `img/${name}.jpg`;

const textBlock = (x, y, width, classes, text, extraStyle = '') => `
  <p class="t ${classes}" style="left:${x}%;top:${y}%;width:${width}%;${extraStyle}">${text}</p>`;

const handwritten = (x, y, width, classes, text, delay, extraStyle = '') =>
  textBlock(x, y, width, classes, text, `--d:${delay}s;${extraStyle}`);

const polaroid = (x, y, width, rotation, photo, caption, date, options = '') => {
  const tapeColor = options.includes('ty') ? 'y' : options.includes('tb') ? 'b' : '';
  const tapeRotation = -rotation * 2 + 3;

  return `
  <figure class="photo pol ${options}" style="left:${x}%;top:${y}%;width:${width}%;--r:${rotation}deg;--tr:${tapeRotation}deg" data-g="${photo}" data-cap="${caption}" tabindex="0" role="button" aria-label="Open photo: ${caption}">
    <i class="tape ${tapeColor}"></i>
    <img class="img" src="${photoUrl(photo)}" alt="${caption}" loading="lazy">
    <figcaption>${caption}<small>${date}</small></figcaption>
  </figure>`;
};

const snapshot = (x, y, width, rotation, photo, caption) => `
  <figure class="photo nopol" style="left:${x}%;top:${y}%;width:${width}%;--r:${rotation}deg;border:1.2cqw solid var(--print)" data-g="${photo}" data-cap="${caption}" tabindex="0" role="button" aria-label="Open photo: ${caption}">
    <i class="tape y"></i>
    <img class="img" src="${photoUrl(photo)}" alt="${caption}" loading="lazy">
  </figure>`;

const sticker = (x, y, color, symbol, rotation = 0, size = 6) => `
  <span class="stk" style="left:${x}%;top:${y}%;color:${color};font-size:${size}cqw;transform:rotate(${rotation}deg)">${symbol}</span>`;

const flower = (x, y, width, rotation, petalColor = colors.rose, centerColor = colors.gold) => {
  const petalAngles = [0, 72, 144, 216, 288];
  const petals = petalAngles
    .map((angle) => `<ellipse rx="11" ry="20" cy="-17" transform="rotate(${angle})"/>`)
    .join('');

  return `
  <svg class="fl" style="left:${x}%;top:${y}%;width:${width}%;--r:${rotation}deg;transform:rotate(${rotation}deg)" viewBox="0 0 100 150">
    <path d="M50 150C48 110 52 80 50 50" stroke="${colors.leaf}" stroke-width="3" fill="none"/>
    <path d="M50 110c-20-4-28-16-30-26 14 2 26 8 30 26zM50 95c18-6 26-16 28-26-14 3-24 10-28 26z" fill="${colors.leafLight}" opacity=".8"/>
    <g fill="${petalColor}" opacity=".85" transform="translate(50 36)">${petals}</g>
    <circle cx="50" cy="36" r="8" fill="${centerColor}"/>
  </svg>`;
};

const stamp = (x, y, text, rotation) => `
  <div class="stamp" style="left:${x}%;top:${y}%;--r:${rotation}deg">${text}</div>`;

const heartPhoto = (x, y, width, photo, caption, rotation = 0) => `
  <div class="hp photo" style="left:${x}%;top:${y}%;width:${width}%;aspect-ratio:1/.9;box-shadow:none;background:none;transform:rotate(${rotation}deg)" data-g="${photo}" data-cap="${caption}" tabindex="0" role="button" aria-label="Open photo: ${caption}">
    <img class="img" src="${photoUrl(photo)}" alt="${caption}" style="aspect-ratio:1/.9">
  </div>`;

const coverPhoto = (x, y, width, photo, caption, rotation = 0) => `
  <figure class="photo cvp" style="left:${x}%;top:${y}%;width:${width}%;--r:${rotation}deg" data-g="${photo}" data-cap="${caption}" tabindex="0" role="button" aria-label="Open photo: ${caption}">
    <img class="img" src="${photoUrl(photo)}" alt="${caption}">
  </figure>`;

const pages = [
  `<div class="page cover">
    ${flower(6, 4, 16, -14, colors.blush)}
    ${flower(80, 6, 14, 12, colors.sky)}
    ${sticker(78, 82, colors.gold, '✦', 0, 7)}
    ${sticker(12, 78, colors.rose, '♡', -10, 8)}
    ${sticker(70, 45, colors.gold, '✦', 0, 4)}
    ${textBlock(10, 8, 80, 'ser c', 'for my favorite person ♡', `color:${colors.blush};font-size:4.6cqw`)}
    ${coverPhoto(19, 16, 62, 'cover', 'us', -2)}
    <div class="label">
      ${handwritten(0, 0, 100, 'h1 c', 'Happy one year&8months Baby ♡', 0.6, 'position:static;font-size:8cqw')}
      ${textBlock(0, 0, 100, 'ser c', 'memories worth keeping', 'position:static;margin-top:2cqw;color:var(--brown);font-size:4.4cqw')}
    </div>
    ${textBlock(10, 90, 80, 'hand c', 'a little book of us', `color:${colors.champagne}`)}
  </div>`,

  `<div class="page tint-peach">
    ${handwritten(8, 5, 70, 'h1', 'Unforgettable Memories', 0.4, 'font-size:8.5cqw')}
    ${textBlock(8, 15, 60, 'pen', '', 'font-size:4.6cqw')}
    <div class="dash" style="left:50%;top:26%;height:62%"></div>
    ${polaroid(9, 23, 34, -4, 'sleeve', 'ပေါ်တော်မှုဘုရားသွားခဲ့တုန်းကအရမ်းပျော်ခဲ့သော', 'First Pagoda Date', 'tb')}
    ${handwritten(55, 26, 38, 'hand', '← where it all began, and I had no idea', 1.4)}
    ${handwritten(10, 52, 36, 'hand', '', 2, 'text-align:right')}
    ${polaroid(53, 46, 34, 3, 'batik', 'Digital အချိန်တုန်းကအတူရှိခဲ့တာလေး', 'we neglect the teacher🤭', 'ty')}
    ${polaroid(11, 70, 32, -2, 'jackets', 'ကိုတို့ရဲ့ပထမဆုံးDateလေး', '12.2.2025')}
    ${handwritten(55, 76, 36, 'hand', '', 2.6)}
    ${sticker(46, 22, colors.crimson, '♡', 0, 4)}
    ${sticker(46, 50, colors.crimson, '♡', 0, 4)}
    ${sticker(46, 76, colors.crimson, '♡', 0, 4)}
    ${sticker(80, 10, colors.gold, '✦', 10, 5)}
  </div>`,

  `<div class="page tint-sky">
    ${handwritten(7, 4, 86, 'h1 c', 'Our Memory', 0.4, 'font-size:12cqw')}
    ${polaroid(6, 19, 40, -5, 'selfie', 'ဖက်ထားတာအရမ်းချစ်နေတာ🤭', '', '')}
    ${polaroid(54, 17, 38, 4, 'class', 'သူငယ်ချင်းတွေရှိလည်းမရှက်ဘူး လုပ်ပေးတာဘဲ', 'ကောက်စိန်လေး')}
    ${polaroid(10, 56, 38, 3, 'close', 'အတူရှိနေရရင်အမြဲပျော်တယ်', '', 'tb')}
    ${polaroid(56, 52, 36, -3, 'white', 'ပင်လယ်ဓားပြပေါ်ကSelfieတစ်ခု❤', 'with sunset', '')}
    ${handwritten(8, 90, 60, 'pen', 'I would live these days again.', 2, 'font-size:5.5cqw')}
    ${sticker(78, 88, colors.crimson, '♡', 10, 7)}
    ${sticker(47, 45, colors.gold, '✦', 0, 5)}
    ${sticker(3, 50, colors.rose, '♡', -20, 5)}
  </div>`,

  `<div class="page tint-sage">
    ${handwritten(8, 6, 80, 'h1', 'ကိုကို့ကိုတစ်ခုခုရွေးပေးပါဉီး', 0.4, 'font-size:7cqw')}
    ${textBlock(8, 19, 70, 'ser', 'အခုanniလေးကစပြီးနောက်ဘာတွေဆက်ဖြစ်ချင်လည်း?', 'font-size:4cqw;color:var(--indigo)')}
    <button class="chip" style="left:8%; font-size:3cqw ;top:30%" aria-pressed="false">ရန်ဖြစ်တာလျော့မယ်</button>
    <button class="chip" style="left:44%;  font-size:3cqw ;top:33%" aria-pressed="false">အများကြီးပိုချစ်ပေးမယ်</button>
    <button class="chip" style="left:20%; font-size:3cqw ;top:42%" aria-pressed="false">စိတ်ကောက်ဉီးမှာဘဲ</button>
    ${handwritten(8, 56, 70, 'hand', '<span class="mark">I want to be there for it ♡</span>', 1.6, 'font-size:6.6cqw')}
    ${snapshot(8, 68, 30, -4, 'purple', 'a little moment')}
    ${snapshot(40, 72, 26, 5, 'rose', 'us')}
    ${flower(72, 56, 22, 8, colors.blush)}
    ${flower(62, 64, 16, -10, colors.sky, colors.paper)}
    ${sticker(80, 30, colors.gold, '✦', 0, 6)}
  </div>`,

  `<div class="page tint-blush">
    ${handwritten(8, 5, 80, 'h1', 'မေ့မရတဲ့အခိုက်အတန့်လေးတွေ', 0.4, 'font-size:6cqw')}
    ${handwritten(8, 26.5, 44, 'hand', 'တစ်နှစ်ပြည့်တော့ ကိတ်လေးခွဲ🎉', 1, 'font-size:3cqw;transform:rotate(-4deg)')}
    ${handwritten(50, 31, 44, 'hand red', 'နှစ်ယောက်အတူတူမိုးရေထဲစိုရွှဲနေလည်းပျော်နေခဲ့တာ😭', 1.5, 'font-size:3cqw;transform:rotate(3deg)')}
    ${handwritten(8, 60, 48, 'hand', '', 2, 'font-size:5.2cqw;transform:rotate(-2deg)')}
    ${handwritten(30, 81.5, 52, 'pen', 'အရမ်းလှပတဲ့နေဝင်ချိန်လေးမှာပေါ့🌄', 2.5, 'font-size:3cqw;transform:rotate(2deg)')}
    ${handwritten(10, 92, 50, 'hand', 'ကိုဘယ်တော့မှမမေ့ခဲ့ပါဘူး🩷', 3, 'font-size:3.5cqw')}
    ${snapshot(8, 31, 28, -5, 'cake', 'your smile')}
    ${polaroid(58, 38, 32, 5, 'garden', 'you', '♡', 'ty')}
    ${snapshot(36, 62, 24, 4, 'lake', 'late nights')}
    ${sticker(48, 14, colors.rose, '♡', -8, 8)}
    ${sticker(86, 20, colors.gold, '★', 12, 6)}
    ${sticker(5, 82, colors.crimson, '♡', 8, 5)}
    ${flower(78, 66, 18, 14, colors.gold, colors.crimson)}
    <div class="washi" style="left:8%;top:30%;width:18%;transform:rotate(-4deg)"></div>
  </div>`,

  `<div class="page tint-kraft">
    <div class="letter">
      ${handwritten(0, 0, 100, 'hand', 'Dear Ah Chit Sone,', 0.6, 'position:static;font-size:6cqw;font-weight:700')}
      <p style="margin-top:4cqw ; font-size:3.5cqw ; line-height:1.4">ကိုယ်မင်းကိုချစ်တယ်နော် 
      ဘာတွေဘယ်လိုဘဲဖြစ်လာဖြစ်လာ 
      ချစ်လက်ကလေးကိုအမြဲကိုင်ပြီးရင်ဆိုင်မှာမို့လို့ 
      ကိုကို့ကိုမလွှတ်ချပါနဲ့နော်</p>
      <p style="--d:3.2s; font-size:3.5cqw ; line-height:1.4">အမြဲချစ်ပေးနေမှာမို့ ဝမ်းမနည်းရဘူးနော် ကို့ရင်ခွင်ထဲအမြဲခိုလှုံခွင့်ပေးမှာပါ</p>
      <p style="--d:5s ; font-size:3.5cqw ; line-height:1.4">တစ်နေ့ကြရင်လက်ထပ်ကြပြီးအမြဲအတူတူရှိချင်သွားမိပါတယ် အချစ်ရဆုံးသူလေးရေ</p>
      <p style="text-align:right;margin-top:1cqw">your Koko ♡</p>
    </div>
    <i class="clip" style="left:10%;top:3%;--r:-6deg"></i>
    ${sticker(84, 86, colors.crimson, '🩷', 12, 7)}
  </div>`,

  `<div class="page tint-mint">
    ${handwritten(7, 4, 80, 'h1', 'our favorite dates', 0.4, 'font-size:7.6cqw')}
    ${polaroid(6, 16, 32, -6, 'welcome1', '', 'Fresher Welcome', '')}
    ${polaroid(40, 14, 28, 5, 'everyday', '', 'Everyday date😂', 'ty')}
    ${polaroid(70, 18, 26, -3, 'car', '', 'Travel Date', 'tb')}
    ${polaroid(8, 50, 28, 4, 'mirror', '', 'Yangon Date', 'tb')}
    ${polaroid(38, 46, 34, -4, 'image', '', 'Phyapon Date', 'tb')}
    ${polaroid(72, 52, 24, 6, 'cinema', '', 'Cinema Date', 'ty')}
    ${handwritten(10, 86, 70, 'pen', 'more of these, please.', 2, 'font-size:6cqw')}
    ${sticker(80, 84, colors.rose, '♡', -12, 7)}
    ${sticker(36, 40, colors.gold, '✦', 0, 4)}
    ${sticker(66, 80, colors.crimson, '~', 0, 6)}
  </div>`,

  `<div class="page tint-sand">
    ${handwritten(8, 5, 80, 'h1', 'if we could go Bagan', 0.4, 'font-size:7.6cqw')}
    ${flower(5, 24, 20, -8, colors.blush)}
    ${flower(24, 19, 22, 6, colors.gold, colors.crimson)}
    ${flower(38, 30, 18, 12, colors.sky, colors.paper)}
    ${flower(12, 37, 19, 8, colors.rose)}
    ${flower(30, 39, 21, -6, colors.blush, colors.crimson)}
    ${flower(1, 43, 13, -14, colors.sky, colors.paper)}
    ${handwritten(12, 64, 40, 'hand', 'ဒီလို pose နဲ့ ပုံလေးတွေရိုက်ချင်မိတယ် ↗', 2.2, 'font-size:4.4cqw')}
    ${handwritten(12, 76, 45, 'hand', 'anywhere, with you ♡', 3, `font-size:5.6cqw;color:${colors.crimson}`)}
    <div class="photo" style="left:57%;top:24%;width:36%;--r:4deg;padding:2cqw;cursor:default">
      <img class="img" src="${photoUrl('tarot')}" alt="postcard" style="aspect-ratio:3/4;height:auto;object-position:50% 40%">
      ${textBlock(0, 0, 100, 'hand c', 'greetings from ♡', 'position:static;font-size:3.6cqw;margin-top:1cqw')}
    </div>
    ${stamp(10, 86, 'WISH<br>LIST', 4)}
    <div class="washi" style="left:68%;top:20%;width:18%;transform:rotate(8deg)"></div>
    ${sticker(82, 88, colors.rose, '♡', 0, 6)}
  </div>`,

  `<div class="page tint-gold">
    ${handwritten(12, 30, 76, 'pen c', 'အမြဲစိတ်ချမ်းသာအောင်ထားပါ့မယ်နော်🥺', 0.6, 'font-size:10cqw;line-height:1.05')}
    ${sticker(46, 72, colors.crimson, '♡', 0, 9)}
  </div>`,

  `<div class="page tint-peach">
    ${flower(4, 52, 18, -8, colors.blush)}
    ${flower(76, 48, 20, 10, colors.sky, colors.paper)}
    ${flower(18, 62, 14, -2, colors.gold, colors.crimson)}
    ${handwritten(10, 8, 80, 'h1 c', 'Thank you for being part of my story. ♡', 0.6, 'font-size:7.8cqw')}
    ${polaroid(32, 38, 38, -3, 'last', 'us, always', '12.10.2026', 'ty')}
    ${handwritten(10, 86, 80, 'hand c', 'ကို့ဘဝအတွက်အမြဲအနားမှာရှိပြီး အားဖြည့်ပေးပါနော်', 2.4, 'font-size:2cqw')}
    ${sticker(80, 32, colors.gold, '✦', 0, 6)}
    ${sticker(14, 34, colors.rose, '♡', -10, 6)}
  </div>`,
];

const TOTAL_PAGES = pages.length;
const MOBILE_QUERY = '(max-width:760px)';
const LAST_SPREAD = 5;
const FLIP_DURATION = 1300;
const FLIP_EASING = 'cubic-bezier(.45,.05,.25,1)';

const book = document.getElementById('book');
const pageNumber = document.getElementById('pn');
const prevButton = document.getElementById('pv');
const nextButton = document.getElementById('nx');

let current = 0;
let isMobile = null;
let leaves = [];
let isFlipping = false;
let lastIndex = LAST_SPREAD;

const face = (content, side, extraClass = '') =>
  `<div class="face ${extraClass} ${side}">${content}<div class="shade"></div></div>`;

const bookShift = (index) => {
  if (isMobile) return '';
  const offset = index === 0 ? -25 : index === LAST_SPREAD ? 25 : 0;
  return `translateX(${offset}%)`;
};

function build() {
  const mobileNow = matchMedia(MOBILE_QUERY).matches;
  if (mobileNow === isMobile) return;

  if (isMobile !== null) {
    current = mobileNow ? Math.min(current * 2, 9) : Math.round(current / 2);
  }

  isMobile = mobileNow;
  book.className = 'book' + (isMobile ? ' m' : '');
  book.innerHTML = '<div class="stack"></div>';
  leaves = [];

  lastIndex = isMobile ? 9 : LAST_SPREAD;
  const leafCount = isMobile ? TOTAL_PAGES : TOTAL_PAGES / 2;

  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';

    if (isMobile) {
      leaf.innerHTML =
        face(pages[i], 'r') +
        face('<div class="page"></div>', 'l blank', 'b');
    } else {
      leaf.innerHTML =
        face(pages[2 * i], 'r') +
        face(pages[2 * i + 1], 'l', 'b');
    }

    book.appendChild(leaf);
    leaves.push(leaf);
  }

  layout();
}

function layout() {
  const leafCount = leaves.length;

  leaves.forEach((leaf, i) => {
    leaf.style.transform = i < current ? 'rotateY(-180deg)' : 'none';
    leaf.style.zIndex = i < current ? i : leafCount - i;
  });

  const visiblePages = isMobile
    ? [current]
    : [2 * current - 1, 2 * current].filter((n) => n >= 0 && n < TOTAL_PAGES);

  leaves.forEach((leaf, i) => {
    leaf.querySelectorAll('.face .page').forEach((page, side) => {
      const pageIndex = isMobile ? (side ? -1 : i) : 2 * i + side;
      page.classList.toggle('on', visiblePages.includes(pageIndex));
    });
  });

  let shownNumber;
  if (isMobile) {
    shownNumber = current + 1;
  } else if (current === 0) {
    shownNumber = 1;
  } else if (current === LAST_SPREAD) {
    shownNumber = TOTAL_PAGES;
  } else {
    shownNumber = 2 * current;
  }

  pageNumber.textContent = String(shownNumber).padStart(2, '0') + ' / ' + TOTAL_PAGES;
  book.style.transform = bookShift(current);
  prevButton.disabled = current === 0;
  nextButton.disabled = current === lastIndex;
}

function go(direction) {
  const target = current + direction;
  if (isFlipping || target < 0 || target > lastIndex) return;
  isFlipping = true;

  const leaf = direction > 0 ? leaves[current] : leaves[current - 1];
  const from = direction > 0 ? 0 : -180;
  const to = direction > 0 ? -180 : 0;

  leaf.style.zIndex = 300;
  leaf.style.transform = `rotateY(${to}deg)`;
  book.style.transform = bookShift(target);

  leaf.animate(
    [
      { transform: `rotateY(${from}deg)` },
      {
        transform: `rotateY(${(from + to) / 2}deg) skewY(${direction > 0 ? -2 : 2}deg) translateZ(30px)`,
        offset: 0.5,
      },
      { transform: `rotateY(${to}deg)` },
    ],
    { duration: FLIP_DURATION, easing: FLIP_EASING }
  );

  leaf.querySelectorAll('.shade').forEach((shade) => {
    shade.animate(
      [{ opacity: 0 }, { opacity: 0.5, offset: 0.5 }, { opacity: 0 }],
      { duration: FLIP_DURATION, easing: 'ease-in-out' }
    );
  });

  setTimeout(() => {
    current = target;
    layout();
    isFlipping = false;
  }, FLIP_DURATION);
}

prevButton.onclick = () => go(-1);
nextButton.onclick = () => go(1);

const lightbox = document.getElementById('lb');

function openLightbox(photo) {
  const image = lightbox.querySelector('.img');
  image.src = photoUrl(photo.dataset.g);
  image.alt = photo.dataset.cap;
  lightbox.querySelector('figcaption').textContent = photo.dataset.cap;
  lightbox.classList.add('open');
}

const closeLightbox = () => lightbox.classList.remove('open');
lightbox.addEventListener('click', closeLightbox);

book.addEventListener('click', (event) => {
  const photo = event.target.closest('.photo,.hp');
  if (photo) {
    openLightbox(photo);
    return;
  }

  const chip = event.target.closest('.chip');
  if (chip) {
    chip.setAttribute('aria-pressed', chip.getAttribute('aria-pressed') !== 'true');
    return;
  }

  const clickedFace = event.target.closest('.face');
  if (!clickedFace) return;
  go(clickedFace.classList.contains('r') ? 1 : -1);
});

document.addEventListener('keydown', (event) => {
  const lightboxOpen = lightbox.classList.contains('open');

  if (event.key === 'Escape') {
    closeLightbox();
  } else if (lightboxOpen) {
    if (event.key === 'Enter' || event.key === ' ') closeLightbox();
  } else if (event.key === 'ArrowRight') {
    go(1);
  } else if (event.key === 'ArrowLeft') {
    go(-1);
  } else if (event.key === ' ' && !event.target.closest('button,.photo')) {
    event.preventDefault();
    go(1);
  } else if (event.key === 'Enter' && event.target.closest && event.target.closest('.photo')) {
    openLightbox(event.target.closest('.photo'));
  }
});

let touchStartX = null;

document.addEventListener(
  'touchstart',
  (event) => {
    touchStartX = event.touches[0].clientX;
  },
  { passive: true }
);

document.addEventListener(
  'touchend',
  (event) => {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) > 45) go(distance < 0 ? 1 : -1);
  },
  { passive: true }
);

addEventListener('resize', build);
build();

const dustCanvas = document.getElementById('dust');
const dustContext = dustCanvas.getContext('2d');
const specks = [];

function sizeCanvas() {
  dustCanvas.width = innerWidth;
  dustCanvas.height = innerHeight;
}

sizeCanvas();
addEventListener('resize', sizeCanvas);

for (let i = 0; i < 45; i++) {
  specks.push({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 1.6 + 0.4,
    speed: Math.random() * 0.00006 + 0.00002,
    alpha: Math.random() * 0.4 + 0.1,
    phase: Math.random() * 6,
  });
}

function drawDust(time) {
  dustContext.clearRect(0, 0, dustCanvas.width, dustCanvas.height);

  for (const speck of specks) {
    speck.y -= speck.speed * 16;
    speck.x += Math.sin(time / 3000 + speck.phase) * 0.0002;
    if (speck.y < 0) speck.y = 1;

    dustContext.fillStyle = `rgba(246,237,219,${speck.alpha})`;
    dustContext.beginPath();
    dustContext.arc(
      speck.x * dustCanvas.width,
      speck.y * dustCanvas.height,
      speck.radius,
      0,
      Math.PI * 2
    );
    dustContext.fill();
  }

  requestAnimationFrame(drawDust);
}

drawDust(0);

const musicButton = document.getElementById('mu');
const song = document.getElementById('song');

song.loop = true;
song.volume = 0.8;

function showMusicState(playing) {
  musicButton.textContent = playing ? '♡ Playing' : '♡ Music';
  musicButton.setAttribute('aria-pressed', playing);
}

musicButton.onclick = () => {
  if (song.paused) {
    song
      .play()
      .then(() => showMusicState(true))
      .catch(() => showMusicState(false));
  } else {
    song.pause();
    showMusicState(false);
  }
};
