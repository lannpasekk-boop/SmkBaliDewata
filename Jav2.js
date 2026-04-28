// Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }


    // Dropdown untuk mobile
    const dropdownItems = document.querySelectorAll('.dropdown');
    dropdownItems.forEach(drop => {
        const dropLink = drop.querySelector('a');
        if(dropLink) {
            dropLink.addEventListener('click', (e) => {
                if(window.innerWidth <= 850) {
                    e.preventDefault();
                    drop.classList.toggle('active');
                }
            });
        }
    });

    // Smooth scroll semua anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === "#" || targetId === "") return;
            const target = document.querySelector(targetId);
            if(target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if(navMenu.classList.contains('active')) navMenu.classList.remove('active');
            }
        });
    });

    // Tombol daftar
    const heroBtn = document.getElementById('heroDaftarBtn');
    const navDaftar = document.getElementById('btnDaftarNav');
    const daftarAlert = () => { alert("Pendaftaran sudah dibuka! Hubungi admin untuk info lebih lanjut."); };
    if(heroBtn) heroBtn.addEventListener('click', daftarAlert);
    if(navDaftar) navDaftar.addEventListener('click', (e) => { e.preventDefault(); daftarAlert(); });

    // WhatsApp button
    const waBtn = document.getElementById('waButton');
    if(waBtn) {
        waBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://wa.me/6281234567890?text=Halo%20saya%20ingin%20info%20SMK%20Bali%20Dewata', '_blank');
        });
    }