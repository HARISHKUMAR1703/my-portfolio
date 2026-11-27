
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
function openmenu(){
    document.querySelector("nav ul").style.right = "0";
}
function closemenu(){
    document.querySelector("nav ul").style.right = "-250px";
}

document.querySelectorAll("nav ul li a").forEach(function(link){
    link.addEventListener("click", closemenu);
});
const introWrapper = document.querySelector(".intro-wrapper");
const hero = document.querySelector("#header");
let ticking = false;
function updateHeroParallax() {
    if (!introWrapper || !hero) return;
    const wrapperTop = introWrapper.getBoundingClientRect().top;
    const progress = Math.min(
        Math.max(-wrapperTop / window.innerHeight, 0),
        1
    );
    const shift = progress * -120;
    const opacity = Math.max(1 - progress * 1.2, 0);
    const scale = 1 - progress * 0.12;
    const bgShift = progress * -45;
    const bgScale = 1.08 + progress * 0.08;
    hero.style.setProperty("--hero-progress", progress);
    hero.style.setProperty("--hero-shift", `${shift}px`);
    hero.style.setProperty("--hero-opacity", opacity);
    hero.style.setProperty("--hero-scale", scale);
    hero.style.setProperty("--bg-shift", `${bgShift}px`);
    hero.style.setProperty("--bg-scale", bgScale);
    ticking = false;
}
window.addEventListener("scroll", () => {
    if (!ticking) {
        requestAnimationFrame(updateHeroParallax);
        ticking = true;
    }
}, { passive: true });
window.addEventListener("resize", updateHeroParallax);
updateHeroParallax();