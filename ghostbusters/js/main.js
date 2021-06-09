$(document).ready(function () {
  console.log("Привет"); //проверка подключения main.js

  const mMenuBtn = $(".m-menu-button"); //отследим клик по кнопке меню
  const mMenu = $(".m-menu");
  const tab = $('.tab');

  mMenuBtn.on("click", function () {
    //при событии клике на кнопку выполняется функция
    console.log("Вы нажали на кнопку меню");
    mMenu.toggleClass("active"); //присвоение и убирание класса по клику на кнопку
    $("body").toggleClass("no-scroll");
  });
  $("#nav-icon1").click(function () {
    $(this).toggleClass("open");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    // console.log($(this).attr('data-target')); //вытащить атрибут data-target и отловить в консоли
    let activeTabContent = $(this).attr("data-target"); //вводим переменную
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, //слайдов на одной прокрутке
    spaceBetween: 25, //воздух между слайдами
    loop: true,
    breakpoints: { //разное количество слайдов на разных экранах
      992: {
        slidesPerView: 4
      },
      768: { //на экранах меньше 768 одна карточка с новостью
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});