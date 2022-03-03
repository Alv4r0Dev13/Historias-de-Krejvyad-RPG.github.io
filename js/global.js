let pages = document.getElementById("pages"), pagesModal = document.getElementById("pages-modal").style.display, main = document.getElementById("main").style.marginTop;

pages.addEventListener("click", () => { 

    if (pagesModal == "none") {
        pagesModal = "flex";
        main.style = "-19px"
    } else {
        pagesModal = "none";
        main = "100px"
    }

});