$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Chandini Laveti";
    $("#favicon").attr("href", "assests/images/chand1.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "assests/images/favhand.png");
  }
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["FullStack development", "Machine Learning", "Problem Solving"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->

//pre loader start
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 100);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL HOME */
srtop.reveal(".home .content h3", { delay: 100 });
srtop.reveal(".home .content p", { delay: 100 });
srtop.reveal(".home .content .btn", { delay: 100 });

srtop.reveal(".home .image", { delay: 200 });
srtop.reveal(".home .linkedin", { interval: 400 });
srtop.reveal(".home .github", { interval: 600 });
srtop.reveal(".home .twitter", { interval: 800 });
srtop.reveal(".home .telegram", { interval: 400 });
srtop.reveal(".home .instagram", { interval: 400 });
srtop.reveal(".home .dev", { interval: 400 });

/* SCROLL ABOUT */
srtop.reveal(".about .content h3", { delay: 100 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 100 });
srtop.reveal(".about .content .box-container", { delay: 100 });
srtop.reveal(".about .content .resumebtn", { delay: 100 });

/* SCROLL SKILLS */
srtop.reveal(".skills .container", { interval: 100 });
srtop.reveal(".skills .container .bar", { delay: 200 });

/* SCROLL EDUCATION */
srtop.reveal(".education .box", { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal(".work .box", { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal(".experience .timeline", { delay: 200 });
srtop.reveal(".experience .timeline .container", { interval: 300 });

/* SCROLL CONTACT */
srtop.reveal(".contact .container", { delay: 200 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
