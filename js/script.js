$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

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

var type = new Typed(".auto-tulis", {
  strings: ["", "Freelancer", "Web Developer"],
  typeSpeed: 150,
  loop: true,
});

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme", color);
    localStorage.setItem("colour", color);
  };

  if (localStorage.getItem("colour")) {
    document
      .querySelector(":root")
      .style.setProperty("--theme", localStorage.getItem("colour"));
  }
});

window.onscroll = () => {
  themeToggler.classList.remove("active");
};

let alert = document.querySelector(".alert");
let cancelButton = document.querySelector("#cancel-button");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwZPQjadLTYcWY1-KIxLSW_k8OSBFGUDPIg57e2hDZFcwqAEXW5TtxW8MClZqiEbHS1/exec";
const form = document.forms["submit-contact"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      alert.classList.remove("hide");
      cancelButton.addEventListener("click", () => alert.classList.add("hide"));
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
