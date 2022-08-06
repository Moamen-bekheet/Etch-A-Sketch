function calculateSquareArea(numberOfsquares,parentContainerSideLength){
    return parentContainerSideLength/numberOfsquares;
}
function drawAGrid(numberOfsquares){
    let parentContainer = document.createElement('div');
    let parentContainerSideLength = 960;
    parentContainer.classList.add('parent-container');
    parentContainer.style.display = 'flex';
    parentContainer.style.flexDirection = 'column';
    parentContainer.style.width = `${parentContainerSideLength}px`;
    parentContainer.style.height = `${parentContainerSideLength}px`;
    for(let i=1; i<=numberOfsquares;i++){
        const div = document.createElement('div');
        let divSideLength = calculateSquareArea(numberOfsquares,parentContainerSideLength);
        div.classList.add('flex-row');
        div.style.display = 'flex';
        div.style.height = `${divSideLength}px`;
        div.style.width = `${parentContainerSideLength}px`;
        parentContainer.appendChild(div)
        for(let j=1; j<=numberOfsquares;j++){
            const innermostDiv = document.createElement('div');
            innermostDiv.classList.add('innermost-div')
            innermostDiv.style.height = `${divSideLength}px`;
            innermostDiv.style.width = `${divSideLength}px`;
            innermostDiv.style.border = '2px solid black';
            div.appendChild(innermostDiv);
        }
    }
    const Body = document.querySelector('body');
    Body.appendChild(parentContainer);
    const divsList = document.querySelectorAll('.innermost-div');
    divsList.forEach(div=>div.addEventListener('mouseover',function(){
    div.classList.toggle('Zaher');
}));
}
drawAGrid(16);

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let invalidInput = true;
    while(invalidInput){
        let numberOfsquares = parseInt(prompt('Please Enter a number between 2 and 100'));
        if((numberOfsquares>=2)&&(numberOfsquares<=100)){
            const Body = document.querySelector('body');
            const parentContainer = document.querySelector('.parent-container')
            Body.removeChild(parentContainer)
            drawAGrid(numberOfsquares);
            invalidInput = false;
        }
        else {
            alert('please enter a number within the specified range')
        }
    }
})


