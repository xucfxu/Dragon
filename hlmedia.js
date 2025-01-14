const HLfiles = [   
    "media/favback.jpg",
    "media/mv7.mp4",
    "media/im2.jpg",
    "media/im3.jpg",
    "media/mv3.mp4",
    "media/mv4.mp4",
    "media/im4.jpg",
    "media/im5.jpg",
    "media/im7.jpg",
    "media/im8.jpg",
    "media/im9.jpg",
    "media/im0.jpg",
    "media/first play.mp4",
    "media/mv2.mp4",
    "media/mv6.mp4",
    "media/crawl.mp4",
    "media/mv0.mp4"];

const image = document.getElementById('hlimg');
const video = document.getElementById('hlvid');
let i = 0
let slideIndex = 1; // Initialize slideIndex to 1
   
// Start the media display
displayMedia();
HLside(slideIndex);



/*const displayElement = document.getElementById("thumbar");
const fileHTML = HLfiles.map(file => `<span>${file}</span>`).join(', ');
displayElement.innerHTML += fileHTML;*/

