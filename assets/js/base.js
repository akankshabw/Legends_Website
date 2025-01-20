const openPoster=document.getElementsByClassName("openPoster");
const closePoster=document.getElementsByClassName("closePoster");
// const Poster=document.getElementById("Poster");


const divsToHide = document.getElementsByClassName("poster"); //divsToHide is an array
for(var i = 0; i < divsToHide.length; i++){
    divsToHide[i].style.display = "none";
} 
     
function openModal(divId) {
    for(var i = 0; i < divsToHide.length; i++){
        if(divsToHide[i].style.display === "block"){
            divsToHide[i].style.display = "none";
        }
    }
    var modal = document.getElementById(divId);
    modal.style.display = "block";
    
}
  
function closeModal(divId) {
    var modal = document.getElementById(divId);
    modal.style.display = "none";
}



// Function to show or hide candidate modal
let genModal = document.querySelector(".general");
genModal.addEventListener("mouseenter",()=>{
    document.querySelector("#generalDesc").style.height = "100%";
    document.querySelector("#genH4").innerText = "Click Here to \nSee Candidates";
    genModal.style.scale = '1.05';
})
genModal.addEventListener("mouseleave",()=>{
    document.querySelector("#generalDesc").style.height = "fit-content";
    document.querySelector("#genH4").innerText = "General Elections";
    genModal.style.scale = '1';
})

let midModal = document.querySelector(".mid");
midModal.addEventListener("mouseenter",()=>{
    document.querySelector("#midDesc").style.height = "100%";
    document.querySelector("#midH4").innerText = "Click Here to \nSee Candidates";
    midModal.style.scale = '1.05';
})
midModal.addEventListener("mouseleave",()=>{
    document.querySelector("#midDesc").style.height = "fit-content";
    document.querySelector("#midH4").innerText = "Mid-Term and By Elections";
    midModal.style.scale = '1';
})



// function open() {
//     var x = document.getElementById("poster1");
//     x.style.display = "block";
//   }

// function close() {
//     var x = document.getElementByclass("closePoster");
//     x.style.display = "none";
// }


// for(var i=0; i< openPoster.length; i++){
//     openPoster[i].addEventListener('click', function() {
//         divsToHide[i].style.display = 'block';
//     });
// }





// for(var i=0; i< closePoster.length; i++){
//     closePoster[i].addEventListener('click', function() {
//         divsToHide[i].style.display = 'none';
//     });
// }
  
    

// Function to scroll to a tag given its cssSelector
const scrollto = (el) => {
    let elementPos = document.querySelector(el).offsetTop;
    window.scroll({
        top: elementPos,
        behavior: 'smooth'
    });
}

// Function to check if mobile menu is active
let mobileMenuActive = function (){
    let body = document.querySelector("body");
    return(body.classList.contains("mobile-menu-active"))
}

// Making the navigation menu responsive
let navMenuAs = document.querySelectorAll("#header a");
navMenuAs.forEach((navMenuA) => {
    navMenuA.addEventListener("mouseenter", (event) => {
        if (!mobileMenuActive()){
            let target = event.target;
            let span = target.querySelector("span");
            let moveLen = span.offsetWidth;

            target.style.transform = `translateX(-${moveLen}px)`;
            span.classList.remove("visibility-hidden");
            span.classList.add("visibility-visible");
        }
    })
    navMenuA.addEventListener("mouseleave", (event) => {
        if (!mobileMenuActive()){
            let target = event.target;
            let span = target.querySelector("span");

            target.style.transform = `translateX(0)`;
            span.classList.remove("visibility-visible");
            span.classList.add("visibility-hidden");
        }
    })
})

// Functioning of nav menu button in mobile
let mobileMenuBtn = document.querySelector(".mobile-menu-button");
mobileMenuBtn.addEventListener("click", (event) => {
    document.querySelector("body").classList.toggle("mobile-menu-active");

    navMenuAs.forEach((navMenuA) => {
        navMenuA.querySelector("span").classList.toggle("visibility-hidden");
    });

    mobileMenuBtn.classList.toggle("bi-list");
    mobileMenuBtn.classList.toggle("bi-x");
})

// Scrolling to various sections on clicking nav
let navLinks = document.querySelectorAll("#header .nav-menu a");
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function(event) {
        if (this.hash){
            event.preventDefault();
            if (mobileMenuActive()){
                document.querySelector("body").classList.toggle("mobile-menu-active");

                navMenuAs.forEach((navMenuA) => {
                    navMenuA.querySelector("span").classList.toggle("visibility-hidden");
                });

                mobileMenuBtn.classList.toggle("bi-list");
                mobileMenuBtn.classList.toggle("bi-x");
            }
            scrollto(this.hash);
        }
    })
})

// Scrolling to from Useful Links in footer
// Add the "scroll-to" class to any link in the
// website that should scroll to some section
// using the '#id' href when clicked
let scrollLinks = document.querySelectorAll(".scroll-to");
scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', function(event){
        if (this.hash){
            event.preventDefault();
            scrollto(this.hash);
        }
    })
})

// Highlighting current section in navigation bar
const navbarLinksActive = () => {
    let position = window.scrollY + 200;
    navLinks.forEach(navLink => {
        if (!navLink.hash) return;
        let section = document.querySelector(navLink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    })
}
window.addEventListener('load', navbarLinksActive);
document.addEventListener('scroll', navbarLinksActive);







// Initialising javascript for announcments
// https://swiperjs.com/demos#slides-per-view


window.onload = () => {
    // Automatically transition to Announcements page after 5 seconds
    setTimeout(() => {
        goToAnnouncementsPage();
    }, 5000);
};

function goToAnnouncementsPage() {
    const homePage = document.getElementById("home-page");
    const announcementsPage = document.getElementById("Announcements");

    // Animate transition
    homePage.style.transform = "translateX(-100%)";
    announcementsPage.style.transform = "translateX(0)";
}

function goToHomePage() {
    const homePage = document.getElementById("home-page");
    const announcementsPage = document.getElementById("Announcements");

    // Animate transition back to the home page
    homePage.style.transform = "translateX(0)";
    announcementsPage.style.transform = "translateX(100%)";
}


let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;
let timeAutoNext = 10000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

const slider = document.querySelector('.slider');
const circle = document.querySelector('.circle');
const leftPage = document.querySelector('.intro-container');
const rightPage = document.querySelector('.page-hidden');

let isDragging = false;
let startX = 0;
let currentX = 0;

// Start dragging the circle
circle.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  circle.style.transition = 'none'; // Disable transition while dragging
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - startX;
  currentX = Math.max(0, Math.min(30, deltaX)); // Keep within slider bounds (50px width - circle width)
  circle.style.left = `${currentX}px`;
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;

  // Determine final position
  const midpoint = 15; // Half of slider width (50px) minus circle width (20px)
  const moveRight = currentX >= midpoint;

  // Snap circle to left or right
  circle.style.transition = 'left 0.3s ease';
  circle.style.left = moveRight ? '30px' : '0px';

  // Show corresponding page
  if (moveRight) {
    leftPage.style.transform = 'translateX(-100%)';
    rightPage.style.transform = 'translateX(0%)';
  } else {
    leftPage.style.transform = 'translateX(0%)';
    rightPage.style.transform = 'translateX(100%)';
  }
});

// Add mousedown event for dragging
circle.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX; // Record the starting position of the drag
    circle.style.transition = 'none'; // Disable transition during drag
  });

// Automatically move the circle and switch to the second page after 5 seconds
setTimeout(() => {
    circle.style.transition = 'left 0.3s ease'; // Smooth transition
    circle.style.left = '30px'; // Move circle to the right
  
    // Transition pages
    leftPage.style.transform = 'translateX(-100%)'; // Hide left page
    rightPage.style.transform = 'translateX(0%)';   // Show right page
  }, 5000);








// Initialising swiper bundle coverflow effect for testimonial images
// https://swiperjs.com/swiper-api#coverflow-effect-parameters
var testSwiper = new Swiper(".testimonials-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    rewind: true,
    coverflowEffect: {
        depth: 400,
        modifier: 1,
        rotate: 0,
        scale: 1,
        slideShadows: true,
        stretch: 0
    },
    navigation: {
        prevEl: ".testimonials-swiper-prev-btn",
        nextEl: ".testimonials-swiper-next-btn"
    },
    keyboard: {
        enabled: true
    }
})

let testVisibilityFunc = function (){
    testSwiper.slides.forEach((slide) => {
        if (slide.style["z-index"] <= -1){
            slide.classList.add("visibility-hidden");
            slide.classList.remove("visibility-visible");
        } else {
            slide.classList.add("visibility-visible");
            slide.classList.remove("visibility-hidden");
        }
    })
};

testVisibilityFunc();
testSwiper.on("activeIndexChange", testVisibilityFunc);

// Initialising swiper bundle coverflow effect for testimonial images
// https://swiperjs.com/demos#effect-fade
var testTextSwiper = new Swiper(".test-text-swiper", {
    effect: "slde",
    grabCursor: true,
    centeredSlides: true,
    rewind: true,
    pagination: {
        el: ".testimonials-swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 4500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    }
})


testSwiper.controller.control = testTextSwiper;
testTextSwiper.controller.control = testSwiper;

// Animation on Scroll initialisation
window.addEventListener('load', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    })
});

// Preloader
let preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
        preloader.remove()
    });
}
