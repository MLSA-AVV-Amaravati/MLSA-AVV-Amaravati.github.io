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
    //slide
    document.addEventListener('DOMContentLoaded', function() {
  const images = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg'];
  let currentIndex = 0;

  document.querySelector('.left-arrow').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImages();
  });

  document.querySelector('.right-arrow').addEventListener('click', function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImages();
  });

  function updateImages() {
    const imgUrls = [];
    for (let i = 0; i < 3; i++) {
      imgUrls.push(`url('./images/${images[(currentIndex + i) % images.length]}')`);
    }
    document.querySelector('.parallelogram-1').style.backgroundImage = imgUrls[0];
    document.querySelector('.parallelogram-2').style.backgroundImage = imgUrls[1];
    document.querySelector('.parallelogram-3').style.backgroundImage = imgUrls[2];
  }

  updateImages();
});


    
      
