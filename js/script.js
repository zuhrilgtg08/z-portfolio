$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });
});

var type = new Typed('.auto-tulis', {
    strings: ['web design', 'freelancer', 'content creator', 'web development'],
    typeSpeed: 150,
    loop: true
});

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
    themeToggler.classList.toggle("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--hijau", color);
    };
});

window.onscroll = () => {
    themeToggler.classList.remove("active");
};

const scriptURL =
    'https://script.google.com/macros/s/AKfycbwZPQjadLTYcWY1-KIxLSW_k8OSBFGUDPIg57e2hDZFcwqAEXW5TtxW8MClZqiEbHS1/exec';
const form = document.forms['submit-contact'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // ketika btn submit di klik tampilkan alert
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Your message has been success'
            });
            // reset form
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
});