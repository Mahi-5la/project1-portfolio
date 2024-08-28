document.addEventListener("DOMContentLoaded", function () {
  const menuOpen = document.querySelector(".menu-open");
  const menuClose = document.querySelector(".menu-close");

  let isOpen = false;
  const defaultEase = "power4.inOut";

  // Set initial positions of elements
  gsap.set(".menu-logo img", { y: 50 });
  gsap.set(".menu-link p", { y: 40 });
  gsap.set(".menu-sub-item p", { y: 12 });
  gsap.set(["#img-2", "#img-3", "#img-4"], { top: "150%" }); // Corrected selector

  menuOpen.addEventListener("click", function () {
    if (isOpen) return;
    openMenu();
    isOpen = true; // Set isOpen to true when the menu is opened
  });

  menuClose.addEventListener("click", function () {
    if (!isOpen) return;
    closeMenu();
    isOpen = false; // Set isOpen to false when the menu is closed
  });

  const openMenu = () => {
    gsap.to(".menu", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      pointerEvents: "all", // Corrected to lowercase
      duration: 1.25,
      ease: defaultEase,
    });

    // Additional animations for menu items
    gsap.to(".menu-logo img", { y: 0, duration: 1, ease: defaultEase });
    gsap.to(".menu-link p", {
      y: 0,
      duration: 1,
      ease: defaultEase,
      stagger: 0.1,
    });
    gsap.to(["#img-2", "#img-3", "#img-4"], {
      top: "50%",
      duration: 1.5,
      ease: defaultEase,
      stagger: 0.1,
    });
  };

  const closeMenu = () => {
    gsap.to(".menu", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      pointerEvents: "none", // Corrected to lowercase
      duration: 1.25,
      ease: defaultEase,
    });

    // Reverse animations for menu items
    gsap.to(".menu-logo img", { y: 50, duration: 1, ease: defaultEase });
    gsap.to(".menu-link p", {
      y: 40,
      duration: 1,
      ease: defaultEase,
      stagger: 0.1,
    });
    gsap.to(["#img-2", "#img-3", "#img-4"], {
      top: "150%",
      duration: 1.5,
      ease: defaultEase,
      stagger: 0.1,
    });
  };
});
