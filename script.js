document.addEventListener('DOMContentLoaded', () => {
    /* Hanya mengelola Smooth Scroll (Navigasi) */
    /* Logika modal telah dihapus secara keseluruhan */
    
    const navLinks = document.querySelectorAll('.nav-links a, .btn-primary');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // Cek apakah ada hash link ke elemen di halaman yang sama
            const targetAttr = this.getAttribute('href');
            
            // Jika mengklik navigasi seperti "index.html#indonesia", pastikan di tangani dengan benar
            if (targetAttr.includes('#')) {
                const targetId = targetAttr.substring(targetAttr.indexOf('#'));
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Jika elemen ada di halaman yang sama (sedang di index.html)
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* === 2. HAMBURGER MENU LOGIC === */
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-links');
    
    if (mobileMenu && navMenu) {
        const menuIcon = mobileMenu.querySelector('i');
        
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle Icon between Bars and X
            if (navMenu.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Tutup menu otomatis jika salah satu tautan diklik (khusus mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if(navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });
    }
});
