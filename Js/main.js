// document.addEventListener("mouseover", e => {
//     if (e.target.matches("#bookmarked")) {
//         // console.log(e.target);
//         let icon = e.target;
//         icon.src = "images/icon-bookmark-active.svg"        
//     }
// })

// document.addEventListener("mouseout", e => {
//     if (e.target.matches("#bookmarked")) {
//         // console.log(e.target);
//         let icon = e.target;
//         icon.src = "images/icon-bookmark.svg"
//     }
// })
const modal = document.getElementById("modal");
const body = document.body;
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".menu");
const menuLink = document.querySelector(".menu ul li a");


document.addEventListener("click", e => {
    if (e.target.matches("#bookmarked-icon *")) {
        const icon = document.getElementById("bookmarked-active");
        // console.log(icon);
        icon.classList.toggle("hidden")
        document.getElementById("bookmarked").classList.toggle("hidden");
    }

    if (e.target.matches("#modal-btn")) {
        // console.log(e.target);
        // const modal = document.getElementById("modal");
        modal.classList.add("is-active")
        body.classList.add("no-scroll");
    }

    if (e.target.matches("#close-icon *")) {
        modal.classList.remove("is-active");
        body.classList.remove("no-scroll");        
    }

    if (e.target.matches("#modal__selected-input")) {
        // console.log(e.target);
        document.getElementById('modal__selected').classList.toggle('is-active');
        document.getElementById('modal__selected-info').classList.toggle('hidden');
        // body.classList.add("no-scroll");
    }

    if (e.target.matches('#modal__success')) {
        console.log(e.target);
        modal.classList.remove("is-active");
        document.getElementById('modal__complete').classList.add("is-active");
        body.classList.add("no-scroll");
        // main.classList.add("modal");
    }

    if (e.target.matches('#modal__close')) {
        document.getElementById('modal__complete').classList.remove("is-active");
        body.classList.remove("no-scroll");
        // main.classList.remove("modal");
        
    }

    if (e.target.matches(".hamburger *")) {
        console.log(e.target);
        hamburger.classList.toggle("is-active");
        navBar.classList.toggle("open");
    }

    if (e.target.matches(".menu ul li a")) {
        console.log(e.target);
        navBar.classList.remove("open");
        hamburger.classList.remove("is-active");
    }
})
