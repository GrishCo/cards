// создаем значение slides, -
// которое включает в себя массив элементов с классом .slide;
// массив получаем с помощью функции document, -
// методом .querySelectorAll;
const slides = document.querySelectorAll(".slide");

// обходим полученный массив, расположенный в slides -
//  с итерацией (шагом) slide;
// метод .addEventListener позволяет фиксировать события/действия над элементами с указанным классом (slide);
// *function () = () =>
for (const slide of slides) {
  slide.addEventListener("click", () => {
    // создаем функцию очистки значений slide от класса active;
    clearActiveClasses();

    // для значения slide: -
    // методом .classList находим класс элемента; -
    // методом .add добавляем к классу значение .active (класс active);
    slide.classList.add("active");
  });
}

// описываем функцию clearActiveClasses:
// методом forEach перебираем массив slides; -
// методом .remove удаляем класс .active -
// в списке элементов slide, видимый методом .classList;
function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
