

// Toggle video piaoliuping
document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll("button[id^='tog']"); // Corrected selector
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const videoId = button.id.replace("tog", "vid"); // Corrected to match video IDs
            const video = document.getElementById(videoId);
            if (video.style.display === "none" || video.style.display === "") {
                video.style.display = "block"; // Show the video
                video.play(); // Start playing the video
            } else {
                video.style.display = "none"; // Hide the video
                video.pause(); // Pause the video
                video.currentTime = 0}; // Reset the video to the start
        });  });  });
        
        
// Toggle image piaoliuping
document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll("button[id^='tog']"); // Corrected selector
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const imageId = button.id.replace("tog", "img"); // Corrected to match video IDs
            const image = document.getElementById(imageId);
            if (image.style.display === "none" || image.style.display === "") {
                image.style.display = "block"; // Show the video
                button.textContent = 'Hide Image';
            } else {
                image.style.display = "none"; // Hide the video
                button.textContent = 'Show Image'};
            });  });  });
