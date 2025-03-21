document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetUrl = this.getAttribute('href'); 
        document.body.classList.add('slide-out');
        setTimeout(() => {
            window.location.href = targetUrl; 
        }, 500); 
    });
});

