document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");
    
    function toggleMenu() {
        menu.classList.toggle("hide");
    }
    menuButton.addEventListener("click", toggleMenu);
    

    function handleResize() {
        if (window.innerWidth > 1000) {
            menu.classList.remove("hide");
        } else {
            menu.classList.add("hide");
        }
    }
    handleResize(); 
    window.addEventListener("resize", handleResize);
    
    
    function viewerTemplate(imgSrc, altText) {
        return `
            <div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${imgSrc}" alt="${altText}">
            </div>
        `;
    }
    
    function viewHandler(event) {
        if (event.target.tagName === "IMG") {
            let imgSrc = event.target.src;
            let altText = event.target.alt;
            
            document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, altText));
            
            document.querySelector(".close-viewer").addEventListener("click", closeViewer);
        }
    }
    
    function closeViewer() {
        document.querySelector(".viewer").remove();
    }
    
    document.querySelector(".gallery").addEventListener("click", viewHandler);
});