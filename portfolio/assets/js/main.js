//=============== SHOW MENU ===============
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

//=============== REMOVE MENU MOBILE ===============
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

//=============== ADD BLUR TO HEADER ===============
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('blur-header');
    } else {
        header.classList.remove('blur-header');
    }
});

//=============== EMAIL JS ===============
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_3mckp6f', 'template_37u41hbD', this)
        .then(() => {
            alert('Message sent successfully');
            this.reset(); // Clear the form after success
        }, (error) => {
            alert('Message not sent (service error)');
            console.error('EmailJS error:', error); // Improved error feedback
        });
});

//=============== SHOW SCROLL UP ===============
const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
});

//=============== SCROLL SECTIONS ACTIVE LINK ===============
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 50; // Adjusted offset to trigger properly

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');
        const activeLink = document.querySelector(`.nav__link[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__link.active')?.classList.remove('active'); // Remove existing active class safely
            if (activeLink) activeLink.classList.add('active'); // Add active class to the correct link
        }
    });
});

//=============== SCROLL REVEAL ANIMATION ===============
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    delay: 200,
    reset: true // Enable reset so that animations re-trigger when scrolling
});

sr.reveal('.home__container, .about__container, .skills__container, .services__container, .projects__container, .contact__container, .footer__container');




// JavaScript to add scroll-triggered animations
document.addEventListener('DOMContentLoaded', function () {
    const projectBoxes = document.querySelectorAll('.project__box');
  
    // Observer options
    const observerOptions = {
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    // Observer function
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add different animations based on index
          const index = [...projectBoxes].indexOf(entry.target);
          if (index % 3 === 0) {
            entry.target.classList.add('active-left'); // Every third item slides in from left
          } else if (index % 3 === 1) {
            entry.target.classList.add('active-right'); // Every second item slides in from right
          } else {
            entry.target.classList.add('active-bottom'); // Others slide in from bottom
          }
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);
  
    // Observe each project box
    projectBoxes.forEach(box => observer.observe(box));
  });
  
