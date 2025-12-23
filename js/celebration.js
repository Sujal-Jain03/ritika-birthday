let stage = 0;
const actionBtn = document.getElementById('actionBtn');
const lightStrip = document.getElementById('lightStrip');
const cake = document.getElementById('cake');
const banner = document.getElementById('banner');
const music = document.getElementById('birthdayMusic');

actionBtn.addEventListener('click', () => {
    stage++;
    
    switch(stage) {
        case 1:
            // Turn on lights (change to dark mode)
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            actionBtn.textContent = 'Play Music 🎵';
            lightStrip.classList.remove('hidden');
            break;
            
        case 2:
            // Play music
            music.play();
            actionBtn.textContent = 'Show the Cake 🎂';
            break;
            
        case 3:
            // Show cake and banner
            cake.classList.remove('hidden');
            banner.classList.remove('hidden');
            actionBtn.textContent = 'Wait, I have a message for you POTATO 🥔';
            break;
            
        case 4:
            // Go to message page
            window.location.href = 'message.html';
            break;
    }
});
