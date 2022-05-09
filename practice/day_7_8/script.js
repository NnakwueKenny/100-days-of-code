// const mainNavToggle = document.querySelectorAll('.main-nav-toggle');
// mainNavToggle.forEach((mainNavToggle) => {
//     mainNavToggle.addEventListener('click', (e) => {
//         if (e) {}
//         if (mainNavToggle.classList.contains('open')) {
            
//         } else if (mainNavToggle.classList.contains('close')) {
            
//         }
//     })
// })


const mainNavContainer = document.querySelector('.main-nav-container');
const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav-toggle');
mainNavToggle.addEventListener('click', (e) => {
    const toggler = mainNavToggle.querySelectorAll('.toggler')
    toggler.forEach((toggler) => {
        toggler.classList.toggle('hidden');
    });
    const mainNavHeight = mainNav.getBoundingClientRect().height;
    const mainNavContainerHeight = mainNavContainer.getBoundingClientRect().height;
    if (mainNavContainerHeight === 0) {
        mainNavContainer.classList.remove('h-0');
        mainNavContainer.style.height = `${mainNavHeight}px`;
    } else {
        mainNavContainer.style.height = 0;
    };
})

// function toggleMainNav (value1, value2, value3) {
//     let mainNavHeight = mainNav.clientHeight;
//     mainNavContainer.style.height = `${mainNavHeight}px`;
// }

// SIDE NAV SECTION
const sideNav = document.querySelector('.side-nav');
const toggleNavs = document.querySelectorAll('.toggle-sidenav');

toggleNavs.forEach((toggleNav) => {
    toggleNav.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('close')) {
            sideNav.classList.toggle('w-56');
            console.log('Hello World')
        } else if (e.currentTarget.classList.contains('open')) {
            sideNav.classList.toggle('w-56');
            console.log('Hello World')
        }
    })
})