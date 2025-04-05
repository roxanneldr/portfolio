document.addEventListener("DOMContentLoaded", () => {
    const eyes = document.querySelectorAll(".eye");
  
    document.addEventListener("mousemove", (e) => {
      eyes.forEach((eye) => {
        const pupil = eye.querySelector(".pupil");
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
  
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const radius = 7;
        const pupilX = Math.cos(angle) * radius;
        const pupilY = Math.sin(angle) * radius;
  
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    });
  });
  