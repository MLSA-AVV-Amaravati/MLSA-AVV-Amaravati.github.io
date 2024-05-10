const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    function toggleMenu() {
        menu.classList.toggle('visible');
    }
    menuIcon.addEventListener('click', toggleMenu);
    var scrollcontainer= document.querySelector(".gallery");
    var backbutton=document.getElementById("back-button");
    var nextbutton=document.getElementById("next-button");
    scrollcontainer.addEventListener("wheel",(evt) => {
        evt.preventDefault();
        scrollcontainer.scrollLeft+=evt.deltaY;
        scrollcontainer.style.scrollBehavior="auto";
    });
    nextbutton.addEventListener("click",()=>{
        scrollcontainer.style.scrollBehavior="smooth";
        scrollcontainer.scrollLeft+=1300;
    })
    backbutton.addEventListener("click",()=>{
        scrollcontainer.style.scrollBehavior="smooth";
        scrollcontainer.scrollLeft-=1300;
    })
    var scrollcontainerone= document.querySelector(".gallery-one");
    var backbuttonone=document.getElementById("back-button-one");
    var nextbuttonone=document.getElementById("next-button-one");
    scrollcontainerone.addEventListener("wheel",(evt) => {
        evt.preventDefault();
        scrollcontainerone.scrollLeft+=evt.deltaY;
        scrollcontainerone.style.scrollBehavior="auto";
    });
    nextbuttonone.addEventListener("click",()=>{
        scrollcontainerone.style.scrollBehavior="smooth";
        scrollcontainerone.scrollLeft+=1300;
    })
    backbuttonone.addEventListener("click",()=>{
        scrollcontainerone.style.scrollBehavior="smooth";
        scrollcontainerone.scrollLeft-=1300;
    })
