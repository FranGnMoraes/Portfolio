// theme.js - Gerenciador de tema escuro/claro e menu mobile acessível

// Executa assim que o script é carregado para evitar piscadas de tema
(function() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
    }
})();

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Configuração do Tema
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.documentElement.classList.toggle('light-theme');
            const currentTheme = document.documentElement.classList.contains('light-theme') ? 'light' : 'dark';
            localStorage.setItem('portfolio-theme', currentTheme);
        });
    }

    // Configuração do Menu Hamburguer
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        const toggleMenu = (show) => {
            const willOpen = show !== undefined ? show : menuToggle.getAttribute('aria-expanded') === 'false';
            
            menuToggle.setAttribute('aria-expanded', willOpen);
            menuToggle.setAttribute('aria-label', willOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
            
            if (willOpen) {
                navMenu.classList.add('open');
            } else {
                navMenu.classList.remove('open');
            }
        };

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Fecha o menu ao pressionar a tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                toggleMenu(false);
                menuToggle.focus();
            }
        });

        // Fecha o menu ao clicar fora do header
        document.addEventListener('click', (e) => {
            const header = document.querySelector('header');
            if (header && !header.contains(e.target) && navMenu.classList.contains('open')) {
                toggleMenu(false);
            }
        });
    }
});
