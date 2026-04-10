const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
let isOpen = false;

function toggleMenu() {
  isOpen = !isOpen;
  
  if (isOpen) {
    sidebar.style.transform = 'scale(1) translateY(0)';
    sidebar.style.opacity = '1';
    sidebar.style.pointerEvents = 'auto';
    overlay.style.background = 'rgba(0,0,0,0.3)';
    overlay.style.pointerEvents = 'auto';
    
    line1.style.transform = 'rotate(45deg) translateY(10px)';
    line2.style.opacity = '0';
    line3.style.transform = 'rotate(-45deg) translateY(-10px)';
  } else {
    sidebar.style.transform = 'scale(0.95) translateY(-10px)';
    sidebar.style.opacity = '0';
    sidebar.style.pointerEvents = 'none';
    overlay.style.background = 'rgba(0,0,0,0)';
    overlay.style.pointerEvents = 'none';
    
    line1.style.transform = 'rotate(0) translateY(0)';
    line2.style.opacity = '1';
    line3.style.transform = 'rotate(0) translateY(0)';
  }
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu when clicking a nav link
const navLinks = sidebar.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
  
  link.addEventListener('mouseenter', function() {
    this.style.background = 'rgba(200, 100, 255, 0.15)';
    this.style.borderLeftColor = 'rgba(200, 100, 255, 0.9)';
    this.style.color = 'rgba(255, 255, 255, 1)';
    this.style.paddingLeft = '20px';
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.background = 'transparent';
    this.style.borderLeftColor = 'transparent';
    this.style.color = 'rgba(255, 255, 255, 0.9)';
    this.style.paddingLeft = '16px';
  });
});
