function openMessage() {
    const envelope = document.getElementById('envelope');
    const messageContent = document.getElementById('messageContent');
    
    envelope.classList.add('opened');
    
    setTimeout(() => {
        envelope.classList.add('hidden');
        messageContent.classList.remove('hidden');
        createConfetti();
        createFloatingHearts();
    }, 800);
}

// Confetti
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff9ff3', '#feca57', '#667eea', '#764ba2'];
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 10 + 5;
        
        confetti.style.position = 'absolute';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        confetti.style.borderRadius = shape === 'circle' ? '50%' : '0';
        
        if (shape === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.borderLeft = size / 2 + 'px solid transparent';
            confetti.style.borderRight = size / 2 + 'px solid transparent';
            confetti.style.borderBottom = size + 'px solid ' + colors[Math.floor(Math.random() * colors.length)];
            confetti.style.background = 'transparent';
        }
        
        const duration = 3 + Math.random() * 3;
        const delay = Math.random() * 0.5;
        confetti.style.animation = `confettiFall ${duration}s linear ${delay}s forwards`;
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), (duration + delay) * 1000);
    }
}

// Floating hearts
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-background');
    const hearts = ['💖', '💝', '💗', '💓', '💕', '💞', '❤️', '🎀'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.opacity = Math.random() * 0.6 + 0.2;
        heart.style.animation = `floatUp ${6 + Math.random() * 4}s linear forwards`;
        heart.style.pointerEvents = 'none';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 10000);
    }, 500);
}

// Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            top: 110%;
            transform: translateY(100vh) rotate(720deg);
        }
    }
    
    @keyframes floatUp {
        0% {
            bottom: -50px;
            opacity: 0;
            transform: translateX(0) rotate(0deg);
        }
        10% {
            opacity: 0.7;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(40px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
