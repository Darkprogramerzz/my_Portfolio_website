let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('div.website nav div.nav_center a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('div.website nav div.nav_center a[href*=' + id +
                ']').classList.add('active');
            });
        };
    });
};
let number = document.getElementById("number");
let counter = 0;
setInterval(()=> {
    if(counter == 65){
        clearInterval
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
},30);