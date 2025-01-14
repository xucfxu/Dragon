//random Color Text
function rantext(id, text) {
    const colors = ['Red','Green','Blue','Orange','Chocolate','Cyan','Purple','Yellow','Black','Magenta'];
    const randomColorText = document.getElementById(id);
    text.split('').forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.color = colors[Math.floor(Math.random() * colors.length)];
    randomColorText.appendChild(span);
    })}

//hange random Color Text
function ranchtext(id, textIn, textOut) {
    const colors = ['Red', 'Green', 'Blue', 'Orange', 'Chocolate', 'Cyan', 'Purple', 'Yellow', 'Black', 'Magenta'];
    const element = document.getElementById(id);
    function applyRandomColor(text) {const randomColorText = document.getElementById(id);
        randomColorText.textContent = ''; // Clear existing content
        text.split('').forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.color = colors[Math.floor(Math.random() * colors.length)];
            randomColorText.appendChild(span)})}
    element.addEventListener('mouseover', function() {applyRandomColor(textIn)});
    element.addEventListener('mouseout',  function() {applyRandomColor(textOut)})}


//hange random Color Text
function ranchtextbak(id, xon, xout) {
    const element = document.getElementById(id);
    element.addEventListener('mouseover', function() {rantext(id, xon)});
    element.addEventListener('mouseout' , function() {rantext(id, xout)})}


//mouse hover change text
function anxs(id, xon, xout) {const button = document.getElementById(id);
          button.addEventListener('mouseover', function() {button.textContent = xon});
          button.addEventListener('mouseout', function() {button.textContent = xout})}
      

//mouse click dropdown buttons
function tgdrbt(id) {const dropdown = document.getElementById(id);
   if (dropdown.style.display === 'none' || dropdown.style.display === '') {
       dropdown.style.display = 'flex'}
   else {dropdown.style.display = 'none'}}

//headline
function replaceClass(id, class1, class2) {
    const element = document.getElementById(id);
    const classArray = class1.split(' '); // Split the classes into an array
    if (classArray.some(className => element.classList.contains(className))) {
        classArray.forEach(className => element.classList.remove(className));
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        classArray.forEach(className => element.classList.add(className))}}

       
/*slideshow slideshow slideshow slideshow slideshow*/
function plusDivs(n) {
  HLside(slideIndex += n);
}

function HLside(n) {
  let x=HLfiles.length;
  if (n > x) {slideIndex = 1}    
  if (n < 1) {slideIndex = x} ;
  // Hide both image and video
  image.style.display = "none";  
  video.style.display = "none";  
  // Check the type of media to display
  if (HLfiles[slideIndex - 1].endsWith('.mp4')) {
    // If the current media is a video
    video.src = HLfiles[slideIndex - 1]; // Set the video source
    video.style.display = "block"; // Show the video
    video.play(); // Play the video
  } else {
    // If the current media is an image
    image.src = HLfiles[slideIndex - 1]; // Set the image source
    image.style.display = "block"; // Show the image
    video.pause(); // Pause the video if it was playing
  }
}

const anima = [
    'w3-animate-top',
    'w3-animate-bottom',
    'w3-animate-left',
    'w3-animate-right',
    'w3-animate-opacity',
    'w3-animate-zoom',
    'w3-animate-fading',
    ]; //'w3-spin'
    
/*hilight media show hilight media show hilight media show hilight media show*/
function displayMedia() {
const DisplayMedia = HLfiles[i];
const randomAnimation = anima[Math.floor(Math.random() * anima.length)];
    image.className = '';     // Clear previous animation classes
    video.className = '';
    if (DisplayMedia.endsWith(".jpg") || DisplayMedia.endsWith(".png") || DisplayMedia.endsWith(".jpeg")) {
    image.src = DisplayMedia;
    image.style.display = 'block';
    video.style.display = 'none';
    image.classList.add(randomAnimation); // Add random animation class
     // Set a timeout for the image display duration
    setTimeout(() => {
    i = (i + 1) % HLfiles.length; // Increment index and loop back
    displayMedia(); // Call the function again
    }, 10000); // Display for 10 seconds
  } else {
    video.src = DisplayMedia;
    video.style.display = 'block';
    image.style.display = 'none';
    video.classList.add(randomAnimation); // Add random animation class
    video.play(); // Start playing the video
    // Add an event listener to handle when the video ends
    video.onended = () => {
    i = (i + 1) % HLfiles.length; // Increment index and loop back
    displayMedia()}; // Call the function again
   } }


  //thumbbar thumbbar thumbbar thumbbar thumbbar 
document.addEventListener("DOMContentLoaded", function thumbnail() {
    let widthx = (screen.width / HLfiles.length)-10;
    const thumbar = document.querySelector('.thumb');
    // 遍历HLfiles数组，为每个文件创建元素并添加到thumbar中
    HLfiles.forEach(file => {
    let mediaElement;
    const fileExtension = file.split('.').pop().toLowerCase(); // 获取文件扩展名
    if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png') {
        // 如果是图像文件，创建一个<img>元素
        mediaElement = document.createElement('img');
        mediaElement.src = file;
        mediaElement.onclick = () => {
            image.src = file; // Set the main image
            video.style.display = 'none'; // Hide video
            video.muted = true;
            image.style.display = 'block'; // Show image
            replaceClass('divHL', 'imvdHL rotate', 'imvdHLnew'); // Change class
        };
        } else if (fileExtension === 'mp4') {
        // 如果是视频文件，创建一个<video>元素
        mediaElement = document.createElement('video');
        mediaElement.src = file;
        mediaElement.autoplay = true; //false; // 根据需要设置是否自动播放
        mediaElement.loop = true; 
        mediaElement.muted = true; // Add this line for videos
        mediaElement.onclick = () => {
            video.src = file; // Set the main video
            image.style.display = 'none'; // Hide image
            video.style.display = 'block'; // Show video
            video.play(); // Play the video
            video.muted = false;
            replaceClass('divHL', 'imvdHL rotate', 'imvdHLnew'); // Change class
        } };
        mediaElement.style.width = widthx + 'px';
       //create thumbnail-bar
        thumbar.appendChild(mediaElement);
  }); });

