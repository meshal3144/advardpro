// كشف التمرير وإضافة كلاس scrolled
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});




// التحكم في slider الأسهم - معدل للعكس
const projectsGrid = document.querySelector('.projects-grid');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

// بدل أسماء الأسهم بدل ما تغير القيم
nextArrow.addEventListener('click', () => {
    projectsGrid.scrollBy({ left: -350, behavior: 'smooth' });
});

prevArrow.addEventListener('click', () => {
    projectsGrid.scrollBy({ left: 350, behavior: 'smooth' });
});





// التحكم في قائمة الهاتف
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// إغلاق القائمة عند الضغط على رابط
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});









document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
