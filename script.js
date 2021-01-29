window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
}


const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav_ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

/*function change(x) {
    x.classList.toggle('change');
}*/
