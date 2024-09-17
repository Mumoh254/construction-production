const playButton = document.getElementById('play-video-btn');
const video = document.getElementById('showroom-video');


video.muted = true; 
video.playsinline = true;


playButton.addEventListener('click', function() {

    video.play().catch(function(error) {
        console.log("Video play failed:", error);
    });
});





console.log(  "U")


function countUp(element) {
    const target = +element.getAttribute('data-target');
    const speed = 200; 
    const updateCount = () => {
        const currentCount = +element.innerText;
        const increment = target / speed;
        
        if (currentCount < target) {
            element.innerText = Math.ceil(currentCount + increment);
            setTimeout(updateCount, 10);
        } else {
            element.innerText = target;
        }
    };
    updateCount();
}

function countUp(element) {
    const target = +element.getAttribute('data-target');
    const suffix = element.getAttribute('data-suffix') || ''; 
    const speed = 200;
    const updateCount = () => {
        const currentCount = +element.innerText.replace(suffix, ''); 
        const increment = target / speed;
        
        if (currentCount < target) {
            element.innerText = Math.ceil(currentCount + increment) + suffix;
            setTimeout(updateCount, 10);
        } else {
            element.innerText = target + suffix;
        }
    };
    updateCount();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.count');
            counters.forEach(counter => countUp(counter));
            observer.disconnect(); 
        }
    });
}, { threshold: 0.5 }); 


observer.observe(document.querySelector('.stats'));