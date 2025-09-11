/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const videoContainers = document.querySelectorAll(".artItem-div");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAIN///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
videoContainers.forEach(container => {
    const videoContainer = container.querySelector(".vidContainer");
    const videoEl = container. querySelector(".cld-video");
    const imgEl = container.querySelector("img");

    if(videoEl){
        const player = cloudinary.videoPlayer(videoEl, {
            cloudName: videoEl.dataset.cldCloudName,
            controls: false,
            autoplay: "on-scroll",
            muted: true,
            loop: true
        });

        imgEl.parentElement.addEventListener("mouseenter", () => {
            imgEl.style.display = "none";
            videoContainer.style.display = "block";
            videoEl.style.display = "block";
            player.play();
        });

        imgEl.parentElement.addEventListener("mouseleave", () => {
            player.pause();
            videoEl.style.display = "none";
            videoContainer.style.display = "none";
            imgEl.style.display = "block";
        });
    }
})