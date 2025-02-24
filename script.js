/* -------------------------------------JAVA SCRIPT GRADIENTE --------------------------- >>>>>>>>>>>>>> */

/* Configuração de Gradiente | Alternar gradiente em 5 segundos. */
    const gradients = [
        'linear-gradient(45deg, #ff0000, #0000ff)',
        'linear-gradient(45deg, #00ff00, #ffff00)',
        'linear-gradient(45deg, #8a2be2, #ff00ff)',
        'linear-gradient(45deg, #ff7f50, #6495ed)',
        'linear-gradient(45deg, #ff6347, #4682b4)',
        'linear-gradient(45deg, #3cb371, #d2691e)'
    ];

    function setRandomGradient() {
        const randomIndex = Math.floor(Math.random() * gradients.length);
        document.getElementById('effective-design').style.backgroundImage = gradients[randomIndex];
    }

    // Defina o gradiente aleatório ao carregar a página
    window.onload = setRandomGradient;

    // Opcional: Alterar o gradiente a cada 5 segundos
    setInterval(setRandomGradient, 5000);

/* ----------------------------------------JAVA SCRIPT LOTTIE ANIMATION ----------------------------------------- >>>>>>>>>>>>>> */    
    
/* Configurações de Lottie Animation  */
    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "https://raw.githubusercontent.com/EffectiveDesign2025/EffectiveDesign2025/main/animacao/analise%20de%20projeto"
    });

/* -------------------------------------------JAVA SCRIPT MENU HAMBÚGUER --------------------------- >>>>>>>>>>>>>> */    

/* Configuração de Ativação do Menu Hambúguer */    
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active'); // Adiciona ou remove a classe 'active' ao clicar
    });

    // Fecha o menu ao clicar em um link no mobile
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

/* ------------------------------------------------------------------------------------------------------- >>>>>>>>>>>>>> */
