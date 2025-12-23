// Set birthday date: January 16, 2026
const birthdayDate = new Date('2026-01-16T00:00:00').getTime();
// const birthdayDate = new Date('2025-12-23T09:41:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  if (distance <= 0) {
  // Stop countdown
  clearInterval(countdownInterval);

  // 1) Change main heading text (keep span for Ritika)
  const mainHeading = document.getElementById('mainHeading');
  if (mainHeading) {
    mainHeading.innerHTML = `Happy Birthday <span id="ritikaName" class="name-highlight">Ritika</span>🎂`;
  }

  // 2) Replace countdown boxes with in-place message
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    countdownEl.innerHTML = `
      <div class="time-box">
        <span class="birthday-message">It's your birthday!🎉</span>
        <p></p>
      </div>
    `;
  }

  // 3) Balloons for extra celebration
  createBalloons();

  // 4) Enable "Let's Celebrate" button
  const celebrateBtn = document.getElementById('celebrateBtn');
  if (celebrateBtn) {
    celebrateBtn.classList.remove('disabled-link');
  }
  // 5) Show small "click here" hint with curly arrow
  const celebrateHint = document.getElementById('celebrateHint');
  if (celebrateHint) {
    celebrateHint.classList.add('active');
  }

  return; // stop further execution once birthday is reached
}


  // Still counting down: update timer values
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}




// Create floating balloons emoji (continuous animation on page load)
function createBalloonsEmoji() {
    const container = document.getElementById('balloons-container');
    const balloonEmojis = ['🎈', '🎊', '🎉', '🎁'];
    
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon-emoji';
        balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDuration = (7 + Math.random() * 4) + 's';
        container.appendChild(balloon);

        setTimeout(() => balloon.remove(), 11000);
    }, 600);
}

// Create floating balloons shapes (for popup when birthday arrives)
function createBalloons() {
    const container = document.getElementById('balloons-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff9ff3', '#feca57'];
    
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDuration = (4 + Math.random() * 3) + 's';
        container.appendChild(balloon);

        setTimeout(() => balloon.remove(), 7000);
    }, 300);
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Start balloon emoji animation when page loads
createBalloonsEmoji();









