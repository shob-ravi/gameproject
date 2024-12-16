let memoryGameContainerEl = document.querySelector(".memoryGameContainer");
memoryGameContainerEl.classList.add('grid-container');
for(let i=1;i<=16;i++)
    {
        let gridItem = document.createElement('div');        
        memoryGameContainerEl.appendChild(gridItem);
        gridItem.classList.add('grid-item');
    }