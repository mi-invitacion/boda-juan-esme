
(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        const audio = new Audio('./img/fondo.mp3');
        audio.volume = 0.5;
        $('.btn-play').click(function () {
           audio.play();      

        });
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    

    document.addEventListener("DOMContentLoaded", function () {
    
        const animatedText = document.querySelector(".animated-text");
        const text = animatedText.textContent;
        animatedText.innerHTML = ""; // Limpia el contenido
        
        // Divide el texto en spans
        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
           
            span.textContent = char === " " ? "\u00A0" : char; // Maneja los espacios
            span.style.animationDelay = `${index * 0.05}s`; // Retraso en cascada
            animatedText.appendChild(span);
        });
    
        // Observa cuando el elemento es visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animatedText.classList.add("start-animation");
                        observer.disconnect(); // Desconectar después de activarse
                    }
                });
            },
            { threshold: 0.5 } // Activa cuando el 50% del elemento es visible
        );
    
        observer.observe(animatedText);

           // Fecha del evento (14 de diciembre 2024 a las 5:30 PM)
    var eventDate = new Date("December 14, 2024 17:30:00").getTime();

    // Actualizar el contador cada segundo
    var x = setInterval(function() {
        // Obtener la fecha y hora actual
        var now = new Date().getTime();

        // Calcular la diferencia entre la fecha del evento y la fecha actual
        var distance = eventDate - now;

        // Cálculos para días, horas, minutos y segundos
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar el resultado en los elementos HTML correspondientes
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // Si el evento ha llegado, mostrar "¡Es el gran día!"
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "<h3>¡Es el gran día!</h3>";
        }
    }, 1000);
    });
    
    $('.sakura-falling').sakura('start', {
        blowAnimations: [
            'blow-soft-left'
        
        ],                   // Horizontal movement animation names
        className: 'sakura', // Class name to use
        fallSpeed: 2.5,        // Factor for petal fall speed
        maxSize: 12,         // Maximum petal size
        minSize: 9,          // Minimum petal size
        newOn: 700,          // Interval after which a new petal is added
        
    });
    
})(jQuery);

