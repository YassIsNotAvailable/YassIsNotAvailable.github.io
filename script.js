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
  
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll('.circle');
  
  circles.forEach(function(circle) {
    circle.x = 0;
    circle.y = 0;
  });
  
  window.addEventListener('mousemove', function(e) {
    coords.x = e.clientX + window.scrollX;
    coords.y = e.clientY + window.scrollY;
  });
  
  function animateCircles() {
    let x = coords.x;
    let y = coords.y;
  
    circles.forEach(function(circle, index) {
      circle.style.left = (x - 12) + 'px';
      circle.style.top = (y - 12) + 'px';
      circle.style.scale = (circles.length - index) / circles.length;
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
  
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
