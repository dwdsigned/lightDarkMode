/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Global variables

// Grabs the Ul element
const navMenu = document.querySelector('#navbar__list');
// Grabs all sections elements
const sectionElements = document.querySelectorAll('section');
// Grab all h1 elements
const headerElements = document.querySelectorAll('h1');
// 

// Dynamically builds a navigation menu
function buildMenu() {
    // For loop to iterate through all the section elements
    for (i = 0; i < sectionElements.length; i++) {
        // Assigns section based on its position in the nodelist
        const section = sectionElements[i];
        // Assigns the id of the corresponding section
        const sectionId = section.id;
        // Assigns dataset attribute to a variable
        const dataNavigate = section.dataset.nav;
        // Generates Headers Dynamically
        headerElements[i].textContent = dataNavigate;
        // Create li element
        const navListElement = document.createElement('li');
        // Create anchor element
        const navAnchorElement = document.createElement('a');
        // Sets the visible text of anchor tags to the value of the dataset value(s)
        navAnchorElement.textContent = dataNavigate;
        // Sets the href of anchor elements
        navAnchorElement.href = `#${sectionId}`;
        // Adds the 'menu__link' class to every anchor element
        navAnchorElement.classList.add('menu__link');
        // Click Event listener for the anchor element allowing smooth scrolling when clicking on the anchor element
        navAnchorElement.addEventListener('click', function(event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth'});
        });
        // Adds the anchor element that was created to the li element that was created
        navListElement.appendChild(navAnchorElement);
        // Adds the li element with anchor element to the ul element
        navMenu.appendChild(navListElement);
    };
  }

  // Calls the buildMenu function inorder to dynamically build a navigation bar
  buildMenu();

// Adds and removes 'active' class from section and anchor elements
function changeActive() {
    window.addEventListener('scroll', function () {
        sectionElements.forEach(function(section, index) {
            const secPosition = section.getBoundingClientRect();
            section.classList.remove('active');
            // checks if a section is visible
            if (secPosition.top >= 0 && secPosition.bottom <= window.innerHeight) {
                // set its CSS class to 'active'
                section.classList.add('active');
                 // Adds and removes active class on the anchor elements based on the position of the section elements based on the section index
                const anchorElements2 = document.querySelectorAll('.menu__link');
                anchorElements2.forEach( function (anchor) {
                    anchor.classList.remove('active')
                });
                const anchorHL = anchorElements2[index];
                if (anchorHL) {
                    anchorHL.classList.add('active');
                }
                }
            });
        });
    };

// Call the changeActive() inorder add/remove the 'active' class from section and anchor elements
  changeActive();







  const toggleSwitch = document.querySelector(`input[type="checkbox"]`);
  const nav = document.getElementById(`nav`);
  const toggleIcon = document.getElementById(`toggle-icon`);
  const textBox = document.getElementById(`text-box`);


// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = `rgb(35 35 35 /50%)`;
    textBox.style.backgroundColor = `rgb(235 235 235 / 50%)`;
    toggleIcon.children[0].textContent = `Dark Mode`;
    toggleIcon.children[1].classList.replace(`fa-sun`, `fa-moon`);
}

// Light Mode Style
function lightMode() {
    nav.style.backgroundColor = `rgb(235 235 235 / 50%)`;
    textBox.style.backgroundColor = `rgb(35 35 35 /50%)`;
    toggleIcon.children[0].textContent = `Light Mode`;
    toggleIcon.children[1].classList.replace(`fa-moon`, `fa-sun`);
}



  // Switch the theme Dynamically
  function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute(`data-theme`, `dark`);
        localStorage.setItem(`theme`, `dark`);
        darkMode();
    } else {
        document.documentElement.setAttribute(`data-theme`, `light`);
        localStorage.setItem(`theme`, `light`);
        lightMode();
    }
  }
  // Light/Dark Mode Event Listener
  toggleSwitch.addEventListener("change",switchTheme);

  // Check Local Storage for Theme
  const currentTheme = localStorage.getItem(`theme`);
  if (currentTheme) {
    document.documentElement.setAttribute(`data-theme`, currentTheme);
  }

// Checks Local Store state. If dark mode was enabled, switch the theme of the website to dark
  if (currentTheme === `dark`) {
    toggleSwitch.checked = true;
    darkMode();
  }

