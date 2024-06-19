// let currentSection = 0;
//         const sections = document.querySelectorAll('.section');
//         const totalSections = sections.length;
//         const container = document.querySelector('.container');
//         let scrollAmount = 0;
//         const scrollThreshold = 400; // 스크롤 감도를 낮추기 위해 증가

//         function scrollPage(event) {
//             scrollAmount += event.deltaY;

//             if (scrollAmount >= scrollThreshold) {
//                 // Scroll down
//                 if (currentSection < totalSections - 1) {
//                     currentSection++;
//                     container.style.transform = `translateY(-${currentSection * 100}vh)`;
//                     scrollAmount = 0;
//                 }
//             } else if (scrollAmount <= -scrollThreshold) {
//                 // Scroll up
//                 if (currentSection > 0) {
//                     currentSection--;
//                     container.style.transform = `translateY(-${currentSection * 100}vh)`;
//                     scrollAmount = 0;
//                 }
//             }
//         }

//         function navigateTo(sectionIndex) {
//             // Reset scrollAmount when navigating
//             console.log("navigateTo,sectionIndex:",sectionIndex);
//             scrollAmount = 0;
//             currentSection = sectionIndex;
//             container.style.transform = `translateY(-${sectionIndex * 100}vh)`;
//         }

//         window.addEventListener('wheel', scrollPage);
        

//         // 초기 로드
// $(document).ready(function() {
//     navigateToFirst(0); // 처음에 About 페이지를 로드
// });


// function navigateToFirst(page) {
//     var sectionIds = ["#page1", "#page2", "#page3"];
//     var urls = ["about.html", "skill.html", "project.html"];
    
//     $(sectionIds[page]).load(urls[page], function(response, status, xhr) {
//         if (status == "error") {
//             console.log("Error loading page: " + xhr.status + " " + xhr.statusText);
//         }
//     });
// }

//         document.getElementById('tistoryLogo').addEventListener('click', function() {
//             window.open('https://lifeisgoguma.tistory.com/', '_blank');
//         });
//         document.getElementById('github').addEventListener('click', function() {
//             window.open('https://github.com/jindamgom?tab=repositories/', '_blank');
//         });







let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;
const container = document.querySelector('.container');
let scrollAmount = 0;
const scrollThreshold = 400; // 스크롤 감도를 낮추기 위해 증가

function scrollPage(event) {
    scrollAmount += event.deltaY;

    if (scrollAmount >= scrollThreshold) {
        // Scroll down
        if (currentSection < totalSections - 1) {
            currentSection++;
            container.style.transform = `translateY(-${currentSection * 100}vh)`;
            scrollAmount = 0;
        }
    } else if (scrollAmount <= -scrollThreshold) {
        // Scroll up
        if (currentSection > 0) {
            currentSection--;
            container.style.transform = `translateY(-${currentSection * 100}vh)`;
            scrollAmount = 0;
        }
    }
}

function navigateTo(sectionIndex) {
    // Reset scrollAmount when navigating
    console.log("navigateTo");
    scrollAmount = 0;
    currentSection = sectionIndex;
    container.style.transform = `translateY(-${sectionIndex * 100}vh)`;
}

window.addEventListener('wheel', scrollPage);

// 초기 로드
$(document).ready(function() {
    loadSections();
});

function loadSections() {
    var sectionIds = ["#page1", "#page2"];
    var urls = ["about.html", "project.html"];
    
    sectionIds.forEach(function(sectionId, index) {
        $(sectionId).load(urls[index], function(response, status, xhr) {
            if (status == "error") {
                console.log("Error loading page: " + xhr.status + " " + xhr.statusText);
            }
        });
    });
}

document.getElementById('tistoryLogo').addEventListener('click', function() {
    window.open('https://lifeisgoguma.tistory.com/', '_blank');
});
document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/jindamgom?tab=repositories/', '_blank');
});