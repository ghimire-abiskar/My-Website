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
    let nav= document.getElementById("menu");
    menu.style.display="flex";
    menu.style.right="0";
}
function hide_menu()
{
    let nav= document.getElementById("menu");
    menu.style.display="none";
    // menu.style.right="-200px";    
}
function hide_menu()
{
    let nav= document.getElementsByClassName("nav-links")[0];
    nav.remove("active");
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


