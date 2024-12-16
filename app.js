let image1 = '<img src="https://media.gettyimages.com/id/1311529685/vector/abstract-retro-logos.jpg?s=612x612&w=gi&k=20&c=Tm_64SScULgt-q-1bOUHaEuCbeiZF1exwn3FHiomgao=" width=10%;/>';
let memoryGameContainerEl = document.querySelector(".memoryGameContainer");
memoryGameContainerEl.classList.add('grid-container');
for(let i=1;i<=16;i++)
    {
        let gridItem = document.createElement('div');        
        memoryGameContainerEl.appendChild(gridItem);
        gridItem.classList.add('grid-item');
        gridItem.textContent=i;
        gridItem.addEventListener('click',()=>{
            gridItem.textContent=image1;
        });
        
    }
    showPic()
    {
        gridItem.textContent="https://media.gettyimages.com/id/1311529685/vector/abstract-retro-logos.jpg?s=612x612&w=gi&k=20&c=Tm_64SScULgt-q-1bOUHaEuCbeiZF1exwn3FHiomgao=";
    }