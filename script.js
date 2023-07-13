let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx bxs-x-circle');
  navbar.classList.toggle('active');
};

let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
          });
        };
        });
let header = document.querySelector('.header');

header.classList.toggle('sticky' , window.scrollY > 100);
};

let darkmodeicon = document.querySelector('#darkmodeicon');
    darkmodeicon.classList.toggle('bxsun');