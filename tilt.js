document.addEventListener("DOMContentLoaded", function () {
  const menuImgContainer = document.querySelector(".left");
  const images = document.querySelectorAll(".left");
  let mouse = { x: 0, y: 0 };
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;

  const scales = [0.81, 0.84, 0.87, 0.9];

  // Update function that handles the parallax effect and tilt
  function update() {
    let dx = mouse.x - cx;
    let dy = mouse.y - cy;

    let tiltx = (dy / cy) * 20;
    let tilty = (dx / cx) * 20;

    gsap.to(menuImgContainer, {
      duration: 2,
      transform: `rotate3d(${tiltx},${tilty}, 0, 15deg)`, // Corrected template literals
      ease: "power3.out",
    });

    images.forEach((img, index) => {
      let parallaxX = -(dx * (index + 1)) / 100;
      let parallaxY = -(dy * (index + 1)) / 100;

      gsap.to(img, {
        duration: 2,
        x: parallaxX,
        y: parallaxY,
        scale: scales[index],
        ease: "power3.out",
      });
    });
  }

  // Mousemove event listener to track the mouse position
  window.addEventListener("mousemove", function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    update(); // Call update function on every mouse move
  });

  // Window resize event listener to recalculate center points
  window.addEventListener("resize", function () {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
  });
});
