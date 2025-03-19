(function () {
    const header = document.querySelector('.header-nav');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header-nav_active');
        } else {
            header.classList.remove('header-nav_active');
        }
    }
}());