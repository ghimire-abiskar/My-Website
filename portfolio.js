const ele=document.getElementsByClassName("nav-bar")[0]
const sticky=ele.offsetTop;
window.onscroll=()=>{
    if(window.scrollY>sticky)
    {
        ele.classList.add("scrolled");
    }
    else
    {
        ele.classList.remove("scrolled");
    }
}
function show_menu()
{
    let nav= document.getElementsByClassName("nav-links")[0];
    nav.style.display="flex";
}
function hide_menu()
{
    let nav= document.getElementsByClassName("nav-links")[0];
    nav.style.display="none";
}
function handleMenuDisplay() {
    const nav = document.getElementsByClassName("nav-links")[0];

    if (window.innerWidth > 991) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}
handleMenuDisplay();
window.addEventListener("resize", handleMenuDisplay);


