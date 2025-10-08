const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('contextmenu', e => {
        e.preventDefault();
    });
});

//Not exactly foolproof, but helps protect images from the average user by prohibiting easy downloading of the image