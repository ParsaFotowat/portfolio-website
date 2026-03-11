'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

const translations = {
  en: {
    // Sidebar
    showContacts: "Show Contacts",
    hideContacts: "Hide Contacts",
    email: "Email",
    phone: "Phone",
    location: "Location",

    // Navbar
    about: "About",
    resume: "Resume",
    portfolio: "Portfolio",

    // About Me
    aboutMeTitle: "About me",
    aboutMeText: `I am a Computer Engineering student at Politecnico di Torino with a strong focus on Data Science and Artificial Intelligence. During my recent internship at WaitHero, I developed AI models and automated data pipelines that significantly improved internal process efficiency. I specialize in Python, TensorFlow, and building end-to-end machine learning solutions. Currently, I am expanding my expertise by developing real-time computer vision applications and data aggregation tools. I am driven by a continuous desire to learn and innovate, and I am actively seeking a Data Science or AI internship where I can contribute to cutting-edge projects.`,

    // What I'm doing
    whatImDoingTitle: "What I'm doing",
    mlTitle: "Machine Learning",
    mlText: "Developing real-time computer vision applications and engineering robust data pipelines for analytics and automation.",
    seTitle: "Software Engineering (Java)",
    seText: "Building robust backend systems and domain models with a strong foundation in Object-Oriented Programming. Experienced in leveraging the Java Stream API for complex data aggregation, managing database persistence with Hibernate ORM, and applying industry-standard design patterns to solve real-world problems.",
    esgTitle: "Founder of ESG Chain Project",
    esgText: "ESG Chain is a Turin-based software solution designed to eliminate the friction of tracking Scope 3 emissions across European supply chains, specifically targeting the bottleneck of collecting data from smaller Tier-2 and Tier-3 suppliers.",
    gameDevTitle: "Game Development & AI",
    gameDevText: "Leveraging C# and the Unity Engine to design and program immersive 2D and 3D gaming experiences. My technical focus lies in developing intelligent enemy AI systems—including dynamic state machines and behavior patterns—for fast-paced platformers and shooting games, blending creative level design with robust gameplay mechanics.",

    // Recommendations
    recommendationsTitle: "Recommendations",

    // Resume
    resumeTitle: "Resume",
    educationTitle: "Education",
    education1Title: "Politecnico Di Torino",
    education1Date: "September 2021 — Present",
    education1Text: "The Bachelor's Degree in Computer Engineering at Politecnico di Torino provides me a comprehensive education in the principles and practices of computer engineering. The program is designed to equip students with a strong foundation in computer science, mathematics, and engineering, preparing me for a wide range of careers in the technology sector.",
    education2Title: "Shiraz High school",
    education2Date: "2014 — 2018",
    education2Text: "I graduated from Shiraz High School with a focus on mathematics and physics. The rigorous curriculum provided me with a solid foundation in the sciences, preparing me for further studies in engineering and technology.",
    experienceTitle: "Experience",
    experience1Title: "AI Developer @ WaitHero",
    experience1Date: "NOV 2023 — Present",
    experience1Text: "Designed, developed, and deployed advanced AI solutions to address complex challenges and enhance software functionality. My expertise in machine learning and data analysis enabled me to create AI-driven systems that significantly boosted efficiency, quality, and customer satisfaction in the hospitality industry.",
    downloadResume: "Download Resume",

  },
  it: {
    // Sidebar
    showContacts: "Mostra Contatti",
    hideContacts: "Nascondi Contatti",
    email: "Email",
    phone: "Telefono",
    location: "Posizione",

    // Navbar
    about: "Chi sono",
    resume: "Curriculum",
    portfolio: "Portfolio",

    // About Me
    aboutMeTitle: "Chi sono",
    aboutMeText: `Sono uno studente di Ingegneria Informatica al Politecnico di Torino con un forte focus su Data Science e Intelligenza Artificiale. Durante il mio recente tirocinio presso WaitHero, ho sviluppato modelli di IA e pipeline di dati automatizzate che hanno migliorato significativamente l'efficienza dei processi interni. Sono specializzato in Python, TensorFlow e nella creazione di soluzioni di machine learning end-to-end. Attualmente, sto espandendo le mie competenze sviluppando applicazioni di visione artificiale in tempo reale e strumenti di aggregazione dati. Sono spinto da un continuo desiderio di imparare e innovare, e sto cercando attivamente uno stage in Data Science o IA dove possa contribuire a progetti all'avanguardia.`,

    // What I'm doing
    whatImDoingTitle: "Cosa sto facendo",
    mlTitle: "Machine Learning",
    mlText: "Sviluppo di applicazioni di visione artificiale in tempo reale e ingegnerizzazione di pipeline di dati robuste per l'analisi e l'automazione.",
    seTitle: "Ingegneria del Software (Java)",
    seText: "Costruzione di sistemi backend robusti e modelli di dominio con una solida base nella programmazione orientata agli oggetti. Esperienza nell'utilizzo dell'API Java Stream for la complessa aggregazione di dati, nella gestione della persistenza del database con Hibernate ORM e nell'applicazione di pattern di progettazione standard del settore per risolvere problemi del mondo reale.",
    esgTitle: "Fondatore del Progetto ESG Chain",
        portfolioProject2Desc: "A software solution to streamline Scope 3 emissions tracking for European supply chains. ESG Chain uses AI to automatically extract data from utility bills, provides an auditable trail for verification, and integrates with existing ERP systems. It simplifies compliance for SMEs and provides reliable data for large companies.",
    gameDevTitle: "Sviluppo di Giochi e IA",
    gameDevText: "Utilizzo di C# e del motore Unity per progettare e programmare esperienze di gioco 2D e 3D immersive. Il mio focus tecnico risiede nello sviluppo di sistemi di IA nemica intelligenti, comprese macchine a stati dinamiche e modelli di comportamento, per platform e sparatutto frenetici, mescolando un design di livelli creativo con meccaniche di gioco robuste.",

    // Recommendations
    recommendationsTitle: "Raccomandazioni",

    // Resume
    resumeTitle: "Curriculum",
    educationTitle: "Formazione",
    education1Title: "Politecnico Di Torino",
    education1Date: "Settembre 2021 — Presente",
    education1Text: "La Laurea in Ingegneria Informatica presso il Politecnico di Torino mi fornisce una formazione completa nei principi e nelle pratiche dell'ingegneria informatica. Il programma è progettato per dotare gli studenti di una solida base in informatica, matematica e ingegneria, preparandomi per una vasta gamma di carriere nel settore tecnologico.",
    education2Title: "Liceo Shiraz",
    education2Date: "2014 — 2018",
    education2Text: "Mi sono diplomato al Liceo Shiraz con un indirizzo in matematica e fisica. Il rigoroso curriculum mi ha fornito una solida base nelle scienze, preparandomi per ulteriori studi in ingegneria e tecnologia.",
    experienceTitle: "Esperienza",
    experience1Title: "Sviluppatore AI @ WaitHero",
    experience1Date: "NOV 2023 — Presente",
    experience1Text: "Progettato, sviluppato e implementato soluzioni AI avanzate per affrontare sfide complesse e migliorare le funzionalità del software. La mia esperienza in machine learning e analisi dei dati mi ha permesso di creare sistemi basati sull'IA che hanno notevolmente aumentato l'efficienza, la qualità e la soddisfazione del cliente nel settore dell'ospitalità.",
    downloadResume: "Scarica Curriculum",
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');
  const resumeDownloadLink = document.getElementById('resume-download-link');

  const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    const t = translations[lang];

    // Sidebar
    const showContactsBtn = document.querySelector('[data-sidebar-btn] span');
    if (showContactsBtn) {
      const sidebar = document.querySelector('[data-sidebar]');
      showContactsBtn.textContent = sidebar.classList.contains('active') ? t.hideContacts : t.showContacts;
    }
    document.querySelector('.contact-info .contact-title').textContent = t.email;
    document.querySelectorAll('.contact-info .contact-title')[1].textContent = t.phone;
    document.querySelectorAll('.contact-info .contact-title')[2].textContent = t.location;

    // Navbar
    document.querySelectorAll('.navbar-link')[0].textContent = t.about;
    document.querySelectorAll('.navbar-link')[1].textContent = t.resume;
    document.querySelectorAll('.navbar-link')[2].textContent = t.portfolio;

    // About Me
    document.querySelector('.about .article-title').textContent = t.aboutMeTitle;
    document.querySelector('.about-text p').textContent = t.aboutMeText;

    // What I'm doing
    document.querySelector('.service .service-title').textContent = t.whatImDoingTitle;
    const services = document.querySelectorAll('.service-item');
    services[0].querySelector('.service-item-title').textContent = t.mlTitle;
    services[0].querySelector('.service-item-text').textContent = t.mlText;
    services[1].querySelector('.service-item-title').textContent = t.seTitle;
    services[1].querySelector('.service-item-text').textContent = t.seText;
    services[2].querySelector('.service-item-title').textContent = t.esgTitle;
    services[2].querySelector('.service-item-text').textContent = t.esgText;
    services[3].querySelector('.service-item-title').textContent = t.gameDevTitle;
    services[3].querySelector('.service-item-text').textContent = t.gameDevText;

    // Recommendations
    document.querySelector('.testimonials .testimonials-title').textContent = t.recommendationsTitle;

    // Resume
    document.querySelector('.resume .article-title').textContent = t.resumeTitle;
    document.querySelector('.timeline .h3').textContent = t.educationTitle;
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems[0].querySelector('.h4').textContent = t.education1Title;
    timelineItems[0].querySelector('span').textContent = t.education1Date;
    timelineItems[0].querySelector('.timeline-text').textContent = t.education1Text;
    timelineItems[1].querySelector('.h4').textContent = t.education2Title;
    timelineItems[1].querySelector('span').textContent = t.education2Date;
    timelineItems[1].querySelector('.timeline-text').textContent = t.education2Text;
    document.querySelectorAll('.timeline .h3')[1].textContent = t.experienceTitle;
    timelineItems[2].querySelector('.h4').textContent = t.experience1Title;
    timelineItems[2].querySelector('span').textContent = t.experience1Date;
    timelineItems[2].querySelector('.timeline-text').textContent = t.experience1Text;
    
    // Update resume download link and button text
    if (resumeDownloadLink) {
      resumeDownloadLink.href = lang === 'it' ? 'assets/PF_resume_IT.pdf' : 'assets/PF_resume_EN.pdf';
      resumeDownloadLink.textContent = t.downloadResume;
    }

    langButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      }
    });
  };

  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      setLanguage(lang);
    });
  });

  // Set initial language
  setLanguage('en');
});
// Project Modal Logic
(function () {
  const overlay   = document.querySelector('[data-project-overlay]');
  const modal     = document.querySelector('[data-project-modal]');
  const closeBtn  = document.querySelector('[data-project-modal-close]');

  const modalImg      = document.querySelector('[data-project-modal-img]');
  const modalCategory = document.querySelector('[data-project-modal-category]');
  const modalTitle    = document.querySelector('[data-project-modal-title]');
  const modalHook     = document.querySelector('[data-project-modal-hook]');
  const modalProblem  = document.querySelector('[data-project-modal-problem]');
  const modalSolution = document.querySelector('[data-project-modal-solution]');
  const modalStack    = document.querySelector('[data-project-modal-stack]');
  const modalLinks    = document.querySelector('[data-project-modal-links]');

  function openModal(btn) {
    modalImg.src        = btn.dataset.img     || '';
    modalImg.alt        = btn.dataset.title   || '';
    modalCategory.textContent = btn.dataset.category || '';
    modalTitle.textContent    = btn.dataset.title    || '';
    modalHook.textContent     = btn.dataset.hook     || '';
    modalProblem.textContent  = btn.dataset.problem  || '';
    modalSolution.textContent = btn.dataset.solution || '';

    // Tech pills
    modalStack.innerHTML = '';
    const stack = (btn.dataset.stack || '').split(',').map(s => s.trim()).filter(Boolean);
    stack.forEach(tech => {
      const pill = document.createElement('span');
      pill.className = 'tech-pill';
      pill.textContent = tech;
      modalStack.appendChild(pill);
    });

    // Links
    modalLinks.innerHTML = '';
    if (btn.dataset.github) {
      const a = document.createElement('a');
      a.href = btn.dataset.github;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'project-modal-link-btn secondary';
      a.innerHTML = '<ion-icon name="logo-github"></ion-icon> View Code';
      modalLinks.appendChild(a);
    }
    if (btn.dataset.demo) {
      const a = document.createElement('a');
      a.href = btn.dataset.demo;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'project-modal-link-btn primary';
      a.innerHTML = '<ion-icon name="open-outline"></ion-icon> Live Demo';
      modalLinks.appendChild(a);
    }

    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-project-btn]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn));
  });

  if (closeBtn)  closeBtn.addEventListener('click', closeModal);
  if (overlay)   overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeModal();
  });
}());
