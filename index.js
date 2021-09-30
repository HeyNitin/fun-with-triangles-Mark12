const angle1 = document.querySelector('#angle-one');
const angle2 = document.querySelector('#angle-two');
const angle3 = document.querySelector('#angle-three');
const output = document.querySelector('#output');
const outputContainer = document.querySelector('.result');
const angleContainer = document.querySelector('.angle-container');
const checkButtonAngle = document.querySelector('#check-button1');



checkButtonAngle.addEventListener('click', checkIfTriangle);
nextButton.addEventListener('click', display);
select.addEventListener('change', updateDisplay);

function updateDisplay() {
    angleContainer.style.display = 'none';
    sidesContainer.style.display = 'none';
    outputContainer.style.display = 'none';
}


function checkIfTriangle() {
    
    
        if(Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180) {
            output.innerText = 'It is a Triangle!';
            console.log("yes")
        } else {
            output.innerText = 'It is not a Triangle as the sum of angles entered is not 180 degrees.';
        }
    
    
    outputContainer.style.display = 'flex';
    
}