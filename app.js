let imageArray = ["https://e1.pngegg.com/pngimages/457/896/png-clipart-icon-no-background-icon-512x512-2x-color-shade-fan.png",
    "https://www.freeiconspng.com/thumbs/color-icons/colors-icon-4.png",
    "https://www.freeiconspng.com/uploads/color-icon-png-13.png",
    "https://www.pngitem.com/pimgs/m/164-1649948_start-clipart-colour-star-3-color-icon-png.png",
    "https://e7.pngegg.com/pngimages/489/878/png-clipart-computer-icons-rgb-color-model-computer-software-others-angle-rectangle-thumbnail.png",
    "https://www.pngfind.com/pngs/m/156-1566858_computer-icons-circle-color-encapsulated-postscript-colourful-circle.png",
    "https://e7.pngegg.com/pngimages/460/521/png-clipart-color-wheel-computer-icons-rgb-color-space-international-commission-on-illumination-color-mode-rgb-miscellaneous-blue-thumbnail.png",
    "https://w7.pngwing.com/pngs/518/976/png-transparent-rgb-color-model-logo-cmyk-color-model-tricolor-logo-color-sphere-thumbnail.png"
]
let memoryGameContainerEl = document.querySelector(".memoryGameContainer");
memoryGameContainerEl.classList.add('grid-container');
const shuffledImages = shuffleArray([...imageArray]); 
imageArray.forEach((image)=>{
    
        let gridItem = document.createElement('div');        
        memoryGameContainerEl.appendChild(gridItem);
        gridItem.classList.add('grid-item');
        

        const img = document.createElement('img');
        gridItem.appendChild(img);
        console.log(image);
        gridItem.addEventListener('click',() => {
           img.src = image;
           
});
});     
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }   