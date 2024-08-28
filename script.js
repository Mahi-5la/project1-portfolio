document.addEventListener("DOMContentLoaded", function () {
  gsap.set(".img", { y: 500 });
  gsap.set(".loader-imgs", { x: 500 });
  gsap.set(".nav-item", { y: 25, opacity: 0 });
  gsap.set("h1, .item, footer", { y: 200 });

  const t1 = gsap.timeline({ delay: 1 });

  t1.to(".img", {
    y: 0,
    duration: 1.5,
    stagger: 0.05,
    ease: "power3.inOut",
  })
    .to(
      ".loader-imgs",
      {
        x: 0,
        duration: 3,
        ease: "power3.inOut",
      },
      "-=2.5"
    )
    .to(
      ".img:not(#loader-logo)",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .call(() => {}, null, "+=0.3")
    .to(".loader-imgs", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "power3.inOut",
    })
    .to(
      ".loader",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    )
    .to(
      ".nav-item, h1, footer, .item",
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      "-=0.5"
    )
    .call(() => {
      // Show background text and center image after loader animation
      document.querySelector(".background-text").style.display = "block";
      document.querySelector(".center-image").style.display = "block";
    });

  // Hide background-text and center-image initially
  document.querySelector(".background-text").style.display = "none";
  document.querySelector(".center-image").style.display = "none";

  // Show/Hide scrolling text based on section in viewport
function handleScroll() {
  const aboutSection = document.getElementById("about");
  const achievementsSection = document.getElementById("achievements");
  const scrollingText = document.querySelector(".background-text");

  const aboutSectionPosition = aboutSection.getBoundingClientRect();
  const achievementsSectionPosition =
    achievementsSection.getBoundingClientRect();

  // Show scrolling text if in About or Achievements section
  if (
    (aboutSectionPosition.top <= window.innerHeight &&
      aboutSectionPosition.bottom >= 0) ||
    (achievementsSectionPosition.top <= window.innerHeight &&
      achievementsSectionPosition.bottom >= 0)
  ) {
    scrollingText.style.display = "block";
  } else {
    scrollingText.style.display = "none";
  }
}


  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);

  // Initial check in case sections are already in view
  handleScroll();
});
