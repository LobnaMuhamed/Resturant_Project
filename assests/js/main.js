//*** Show & Hide Side Bar
btnBar = document.querySelector(".nav_toggle");
fullNavSide = document.querySelector(".nav_side");
navSide = document.querySelector(".list_side");
myP = document.querySelector("p");
closeIcon = document.querySelector(".close_sideBar");

btnBar.addEventListener("click", function () {
  fullNavSide.style.display = "block";
  navSide.style.right = "0%";
});
closeIcon.addEventListener("click", function () {
  fullNavSide.style.display = "none";
});

//*** NAV-BAR
let navOffset = $("header .container").offset().top;

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll - 100 > navOffset) {
    $("header .container").slideDown(300, function () {
      $("header .container").css("width", "100%");
      $("header .container").css("z-index", "400");
      $("header .container").css("background-color", "rgb(0,0,0)");
      $("header .container").css("position", "fixed");
      $("header .container").css("padding", "10px 20px");
    });
  } else {
    $("header .container").show(500, function () {
      $("header .container").css("width", "100%");
      $("header .container").css("z-index", "400");
      $("header .container").css("position", "relative");
      $("header .container").css("background-color", "transparent");
      $("header .container").css("padding", " 40px 20px");
    });
  }
});
//*** SCROLL SMOTHING
$("a").click(function (e) {
  let aHref = $(e.target).attr("href");
  let sectionOffset = $(aHref).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 2000);
});

//*** add active class in select link

allist = document.querySelectorAll("nav .links li a");
allist.forEach(function (ele) {
  ele.onclick = function () {
    //Remove Active ClassFrom All Elements
    allist.forEach(function (element) {
      element.classList.remove("active");
    });
    //Add Active Class To This Element
    this.classList.add("active");
  };
});

//*** Hover On Home Section

MyHeader = document.querySelector("header .container");
LeftArr = document.querySelector(".slide_icon i.left");
RightArr = document.querySelector(".slide_icon i.right");

//*** OFF-SET BTN

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll > navOffset) {
    $(".offsetBtn").fadeIn(500);
  } else {
    $(".offsetBtn").fadeOut(500);
  }
});

$(".offsetBtn").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
});

$(".Slider .container").slideDown(3000, function () {
  $(".home-btns").slideDown(3000);
});

//Contact Section <<Scale Image >>

const container = document.querySelector(".img_part");
const img = document.querySelector(".img_part img");
