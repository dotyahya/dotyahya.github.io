function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const iconToggle = document.querySelector("#hamburger-toggle i");
    const iconClose = document.querySelector("#icon-close");
    const body = document.querySelector("body");

    menu.classList.toggle("open");
    body.classList.toggle("shifted");

    if (menu.classList.contains('open')) {
        iconToggle.style.display = 'none'; 
        iconClose.style.display = 'block'; 
    } 
    
    else {
        iconToggle.style.display = 'block'; 
        iconClose.style.display = 'none'; 
    }
}
