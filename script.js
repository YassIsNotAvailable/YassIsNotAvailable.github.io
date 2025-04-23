document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        //update css variable//
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});

var typed = new Typed(".auto-type",{
    strings: ["DÉVELOPPEUR", "INGÉNIEUR", "APPRENTI"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

setTimeout(function() {
    document.querySelectorAll('.logo[data-aos], .nav-link[data-aos], .old[data-aos], .about-title[data-aos]').forEach(function(el) {
      el.removeAttribute('data-aos');
      el.removeAttribute('data-aos-duration');
      el.removeAttribute('data-aos-delay');
    });
  }, 1500);
  