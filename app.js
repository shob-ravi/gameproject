let memoryGameContainerEl = document.querySelector(".memoryGameContainer");
for(let i=1;i<=16;i++)
    {
        let gridItem = document.createElement('div');        
        memoryGameContainerEl.appendChild(gridItem);
    }