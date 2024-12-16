// let image1 = "https://e1.pngegg.com/pngimages/457/896/png-clipart-icon-no-background-icon-512x512-2x-color-shade-fan.png";
// let image2="https://www.freeiconspng.com/thumbs/color-icons/colors-icon-4.png";
let imageArray = ["https://e1.pngegg.com/pngimages/457/896/png-clipart-icon-no-background-icon-512x512-2x-color-shade-fan.png",
    "https://www.freeiconspng.com/thumbs/color-icons/colors-icon-4.png"

]
let memoryGameContainerEl = document.querySelector(".memoryGameContainer");
memoryGameContainerEl.classList.add('grid-container');
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