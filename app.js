let imageArray = ["https://cdn-icons-png.flaticon.com/256/4228/4228711.png",
    "https://cdn-icons-png.flaticon.com/256/4228/4228703.png",
    "https://cdn-icons-png.flaticon.com/256/4213/4213663.png",
    "https://cdn-icons-png.flaticon.com/256/4213/4213732.png",
    "https://cdn-icons-png.flaticon.com/256/4193/4193371.png",
    "https://cdn-icons-png.flaticon.com/256/4193/4193310.png",
    "https://cdn-icons-png.flaticon.com/256/4213/4213650.png",
    "https://cdn-icons-png.flaticon.com/256/4193/4193253.png"
]

let lockBoard = false;
let flippedImages = [];
let matchedImages = 0;
let totalImages = imageArray.length * 2;
let memoryGameContainerEl = document.querySelector(".memoryGameContainer");
memoryGameContainerEl.classList.add('grid-container');
let gameContainerEl = document.getElementById("gameContainer");
gameContainerEl.appendChild(memoryGameContainerEl);
const popUpEl = document.querySelector(".popUp");
let userName = document.getElementById("pinInput");
const lblDisplayEl = document.getElementById("lblDisplay");
let startTime, endTime;

function StartGame()
{
    const shuffledImages = shuffleArray([...imageArray,...imageArray]); 
    shuffledImages.forEach((image)=>{
        
            let gridItem = document.createElement('div');        
            memoryGameContainerEl.appendChild(gridItem);
            gridItem.classList.add('grid-item');
            

            const img = document.createElement('img');
                    
            img.src = image;
            // img.src = questionMark;
            gridItem.appendChild(img);
            
            gridItem.addEventListener('click',() => {
                // gridItem.style.background="none"; 
                // img.src = image;
                flipImage(gridItem) }) ;               
   
    }); 
}    
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }   


function flipImage(image) {
    // startTimer();
    if (lockBoard || image.classList.contains('flipped') || image.classList.contains('matched')) {
      return;
    }
  
    image.classList.add('flipped');
    flippedImages.push(image);
  
    if (flippedImages.length === 2) {
      checkMatch();
    }    
  }
  function checkMatch() {
    const firstimage = flippedImages[0];
    const secondimage = flippedImages[1];
  
    if (firstimage.innerHTML === secondimage.innerHTML) {
      firstimage.classList.add('matched');
      secondimage.classList.add('matched');
      matchedImages += 2;
  
      if (matchedImages === totalImages) {
        // endTimer();
        setTimeout(() => alert('Hooray, You did it!'), 300);
      }
  
      resetflippedImages();
    } else {
      setTimeout(() => {
        firstimage.classList.remove('flipped');
        secondimage.classList.remove('flipped');
        resetflippedImages();
      }, 1000);
    }
  }
  
  function resetflippedImages() {
    flippedImages = [];
    lockBoard = false;
  }
  function okClick() {
    gameContainerEl.style.display = "block";
     popUpEl.style.display = "none";
     lblDisplayEl.textContent="Welcome " +   userName.value ;
     lblDisplayEl.setAttribute('style','color:white;font-size:25px');
     StartGame();
  }
  function startTimer() {
    startTime = new Date();
  }
  function endTimer() {
    endTime = new Date();
    console.log(endTime);
    console.log(startTime);
    const elapsedTime = endTime - startTime; // Time in milliseconds
    console.log("Elapsed time:", elapsedTime / 1000, "seconds");
  }
  
