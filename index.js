document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('container');
    var elSlider = document.getElementById('myRange');
    let elSliderShow = document.getElementById('sliderShow');
    let blackel = document.getElementById('blackboard');
    let Rainbowel = document.getElementById('Rainbow');
    let rainbowCol = ['red','blue','violet','green','orange','yellow']
    elSliderShow.innerHTML ='';
    Rainbowel.addEventListener("click",function(){
        Rainbowel.innerHTML ="SELECT GRID SIZE"
    })  
    blackel.addEventListener("click",function(){
        blackel.innerHTML ="SELECT GRID SIZE"
    })                                                                          
    let rowval = 16;
//   return Math.floor(Math.random() * max);
    elSlider.oninput = function () {
        Rainbowel.innerHTML ="RAINBOW"
        blackel.innerHTML ="BLACK"
        elSliderShow.innerHTML = this.value + '*' + this.value;
        rowval = this.value;

        // Update the number of rows and columns
        var rows = rowval;
        var cols = rowval;

        // Clear the existing grid
        container.innerHTML = '';

        // Set the initial width of the container
        var containerWidth = 560; // Adjust as needed
        container.style.maxWidth = containerWidth + 'px';

        // Calculate the width dynamically for each grid item
        var cellWidth = (containerWidth) / cols; // 1vmin is the gap
        cellWidth = Math.floor(cellWidth); // Ensure it's an integer

        // Create the grid
        for (var i = 0; i < rows * cols; i++) {
            var gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.id = 'grid-item' + i;
            gridItem.style.width = cellWidth + 'px';

            container.appendChild(gridItem);
        }

        // Add click event listener to each grid item
        
        var gridItems = document.querySelectorAll('.grid-item');
        Rainbowel.addEventListener("click",function(){
            Rainbowel.innerHTML ="RAINBOW"
            Rainbowel.style.color = 'blue'
            blackel.style.color = 'black'
            gridItems.forEach((gridItem) => {
                gridItem.addEventListener('mouseover', () => {
                    gridItem.style.backgroundColor = `${rainbowCol[Math.floor(Math.random() * 6)] }`;
                });
            });
        })
        blackel.addEventListener("click",function(){
            blackel.innerHTML ="BLACK"
            blackel.style.color = 'blue'
            Rainbowel.style.color = 'black'
            gridItems.forEach((gridItem) => {
                gridItem.addEventListener('mouseover', () => {
                    gridItem.style.backgroundColor = 'black';
                });
            });
        })
        
    };
});
