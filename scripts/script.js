function init() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    let navbar = document.getElementsByClassName('navbar');
    let icon = document.getElementById('icon1');
    navBarToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
        navbar[0].classList.toggle('activeNavbar');
        if (mainNav.classList.contains('active')) {
            icon.classList.add('fa','fa-close');
            icon.classList.remove('fas','fa-bars');
        }
        else{
            icon.classList.remove('fa','fa-close');
            icon.classList.add('fas','fa-bars');
        }
        
    });
}