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
let number1 = document.getElementById("number_1");
let counter1 = 0;
setInterval(()=> {
    if(counter1 == 70){
        clearInterval
    }else{
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    }
},32);
let number2 = document.getElementById("number_2");
let counter2 = 0;
setInterval(()=> {
    if(counter2 == 25){
        clearInterval
    }else{
        counter2 += 1;
        number2.innerHTML = counter1 + "%";
    }
},33);
let number3 = document.getElementById("number_3");
let counter3 = 0;
setInterval(()=> {
    if(counter3 == 80){
        clearInterval
    }else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
},20);

$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});
