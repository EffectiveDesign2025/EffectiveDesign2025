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
        const randomIndex = Math.floor(Math.random() * gradients.length);
        document.getElementById('effective-design').style.backgroundImage = gradients[randomIndex];
    }

    // Defina o gradiente aleatório ao carregar a página
    window.onload = setRandomGradient;

    // Opcional: Alterar o gradiente a cada 5 segundos
    setInterval(setRandomGradient, 10000);

/* ----------------------------------------JAVA SCRIPT LOTTIE ANIMATION ----------------------------------------- >>>>>>>>>>>>>> */    
    
/* Configurações de Lottie Animation  *
    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'canvas',
        loop: true,
        autoplay: true,
        path: "https://raw.githubusercontent.com/EffectiveDesign2025/EffectiveDesign2025/main/animacao/analise%20de%20projeto"
    });
*/

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), 
    renderer: 'canvas', 
    loop: true, 
    autoplay: true, 
    path: 'caminho-da-animacao.json',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice', // Mantém o aspecto correto
        clearCanvas: true,
        progressiveLoad: true,
        scaleMode: 'noScale'
    }
});

// Ajuste a densidade de pixels (aumenta a qualidade)
const canvas = document.querySelector('#lottie-animation canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio || 1;
    
    canvas.width = canvas.clientWidth * pixelRatio;
    canvas.height = canvas.clientHeight * pixelRatio;
    
    ctx.scale(pixelRatio, pixelRatio);
}

