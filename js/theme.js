// theme.js - Gerenciador de tema escuro/claro simplificado

// Executa assim que o script é carregado para evitar piscadas de tema
(function() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
    }
})();

// Aguarda o DOM carregar completamente para configurar o botão
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Alterna a classe 'light-theme' no elemento root html
            document.documentElement.classList.toggle('light-theme');
            
            // Salva a preferência atualizada no armazenamento local do navegador (localStorage)
            const currentTheme = document.documentElement.classList.contains('light-theme') ? 'light' : 'dark';
            localStorage.setItem('portfolio-theme', currentTheme);
        });
    }
});
