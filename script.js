// BDU Konspekt Bankı - JavaScript

// ═══════════════════════════════════════════════════════════
// TEXNİKİ İŞ REJİMİ
// Firebase Console → Firestore → settings → site → maintenance: true/false
// Admin girişi üçün URL-ə ?admin=bdugizli123 əlavə edin
// ═══════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC0pQKqXugTV3qBYTVH21mztdLAf5c5p2A",
  authDomain: "bdu-konspekt-banki.firebaseapp.com",
  projectId: "bdu-konspekt-banki",
  storageBucket: "bdu-konspekt-banki.firebasestorage.app",
  messagingSenderId: "497443439455",
  appId: "1:497443439455:web:7742a5df64d1a2f6582cea"
};

function showMaintenancePage() {
  document.body.innerHTML = `
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
          }
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .maintenance-page {
            min-height: 100vh;
            display: flex;
            font-family: 'Segoe UI', Arial, sans-serif;
          }
          .left-panel {
            width: 45%;
            background: linear-gradient(-45deg, #667eea, #764ba2, #6B8DD6, #8E54E9);
            background-size: 400% 400%;
            animation: gradientMove 15s ease infinite;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          .left-panel::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
          .logo-container {
            position: relative;
            z-index: 1;
            text-align: center;
            animation: slideRight 1s ease-out;
          }
          .logo-container img {
            width: 150px;
            height: 150px;
            filter: drop-shadow(0 10px 30px rgba(0,0,0,0.3));
            animation: float 4s ease-in-out infinite;
          }
          .logo-text {
            color: #fff;
            font-size: 1.8rem;
            font-weight: 700;
            margin-top: 25px;
            text-shadow: 2px 2px 15px rgba(0,0,0,0.3);
          }
          .logo-subtext {
            color: rgba(255,255,255,0.8);
            font-size: 1rem;
            margin-top: 10px;
          }
          .floating-circle {
            position: absolute;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
          }
          .circle1 { width: 200px; height: 200px; top: -60px; left: -60px; animation: float 8s ease-in-out infinite; }
          .circle2 { width: 150px; height: 150px; bottom: -40px; right: -40px; animation: float 6s ease-in-out infinite reverse; }
          .circle3 { width: 80px; height: 80px; top: 30%; right: 10%; animation: float 5s ease-in-out infinite 0.5s; }
          
          .right-panel {
            width: 55%;
            background: #f8fafc;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px;
          }
          .right-content {
            max-width: 450px;
            text-align: center;
            animation: slideLeft 1s ease-out;
          }
          .tool-icon {
            font-size: 5rem;
            margin-bottom: 25px;
            display: inline-block;
            animation: float 3s ease-in-out infinite;
          }
          .maintenance-title {
            font-size: 2.5rem;
            color: #1e293b;
            font-weight: 700;
            margin-bottom: 15px;
          }
          .maintenance-text {
            font-size: 1.15rem;
            color: #64748b;
            margin-bottom: 35px;
            line-height: 1.6;
          }
          .loader-dots {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 40px;
          }
          .loader-dots span {
            width: 14px;
            height: 14px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            animation: pulse 1.4s ease-in-out infinite;
          }
          .loader-dots span:nth-child(2) { animation-delay: 0.2s; }
          .loader-dots span:nth-child(3) { animation-delay: 0.4s; }
          .info-cards {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .info-card {
            background: #fff;
            padding: 18px 25px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            gap: 15px;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .info-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
          }
          .info-card .card-icon {
            font-size: 1.5rem;
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .info-card .card-text {
            text-align: left;
          }
          .info-card .card-label {
            font-size: 0.85rem;
            color: #94a3b8;
            margin-bottom: 3px;
          }
          .info-card .card-value {
            font-size: 1rem;
            color: #1e293b;
            font-weight: 600;
          }
          .kofe-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 25px;
            padding: 12px 28px;
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: #fff;
            text-decoration: none;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .kofe-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
          }
          
          @media (max-width: 768px) {
            .maintenance-page { flex-direction: column; }
            .left-panel { width: 100%; min-height: 35vh; padding: 40px 20px; }
            .right-panel { width: 100%; min-height: 65vh; }
            .logo-container img { width: 100px; height: 100px; }
            .logo-text { font-size: 1.4rem; }
            .maintenance-title { font-size: 1.8rem; }
            .maintenance-text { font-size: 1rem; }
            .floating-circle { animation-duration: 15s !important; }
            .tool-icon { animation-duration: 6s !important; }
            .logo-container img { animation-duration: 8s !important; }
            .left-panel { animation-duration: 30s !important; }
            .info-card .card-value { font-size: 0.9rem; word-break: break-all; }
          }
        </style>
        <div class="maintenance-page">
          <div class="left-panel">
            <div class="floating-circle circle1"></div>
            <div class="floating-circle circle2"></div>
            <div class="floating-circle circle3"></div>
            <div class="logo-container">
              <img src="favicon.svg" alt="BDU Logo" onerror="this.outerHTML='<div style=\\'font-size:6rem;\\'>📚</div>'">
              <div class="logo-text">BDU Konspekt Bankı</div>
              <div class="logo-subtext">Tələbələr üçün bilik platforması</div>
            </div>
          </div>
          <div class="right-panel">
            <div class="right-content">
              <div class="tool-icon">🛠️</div>
              <h1 class="maintenance-title">Texniki iş gedir</h1>
              <p class="maintenance-text">Saytımızı sizin üçün daha yaxşı və daha sürətli edirik. Tezliklə geri dönəcəyik!</p>
              <div class="loader-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="info-cards">
                <div class="info-card">
                  <div class="card-icon">⏰</div>
                  <div class="card-text">
                    <div class="card-label">Təxmini vaxt</div>
                    <div class="card-value">Tezliklə</div>
                  </div>
                </div>
                <div class="info-card" onclick="window.location.href='mailto:bdu.datastore@gmail.com'" style="cursor:pointer;">
                  <div class="card-icon">📧</div>
                  <div class="card-text">
                    <div class="card-label">Əlaqə</div>
                    <div class="card-value">bdu.datastore<wbr>@gmail.com</div>
                  </div>
                </div>
              </div>
              <a href="https://kofe.al/@asadoff" target="_blank" class="kofe-btn">☕ Mənə kofe al</a>
            </div>
          </div>
        </div>
      `;
  document.body.style.display = 'block';
  document.body.style.margin = '0';
}

// Firebase-dən maintenance statusunu yoxla
async function checkMaintenance() {
  const urlParams = new URLSearchParams(window.location.search);
  const adminKey = urlParams.get('admin');
  
  // Admin girişi varsa, yoxlama etmə
  if (adminKey === 'bdugizli123') return;
  
  try {
    // Firebase artıq başlatılmayıbsa, başlat
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    
    const db = firebase.firestore();
    const doc = await db.collection('settings').doc('site').get();
    
    if (doc.exists && doc.data().maintenance === true) {
      showMaintenancePage();
    }
  } catch (error) {
    console.log('Maintenance check error:', error);
  }
}

// Script yüklənəndə dərhal yoxla
checkMaintenance();

document.addEventListener('DOMContentLoaded', function(){
  // Hide loader when page is ready
  const loader = document.getElementById('loader');
  if(loader){
    setTimeout(function(){
      loader.classList.add('hidden');
    }, 500);
  }
  
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


