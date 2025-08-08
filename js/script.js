// Создание лепестков
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Случайные размеры и позиции
    const size = Math.random() * 20 + 10;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 10 + 8;
    const rotation = Math.random() * 360;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.transform = `rotate(${rotation}deg)`;
    
    particlesContainer.appendChild(particle);
  }
}

// Обратный отсчет
function updateCountdown() {
  const weddingDate = new Date("September 3, 2025 11:20:00").getTime();
  
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById("days").innerText = days.toString().padStart(2, '0');
      document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
      document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    } else {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "<h3 style='grid-column: 1/-1; text-align: center; color: var(--primary-pink);'>Счастливого брака!</h3>";
    }
  }, 1000);
}

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Анимация при скролле
function animateOnScroll() {
  const elements = document.querySelectorAll('.detail-card, .gallery-item, .story-text, .couple-member, .map-container');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Управление музыкой
let audio     = document.getElementById('backgroundMusic');
let musicBtn  = document.getElementById('musicBtn');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying){                       // ▶️ было playing –> ставим паузу
    audio.pause();
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    musicBtn.classList.remove('playing');  // <--  снимем spin
    isPlaying = false;
  }else{                                // ⏸  было pause –> запускаем
    audio.play().catch(e => console.log('Автовоспроизведение заблокировано:', e));
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    musicBtn.classList.add('playing');     // <--  добавим spin
    isPlaying = true;
  }
});


// Остановка музыки при закрытии вкладки/браузера
window.addEventListener('beforeunload', function() {
  audio.pause();
  isPlaying = false;
});

window.addEventListener('blur', function() {
  if (isPlaying) {
    audio.pause();
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    isPlaying = false;
  }
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  updateCountdown();
  
  // Настройка анимаций для элементов
  document.querySelectorAll('.detail-card, .gallery-item, .story-text, .couple-member, .map-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Проверить элементы при загрузке
});

/* gallery animation */
document.addEventListener('DOMContentLoaded', () =>{
  const options   = { threshold: 0.25 };         // срабатываем, когда видно 25 %
  const observer  = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');      // включаем анимацию
        obs.unobserve(entry.target);             // больше не наблюдаем
      }
    });
  }, options);

  document.querySelectorAll('.gallery-item')
          .forEach(item => observer.observe(item));
});

