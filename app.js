function slidesPlugin (activeSlide = 0) {
    const slides = document.querySelectorAll('.slide') // Объявляем переменную slides.Получаем ее с помощью метода querySelectorAll,в строковом формате получаем каждый элемент из файла

slides [activeSlide].classList.add('active')


for (const slide of slides) {
// в цикле объявили переменную slide, которая будет брать значения из переменной slides с помощью цилка <For ... of>
    slide.addEventListener('click', ()=> {
        clearActiveClasses () 
// обращаемся к переменной slide и используем функцию с событием Клик

        slide.classList.add('active') // обращаемсся к активному слайду
    })
}


function clearActiveClasses() {
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
} // функция для удаления класса active с помощью метода массива forEach
}

slidesPlugin ()