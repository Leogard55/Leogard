// For parallax scrolling effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const background = document.body;
  
    // Adjust the background position to simulate parallax
    background.style.backgroundPosition = 'center ' + (scrolled * 0.5) + 'px';
  });
  