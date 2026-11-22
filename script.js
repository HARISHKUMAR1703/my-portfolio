function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
document.getElementById("see-more").addEventListener("click", function() {
    document.getElementById("extra-projects").hidden = false;
    this.style.display = "none";
}); 