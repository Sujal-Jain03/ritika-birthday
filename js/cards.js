function showCard2() {
    document.getElementById('card1').classList.remove('active');
    document.getElementById('card2').classList.add('active');
    initializeNoButton();
}

function showCard3() {
    document.getElementById('card2').classList.remove('active');
    document.getElementById('card3').classList.add('active');
}

function goToCelebration() {
    window.location.href = 'celebration.html';
}

// Create floating hearts
function createHearts() {
    const container = document.getElementById('hearts-container');
    const hearts = ['❤️', '💖', '💝', '💗', '💓', '💕', '💞','🎀'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (5 + Math.random() * 3) + 's';
        heart.style.fontSize = (1.5 + Math.random() * 1) + 'rem';
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 8000);
    }, 400);
}

// Initialize No Button only when Card 2 is shown
// Initialize No Button only when Card 2 is shown
function initializeNoButton() {
  const noBtn = document.getElementById('noBtn');
  const buttonGroup = document.querySelector('#card2 .button-group');

  if (!noBtn || !buttonGroup) return;

  // Remove existing event listeners by cloning and replacing
  const newNoBtn = noBtn.cloneNode(true);
  noBtn.parentNode.replaceChild(newNoBtn, noBtn);

  // Keep it in normal flow, just allow fun transforms
  newNoBtn.style.position = 'relative';

  function moveNoButton() {
    // random offsets within a small range so it doesn't leave the card
    const offsetX = (Math.random() * 160) - 80;  // -80px to +80px
    const offsetY = (Math.random() * 80) - 40;   // -40px to +40px
    newNoBtn.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.9)`;
  }

  newNoBtn.addEventListener('mouseenter', moveNoButton);

  newNoBtn.addEventListener('mouseleave', function () {
    // Only reset scale, keep position to stay playful
    newNoBtn.style.transform += ' scale(1)';
  });

  newNoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    moveNoButton();
  });
}




// Start hearts animation when page loads
createHearts();
