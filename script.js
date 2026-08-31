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
});
