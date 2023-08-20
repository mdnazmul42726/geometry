function calculateTraingeArea() {

    // get the tringel base input value
    const baseInputFiled = document.getElementById('triangle-base-filed');
    const baseInputValueString = baseInputFiled.value;
    const baseInputValue = parseFloat(baseInputValueString);

    if(isNaN(baseInputValue)){
        baseInputFiled.value = '';
        alert('Invalid input')
        return;
    }

    // clear the input value 
    baseInputFiled.value = '';

    // if(isNaN(baseInputValue)){
    //     alert('invalid input')
    // }

    // get height input value
    const heightInputFiled = document.getElementById('triangle-height-filed');
    const heightInpitValueString = heightInputFiled.value;
    const heightInputValue = parseFloat(heightInpitValueString);

    if(isNaN(heightInputValue)){
        heightInputFiled.value = '';
        alert('invalid input')
        return;
    }

    // clear the height input value 
    heightInputFiled.value = '';

    // area calculation base x height 
    const areaX = baseInputValue * heightInputValue;

    // area calcualtion areax X 0.5
    const triangleFinalResult = 0.5 * areaX;

    // result show
    const resultFiled = document.getElementById('output');
    resultFiled.innerText = triangleFinalResult;

    allAreaCalculationData('Traingel-', triangleFinalResult);

};

// card 2
function calculateRectangleArea() {

    // get the 1st value from the input filed and converted to string to number
    const widthInputFiled = document.getElementById('rectangleWidthInputFiled');
    const widthInputValueString = widthInputFiled.value
    const widthInputValue = parseFloat(widthInputValueString);

    if(isNaN(widthInputValue)){
        widthInputFiled.value = '';
        alert('invalid input')
        return;
    }

    // clear the 1st input filed after the get value
    widthInputFiled.value = '';

    // get the 2nd value from the input filed and converted to string to number

    const lengthinputFiled = document.getElementById('rectangleLengthinputFiled');
    const lengthinputValueString = lengthinputFiled.value;
    const lengthinputValue = parseFloat(lengthinputValueString);

    if(isNaN(lengthinputValue)){
        lengthinputFiled.value = '';
        alert('invalid input')
        return;
    }
    // console.log(lengthinputValue)

    // clear the input filed value
    lengthinputFiled.value = '';

    // calculate the value;
    const wAndLX = widthInputValue * lengthinputValue;

    // show the output
    const rectangleOutput = document.getElementById('rectangle-output');
    rectangleOutput.innerText = wAndLX;

    allAreaCalculationData('Rectangle-', wAndLX);

};

// *************************************
// function for get input value and convarted string to namber
function getInputFiledById(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputValueString = inputFiled.value;
    const inputValue = parseFloat(inputValueString);
    inputFiled.value = '';
    return inputValue;
}

// function for output value
function setOutputElement(element, finalResult) {
    const texteElement = document.getElementById(element);
    texteElement.innerText = finalResult;
}

// area calculation 
function allAreaCalculationData(type, result){
    console.log(type, result);
    const summary = document.getElementById('summary');

    // create a new element
    const h3 = document.createElement('h3')
    h3.innerHTML = type + '' + result;
    summary.appendChild(h3)
}

// ***************************************

// card 3
function parallelogram() {

    // get base input filed value
    const base = getInputFiledById('parallelogram-base-input-filed')

    // get height input filed value
    const height = getInputFiledById('parallelogram-height-input-filed');

    if(isNaN(base) || isNaN(height)){
        alert('invalid input')
        return;
    }

    // calculate parallelogram area
    const parallelogramResult = base * height;

    // output the parallelogram result
    setOutputElement('parallelogram-output', parallelogramResult);

    // save data
    allAreaCalculationData('Parallelogram-', parallelogramResult)


};

// Ellipse
function ellipse() {
    // get the mejor input data
    const mejor = getInputFiledById('mejor-redues-input-filed');

    // get the mainor input data
    const mainor = getInputFiledById('mainor-redues-input-filed');

    if(isNaN(mejor) || isNaN(mainor)){
        lengthinputFiled.value = '';
        alert('invalid input')
        return;
    }

    // calculte the pi area 
    const piCalc = 3.14 * mejor * mainor;

    // show the result
    setOutputElement('ellipse-output', piCalc);

    allAreaCalculationData('Ellipse-', piCalc);

};

// Pentagon
function pentagon(){
    // get the p input value
    const p = getInputFiledById('p-input-filed');

    // get the b input value
    const b = getInputFiledById('b-input-filed');

    if(isNaN(p) || isNaN(b)){
        lengthinputFiled.value = '';
        alert('invalid input')
        return;
    }

    // calculate the pentagon area
    const pb05 = 0.5 * p * b;
    const pb052d = pb05.toFixed(2)

    // show to pentagon result 
    setOutputElement('pentagon-output', pb052d);

    allAreaCalculationData('Pentagon-', pb052d);


     }