// let startY;
// let endY;
// let isScrolling = false;

// document.addEventListener('touchstart', function(event) {
//     startY = event.touches[0].clientY;
// }, false);

// document.addEventListener('touchend', function(event) {
//     endY = event.changedTouches[0].clientY;
//     handleSwipe();
// }, false);

// document.addEventListener('wheel', function(event) {
//     handleScroll(event);
// }, false);

// function handleSwipe() {
//     let deltaY = startY - endY;
//     if (Math.abs(deltaY) > 50) { // Swipe threshold
//         scrollToSection(deltaY);
//     }
// }

// function handleScroll(event) {
//     if (!isScrolling) {
//         isScrolling = true;
//         let deltaY = event.deltaY;
//         scrollToSection(deltaY);
//         setTimeout(() => {
//             isScrolling = false;
//         }, 1000); // Prevent multiple scrolls within a short period
//     }
// }

// function scrollToSection(deltaY) {
//     let sections = document.querySelectorAll('.section');
//     let currentSectionIndex = 0;

//     // Identify the currently visible section
//     sections.forEach((section, index) => {
//         let rect = section.getBoundingClientRect();
//         if (rect.top <= 0 && rect.bottom > 0) {
//             currentSectionIndex = index;
//         }
//     });

//     if (deltaY > 0) {
//         // Scroll down or swipe up - scroll to next section
//         if (currentSectionIndex < sections.length - 1) {
//             sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
//         }
//     } else if (deltaY < 0) {
//         // Scroll up or swipe down - scroll to previous section
//         if (currentSectionIndex > 0) {
//             sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
//         }
//     }
// }

summary = document.getElementsByClassName("summary")[0];
btn = document.getElementById("summary");
btn.addEventListener("click", function() {
    summary.classList.toggle('hidden')
})

closeElements = document.getElementsByClassName("close")
for (let i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener("click", function() {
        summary.classList.toggle('hidden')
    })
  }
// btnClose = document.getElementById("close");
// btnClose.addEventListener("click", function() {
//     summary.classList.toggle('hidden')
// })