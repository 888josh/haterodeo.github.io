const menu = document.getElementById("menu");

window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden");
    document.querySelector(".name").classList.add("name--hidden");
});

setTimeout(()=>{

    const text = document.getElementById('name');

    text.style.display = 'none';

},1000);

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item,index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });