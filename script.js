document.querySelector('.menu-hamburguesa').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('activo');
    
    // Disable scrolling when menu is active
    if (menu.classList.contains('activo')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});

function adjustLayout() {
    if (window.innerWidth >= 800) {
        document.querySelector('.menu').classList.remove('activo');
        document.body.classList.remove('no-scroll');
    }
}

window.addEventListener('resize', adjustLayout);

// Ensure the correct layout is applied on page load
document.addEventListener('DOMContentLoaded', adjustLayout);



// script.js
document.addEventListener("DOMContentLoaded", function() {
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    const downloadButtons = document.querySelectorAll('.download-btn');

    const changeLanguage = (language) => {
        const elements = document.querySelectorAll('[data-en][data-es]');

        // Cambiar el contenido antes de iniciar la animación
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${language}`);

        });

        downloadButtons.forEach(button => {
            if (language === 'en') {
                button.href = 'assets/bruno-favicon.ico';
            } else if (language === 'es') {
                button.href = 'assets/CV - BRUNO RAMIREZ.pdf';
            }
        });
    

        // Añadir clase fadeout para todos los elementos
        document.body.classList.add('fadein');

        // Eliminar clase fadeout después de la animación
        setTimeout(() => {
            document.body.classList.remove('fadein');
            
        }, 500); // Tiempo de la animación

        // Guardar el idioma seleccionado en localStorage
        localStorage.setItem('language', language);

    };

    



    btnEn.addEventListener('click', () => {
        changeLanguage('en');
    });

    btnEs.addEventListener('click', () => {
        changeLanguage('es');
    });
    
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }

});



// script.js
document.addEventListener("DOMContentLoaded", function() {
    const btnEn = document.getElementById('hamburger-btn-en');
    const btnEs = document.getElementById('hamburger-btn-es');
    const downloadButtons = document.querySelectorAll('.download-btn');

    const changeLanguage = (language) => {
        const elements = document.querySelectorAll('[data-en][data-es]');

        // Cambiar el contenido antes de iniciar la animación
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${language}`);

        });

        downloadButtons.forEach(button => {
            if (language === 'en') {
                button.href = 'assets/bruno-favicon.ico';
            } else if (language === 'es') {
                button.href = 'assets/CV - BRUNO RAMIREZ.pdf';
            }
        });

        // Añadir clase fadeout para todos los elementos
        document.body.classList.add('fadein');

        // Eliminar clase fadeout después de la animación
        setTimeout(() => {
            document.body.classList.remove('fadein');
            
        }, 500); // Tiempo de la animación

        // Guardar el idioma seleccionado en localStorage
        localStorage.setItem('language', language);

    };

    btnEn.addEventListener('click', () => {
        changeLanguage('en');
        document.querySelector('.menu').classList.remove('activo');
        document.body.classList.remove('no-scroll');
        
    });

    btnEs.addEventListener('click', () => {
        changeLanguage('es');
        document.querySelector('.menu').classList.remove('activo');
        document.body.classList.remove('no-scroll');
      
    });
});

