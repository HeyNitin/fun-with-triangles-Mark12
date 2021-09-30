const calculateButton2= document.querySelector('#calculate-three');
const result = document.querySelector('#result');
const side1 = document.querySelector('#side1');
const side2 = document.querySelector('#side2');
const side3 = document.querySelector('#side3');
const threeSidesContainer = document.querySelector('.three-sides-container');



calculateButton2.addEventListener('click', computeArea);







function isTriangle() {
    if(Number(side1.value) + Number(side2.value) < Number(side3.value) || Number(side2.value) + Number(side3.value) < Number(side1.value) || Number(side1.value) + Number(side3.value) < Number(side2.value)) {
        return false;
    } 
    return true;
}

function computeArea() {

   
    
     
        if(isTriangle()) {
            console.log('enter')
            let s = (Number(side1.value) + Number(side2.value) + Number(side3.value)) / 2;
            let temp = s * (s - Number(side1.value)) * (s - Number(side2.value)) * (s - Number(side3.value))
            let area = Math.round(Math.sqrt(temp));
            result.innerText = `The area is ${area}`;
            result.style.display = 'flex';
        } else {
            result.innerText = 'It is not a triangle as the sum of two sides is less than the third side!';
            result.style.display = 'flex';
        }
        

    } 
    
