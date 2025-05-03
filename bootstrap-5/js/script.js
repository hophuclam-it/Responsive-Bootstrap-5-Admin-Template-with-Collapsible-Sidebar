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



// // Hàm load file HTML vào phần tử theo ID
// function loadComponent(id, url) {
//     return fetch(url)
//       .then(res => {
//         if (!res.ok) throw new Error(`Không thể load ${url}`);
//         return res.text();
//       })
//       .then(html => {
//         document.getElementById(id).innerHTML = html;
//       });
//   }
  
//   // Load các thành phần (header, sidebar, footer), sau đó khởi tạo các sự kiện
//   Promise.all([
//     loadComponent('header-container', './layout/header.html'),
//     loadComponent('sidebar-container', './layout/sidebar.html'),
//     loadComponent('footer-container', './layout/footer.html')
//   ]).then(initUIEvents).catch(console.error);
  
//   // Gán các sự kiện tương tác sau khi các phần tử đã được chèn vào DOM
//   function initUIEvents() {
//     const toggleButton = document.getElementById('toggleSidebar');
//     const sidebar = document.getElementById('sidebar');
//     const overlay = document.getElementById('overlay');
//     const wrapper = document.getElementById('wrapper');
  
//     if (!toggleButton || !sidebar || !overlay) {
//       console.warn('Một hoặc nhiều phần tử không tìm thấy trong DOM.');
//       return;
//     }
  
//     toggleButton.addEventListener('click', () => {
//       const isMobile = window.innerWidth <= 768;
//       if (isMobile) {
//         sidebar.classList.toggle('show');
//         overlay.classList.toggle('show');
//         toggleButton.setAttribute('aria-expanded', sidebar.classList.contains('show'));
//       } else {
//         sidebar.classList.toggle('collapsed');
//         wrapper.classList.toggle('sidebar-collapsed');
//       }
//     });
  
//     overlay.addEventListener('click', () => {
//       sidebar.classList.remove('show');
//       overlay.classList.remove('show');
//       toggleButton.setAttribute('aria-expanded', 'false');
//     });
  
//     window.addEventListener('resize', () => {
//       if (window.innerWidth > 768) {
//         sidebar.classList.remove('show');
//         overlay.classList.remove('show');
//         sidebar.classList.remove('collapsed');
//         wrapper.classList.remove('sidebar-collapsed');
//         toggleButton.setAttribute('aria-expanded', 'false');
//       }
//     });
  
//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape') {
//         sidebar.classList.remove('show');
//         overlay.classList.remove('show');
//         toggleButton.setAttribute('aria-expanded', 'false');
//       }
//     });
//   }
  