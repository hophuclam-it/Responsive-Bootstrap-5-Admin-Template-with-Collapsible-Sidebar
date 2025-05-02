const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const wrapper = document.getElementById('wrapper');
const sidebarExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

toggleButton.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
        toggleButton.setAttribute('aria-expanded', !sidebarExpanded);
    } else {
        sidebar.classList.toggle('collapsed');
        wrapper.classList.toggle('sidebar-collapsed');
    }
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    toggleButton.setAttribute('aria-expanded', 'false');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        sidebar.classList.remove('collapsed');
        wrapper.classList.remove('sidebar-collapsed');
        toggleButton.setAttribute('aria-expanded', 'false');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', 'false');
    }
});