

window.addEventListener("DOMContentLoaded", function(){
    let hanbergerNav = document.getElementById('narrow-nav');
    let nav = document.getElementsByClassName('nav')[0];
    let showNav = () => {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }       
    };
    hanbergerNav.addEventListener('click', showNav);
});
