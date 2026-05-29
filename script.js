document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll('.btn');
    
    // Faz os botões aparecerem com um leve atraso um após o outro (efeito cascata)
    botoes.forEach((botao, index) => {
        botao.style.opacity = "0";
        botao.style.transform = "translateY(20px)";
        botao.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        
        setTimeout(() => {
            botao.style.opacity = "1";
            botao.style.transform = "translateY(0)";
        }, index * 150); // 150ms de atraso entre cada botão
    });
});