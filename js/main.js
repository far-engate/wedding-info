// === Лепестки при клике ===
function createPetalClick(e) {
  const petals = document.querySelector('.petals');
  const x = e.clientX;
  const y = e.clientY;

  // Создаём 5–8 лепестков, разлетающихся вверх
  for (let i = 0; i < Math.floor(Math.random() * 4) + 5; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    // Позиция — где кликнули
    petal.style.left = x + 'px';
    petal.style.top = y + 'px';

    // Случайный размер и задержка
    const size = Math.random() * 12 + 8;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    // Случайное направление разлёта
    const angle = Math.random() * 360;
    const distance = Math.random() * 100 + 50;
    petal.style.transform = `rotate(${angle}deg) translate(${distance}px, ${-distance}px)`;

    petals.appendChild(petal);

    // Удаляем через 8 сек
    setTimeout(() => {
      petal.remove();
    }, 8000);
  }
}

// === Обратный отсчёт ===
const countdownEl = document.getElementById('countdown');
const weddingDate = new Date('June 15, 2025 15:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((gap % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${d}д ${h}ч ${m}м ${s}с до свадьбы`;

  if (gap < 0) {
    clearInterval();
    countdownEl.innerHTML = "Мы поженились! 💍";
  }
}, 1000);

// === Автовоспроизведение музыки (на случай, если не сработал autoplay) ===
window.addEventListener('load', () => {
  const music = document.getElementById('bgMusic');
  music.play().catch(e => console.log("Автовоспроизведение заблокировано:", e));
});