const emojiSection = document.querySelector('.section-covid');
const emojiEyeBall = document.querySelectorAll('.emoji-eyes__eye-ball');

emojiSection.addEventListener('mousemove', function(e) {
    // OPTION #1
    let x = e.clientX * 100 / window.innerWidth + "%";
    // e.clientX gets the horizontal coordinates of the mouse
    
    let y = e.clientY * 100 / window.innerHeight + "%";
    // e.clientY gets the vertical coordinates of the mouse

    emojiEyeBall.forEach(eye => {

        eye.style.left = x;
        eye.style.top = y;
        eye.style.transform = `translate(-${x}, -${y})`;
    });

});