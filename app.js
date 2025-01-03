// let nextDom = document.getElementById("next");
// let prevDom = document.getElementById("prev");
// let carouselDom = document.querySelector(".carousel");
// let listItemDom = document.querySelector(".carousel .list");
// let thumbnailDom = document.querySelector(".carousel .thumbnail");

// let timeRunning = 3000; 
// let timeAutoNext=7000;
// let runTimeOut; 
// let  runAutoRun=setTimeout(()=>{
//     nextDom.click();
    
//   },timeAutoNext)

// nextDom.onclick = function () {
//   showSlider("next");
// };

// prevDom.onclick = function () {
//   showSlider("prev");
// };

// function showSlider(type) {
//   let itemSlider = document.querySelectorAll(".carousel .list .item");
//   let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

//   if (type === "next") {
//     listItemDom.appendChild(itemSlider[0]);
//     thumbnailDom.appendChild(itemThumbnail[0]);
//     carouselDom.classList.add("next");
//   } else if (type === "prev") {
//     listItemDom.prepend(itemSlider[itemSlider.length - 1]);
//     thumbnailDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
//     carouselDom.classList.add("prev");
//   }

//   clearTimeout(runTimeOut);
//   runTimeOut = setTimeout(() => {
//     carouselDom.classList.remove("next", "prev");
//   }, timeRunning);
//   clearTimeout(runAutoRun);
 
// }
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

let timeRunning = 3000; 
let timeAutoNext = 7000;
let runTimeOut; 
let runAutoRun;

function resetAutoRun() {
  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}

nextDom.onclick = function () {
  showSlider("next");
  resetAutoRun();
};

prevDom.onclick = function () {
  showSlider("prev");
  resetAutoRun();
};

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else if (type === "prev") {
    listItemDom.prepend(itemSlider[itemSlider.length - 1]);
    thumbnailDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next", "prev");
  }, timeRunning);
}

// Start the auto-run timer on page load
resetAutoRun();
