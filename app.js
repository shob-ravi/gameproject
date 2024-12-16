let imageArray = ["https://e1.pngegg.com/pngimages/457/896/png-clipart-icon-no-background-icon-512x512-2x-color-shade-fan.png",
    "https://www.freeiconspng.com/thumbs/color-icons/colors-icon-4.png",
    "https://www.freeiconspng.com/uploads/color-icon-png-13.png",
    "https://www.pngitem.com/pimgs/m/164-1649948_start-clipart-colour-star-3-color-icon-png.png",
    "https://e7.pngegg.com/pngimages/489/878/png-clipart-computer-icons-rgb-color-model-computer-software-others-angle-rectangle-thumbnail.png",
    "https://www.pngfind.com/pngs/m/156-1566858_computer-icons-circle-color-encapsulated-postscript-colourful-circle.png",
    "https://e7.pngegg.com/pngimages/460/521/png-clipart-color-wheel-computer-icons-rgb-color-space-international-commission-on-illumination-color-mode-rgb-miscellaneous-blue-thumbnail.png",
    "https://w7.pngwing.com/pngs/518/976/png-transparent-rgb-color-model-logo-cmyk-color-model-tricolor-logo-color-sphere-thumbnail.png"
]
let lockBoard = false;
let flippedImages = [];
let matchedImages = 0;
let totalImages = imageArray.length * 2;
let memoryGameContainerEl = document.querySelector(".memoryGameContainer");
memoryGameContainerEl.classList.add('grid-container');
let gameContainerEl = document.getElementById("gameContainer");
gameContainerEl.innerHTML="Memory game";
gameContainerEl.appendChild(memoryGameContainerEl);
function StartGame()
{
    const shuffledImages = shuffleArray([...imageArray,...imageArray]); 
    shuffledImages.forEach((image)=>{
        
            let gridItem = document.createElement('div');        
            memoryGameContainerEl.appendChild(gridItem);
            gridItem.classList.add('grid-item');
            

            const img = document.createElement('img');
            //img.src = image;
            img.src = image;
            gridItem.appendChild(img);
            gridItem.addEventListener('click',() => flipImage(gridItem) ) ;               
   
    }); 
}    
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }   


function flipImage(image) {
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
    StartGame();
  }
  
