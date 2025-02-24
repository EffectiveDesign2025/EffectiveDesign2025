<script>
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
</script>
