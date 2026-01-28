
  const container = document.getElementById('pixelHearts');

  const HEART_SRC = 'https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png';

  const CAT_SRCS = [
    'https://png.pngtree.com/recommend-works/png-clipart/20250730/ourmid/pngtree-cute-pixel-cat-character-png-image_16944762.webp',
    'https://freepngimg.com/download/painting/84774-square-art-pixel-rectangle-cat-hd-image-free-png.png',
    'https://png.pngtree.com/png-vector/20250416/ourmid/pngtree-a-cute-pixel-art-illustration-of-smiling-white-paint-with-transparent-vector-png-image_15998177.png',
    'https://art.pixilart.com/aa34a88e46bf2e9.png'
  ];

  const COUNT = 40;

  for (let i = 0; i < COUNT; i++) {
    const isCat = Math.random() < 0.5; // 25% chance cat
    const img = document.createElement('img');

    if (isCat) {
      img.src = CAT_SRCS[Math.floor(Math.random() * CAT_SRCS.length)];
      img.className = 'pixel-cat';
    } else {
      img.src = HEART_SRC;
      img.className = 'pixel-heart';
    }

    const size = isCat
      ? Math.random() * 16 + 28   // cats bigger
      : Math.random() * 12 + 12;  // hearts smaller

    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 8;
    const delay = Math.random() * -20;

    img.style.width = size + 'px';
    img.style.left = left + 'vw';
    img.style.animationDuration = duration + 's';
    img.style.animationDelay = delay + 's';

    container.appendChild(img);
  }

let noClickCount = 0;
const card = document.querySelector('.card');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const buttons = document.querySelector('.valentine-buttons');


yesBtn.addEventListener('click', () => {
card.innerHTML = '<h1>INSTAGRAMZE MOMWERE ! ! !</h1>';
});


noBtn.addEventListener('click', () => {
if (noClickCount < 2) {
const rect = buttons.getBoundingClientRect();
const btnRect = noBtn.getBoundingClientRect();


const maxX = rect.width - btnRect.width;
const maxY = rect.height - btnRect.height;


noBtn.style.position = 'absolute';
noBtn.style.left = Math.random() * maxX + 'px';
noBtn.style.top = Math.random() * maxY + 'px';
noBtn.textContent = 'Are you sure?????????';


noClickCount++;
} else {
card.innerHTML = '<h1>: (</h1>';
}
});