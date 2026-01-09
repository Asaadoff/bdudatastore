// BDU Konspekt Bankı - JavaScript
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('top-nav');
  const menuToggle = document.getElementById('menu-toggle');
  
  // Mobile menu toggle
  if(menuToggle && nav){
    menuToggle.addEventListener('click', function(){
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e){
    if(nav && menuToggle && !nav.contains(e.target) && !menuToggle.contains(e.target)){
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({behavior:'smooth'});
      }
    });
  });
  
  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Animate elements on scroll
  document.querySelectorAll('.faculty, .faq-item, .three-column .col').forEach(function(el){
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
