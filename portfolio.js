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
    let menu= document.getElementsByClassName("nav-links")[0];
    menu.style.display="flex";
    menu.style.right="0px";
    console.log("hi")
}
function hide_menu()
{
    let menu= document.getElementsByClassName("nav-links")[0];
    // menu.style.display="none";
    menu.style.right="-200px";
    // menu.style.display="-200px"; 
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


