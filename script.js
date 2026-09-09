$(document).ready(function () {
  // Sticky navbar & scroll-up toggle
  $(window).scroll(function () {
    if (this.scrollY > 40) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 400) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Scroll to top
  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // Mobile menu toggle
  $(".menu-btn").click(function () {
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("fa-bars fa-xmark");
  });

  $(".menu a").click(function () {
    $(".menu").removeClass("active");
    $(".menu-btn i").removeClass("fa-xmark").addClass("fa-bars");
  });

  // Typing animation for Hero
  new Typed(".typing", {
    strings: [
      "Business Systems Analyst",
      "Salesforce BA & Admin",
      "Agile & Workflow Specialist",
    ],
    typeSpeed: 80,
    backSpeed: 45,
    loop: true,
  });

  // Typing animation for About section
  new Typed(".typing-2", {
    strings: [
      "Business Systems Analyst",
      "Salesforce Administrator",
      "Agile Practitioner",
    ],
    typeSpeed: 80,
    backSpeed: 45,
    loop: true,
  });
});
