let pages = document.getElementById("pages"), pagesModal = document.getElementById("pages-modal"), main = document.getElementById("main");

pages.addEventListener("click", () => { 

    if (pagesModal.style.display == "none") {
        pagesModal.style.display = "flex";
        main.style.marginTop = "-19px"
    } else {
        pagesModal.style.display = "none";
        main.style.marginTop = "100px"
    }

});