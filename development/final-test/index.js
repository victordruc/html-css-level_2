
// Toogle - Panel-----------------------------------------
let switchPanel = document.querySelector(".switch-panel")

document.querySelector(".toogle-switch").onclick = function () {
    if(!document.querySelector(".switch-panel-hide") & !document.querySelector(".switch-panel-show")){
        switchPanel.classList.add("switch-panel-show")
        return false;
    }
    
    else if (document.querySelector(".switch-panel-show")){
        switchPanel.classList.remove("switch-panel-show")
        switchPanel.classList.toggle("switch-panel-hide")
        return false;
    }
    else if (document.querySelector(".switch-panel-hide")){
        switchPanel.classList.add("switch-panel-show")
        switchPanel.classList.toggle("switch-panel-hide")
        return false;
    }
}

// Scroll Navbar -------------------------------------------------------

window.onscroll = function () {
    let scroll = window.pageYOffset;
    console.log(scroll)
    if (scroll > 80) {
        document.querySelector(".navbar").classList.add("navbar-show")
        document.querySelector(".navbar").classList.remove("navbar-hide")
    }
    else {
        document.querySelector(".navbar").classList.remove("navbar-show")
        document.querySelector(".navbar").classList.add("navbar-hide")
    }
}

// Run scroll-spy bootstrap -----------------------

let scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-spy'
  })
