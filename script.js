const burger = () => {
    const burger = document.querySelector('.burger');
    const mobile_menu = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        mobile_menu.classList.toggle('M_noDisplay');
    })
}
burger();