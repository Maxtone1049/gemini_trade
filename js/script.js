const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const dropdown = document.querySelector('.dropdown .dropbtn');
const dropdownMenu = document.querySelector('.dropdown .dropdown-content');

// Toggle the burger menu
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Toggle the dropdown on mobile
dropdown.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default link behavior

    // Check if the submenu is currently visible
    if (dropdownMenu.style.display === 'block') {
        // If it is, hide it
        dropdownMenu.style.display = 'none';
    } else {
        // If not, show it and hide any other open submenus
        dropdownMenu.style.display = 'block';
    }
});

// Optionally close the dropdown when clicking outside of the menu
document.addEventListener('click', function (event) {
    // If click is outside of the dropdown
    if (!dropdown.contains(event.target) && !nav.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to the clicked button and corresponding tab
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
