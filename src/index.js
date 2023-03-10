// create page layout through js modules -- Reference accordingly in main.js

// import all parts -- Setup Header--(Navbar -EL's, link) - footer -
// create main referenced in modules

import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// Create header -- Should be linked to content
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restoLogo = document.createElement('h1');
    restoLogo.classList.add('resto-name');
    restoLogo.textContent = "Luigi's PIZZA";

    header.appendChild(restoLogo);
    // add navbar to header
    header.appendChild(createNavbar());

    return header;
};

function createNavbar() {
    const navbar = document.createElement('nav');

    // add buttons for each tab-module -- EL, triggers pg load (imported)
        // check if "active" -- assign active to clicked tab
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-btn');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', e => {
        if (e.target.classList.contains('active')) return;
        setActiveBtn(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveBtn(menuBtn);
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveBtn(contactBtn);
        loadContact();
    });

    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactBtn);

    return navbar;
};

// Set active class to btn clicked + removes active from any other nav-btn
function setActiveBtn(btn) {
    const btns = document.querySelectorAll('.nav-btn');

    btns.forEach((btn) => {
        if (btn !== this) {
            btn.classList.remove('active');
        }
    })
    btn.classList.add('active');
};

// createMain() -- referenced in each module
function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main')

    return main;
};

// createFooter() -- random ??
function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    return footer;
};

function loadWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveBtn(document.querySelector(".nav-btn"));
    //Load homepage initially
    loadHome();
};

loadWebsite();