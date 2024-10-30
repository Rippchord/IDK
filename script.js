const tab = document.querySelector('.mobile-menu img')
const closeMenu = document.querySelector('.exit');

tab.addEventListener('click', (e) => {
    const openTab = document.querySelector('.expanded');
    e.target.style.display= 'none';
    openTab.style.display = 'initial';

})

closeMenu.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.style.display= 'none';
    tab.style.display = 'inline';
})