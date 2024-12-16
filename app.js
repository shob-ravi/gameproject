let image1 = "https://e1.pngegg.com/pngimages/457/896/png-clipart-icon-no-background-icon-512x512-2x-color-shade-fan.png";
let image2="https://www.freeiconspng.com/thumbs/color-icons/colors-icon-4.png";

let memoryGameContainerEl = document.querySelector(".memoryGameContainer");
memoryGameContainerEl.classList.add('grid-container');
for (let i=1;i<=16;i++)
    {
        let gridItem = document.createElement('div');        
        memoryGameContainerEl.appendChild(gridItem);
        gridItem.classList.add('grid-item');
        // gridItem.textContent=i;

        const img2 = document.createElement('img');
        gridItem.appendChild(img2);

        gridItem.addEventListener('click',() => {
        img2.src = image2;
        });
        
    }
    showPic()
    {
        
    }