document.addEventListener("DOMContentLoaded", function () {
    setupVideoModals();
});

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

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#experience');
    const toggleButton = document.getElementById('toggle-skills');
    const allSkills = document.getElementById('all-skills');

    toggleButton.addEventListener('click', () => {
        if (allSkills.style.display === 'none' || allSkills.style.display === '') {
            allSkills.style.display = 'flex';
            section.classList.add('expanded');
            toggleButton.textContent = 'Hide All Skills';
        }

        else {
            allSkills.style.display = 'none';
            section.classList.remove('expanded');
            toggleButton.textContent = 'Show All Skills';
        }
    });
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    document.querySelector('.slider').scrollBy({
        left: -360,
        behavior: 'smooth'
    });
});

document.querySelector('.next-btn').addEventListener('click', () => {
    document.querySelector('.slider').scrollBy({
        left: 360,
        behavior: 'smooth'
    });
});

function setupVideoModals() {
    var modal = document.getElementById("video-modal");
    var modalVideo = document.getElementById("modal-video");
    var videoSource = modalVideo.querySelector("source");
    var demoLinks = document.querySelectorAll(".card-link-2");
    var span = document.getElementsByClassName("close")[0];

    demoLinks.forEach(function (link) {
        link.onclick = function (event) {
            event.preventDefault();
            videoSource.src = this.getAttribute("data-video-src");
            modalVideo.load();
            modal.style.display = "block";
        }
    });

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

