<script>
  document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".sidebar-button");
    const menu = document.querySelector(".links-container");

    menuButton.addEventListener("click", function() {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !isExpanded);
      menu.style.right = isExpanded ? "-100%" : "0";

      // Alterna os ícones
      document.querySelector(".open-icon").style.display = isExpanded ? "block" : "none";
      document.querySelector(".close-icon").style.display = isExpanded ? "none" : "block";
    });
  });
</script>

/* -------------------------------------JAVA SCRIPT GRADIENTE --------------------------- >>>>>>>>>>>>>> */

/* Configuração de Gradiente | Alternar gradiente em 15 segundos. */
    const gradients = [
    'linear-gradient(45deg, #ff0000, #0000ff)',
    'linear-gradient(45deg, #00ff00, #ffff00)',
    'linear-gradient(45deg, #8a2be2, #ff00ff)',
    'linear-gradient(45deg, #ff7f50, #6495ed)',
    'linear-gradient(45deg, #ff6347, #4682b4)',
    'linear-gradient(45deg, #3cb371, #d2691e)'
];

function setRandomGradient() {
    const title = document.getElementById('effective-design');
    
    // Aplica transição de fade-out antes de mudar o gradiente
    title.style.transition = "opacity 1s ease-in-out";
    title.style.opacity = 0;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * gradients.length);
        title.style.backgroundImage = gradients[randomIndex];
        title.style.opacity = 1; // Fade-in do novo gradiente
    }, 500);
}

// Define um gradiente aleatório ao carregar a página
window.onload = setRandomGradient;

// Alterar o gradiente a cada 10 segundos
setInterval(setRandomGradient, 10000);


/* ----------------------------------------JAVA SCRIPT LOTTIE ANIMATION ----------------------------------------- >>>>>>>>>>>>>> */    
    
/* Configurações de Lottie Animation  */
    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "https://raw.githubusercontent.com/EffectiveDesign2025/EffectiveDesign2025/main/animacao/analise%20de%20projeto"
    });
