function calculate(){
    const cabinetsHorizontally = document.getElementById('cabinets-horizontally').value;
    const cabinetsVertically = document.getElementById('cabinets-vertically').value;
    const totalCabinets = cabinetsHorizontally * cabinetsVertically;
    const pixelsPerWidth = 384 * cabinetsHorizontally; // 384 - pixels width in single cabinet
    const pixelsPerHeight = 216 * cabinetsVertically; // 216 - pixels height in single cabinet
    const screenWidth = cabinetsHorizontally * 0.600; // 0.600 - single screen width in m
    const screenHeight = cabinetsVertically * 0.3375; // 0.3375 - single screen height in m
    const screenSizeSqm = (screenWidth * screenHeight).toFixed(2);
    const diagonalDisplaySize =  Math.sqrt(Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2)).toFixed(2);
    const aspectRatioDecimal = (pixelsPerWidth / pixelsPerHeight).toFixed(2);
    const totalResolution = (pixelsPerHeight * pixelsPerWidth).toLocaleString();
    const screenWeight = totalCabinets * 7; // 7 - weight of one cabinet
    const screenGrossWeight = totalCabinets * 11.9; // 11.9 - weight of one screen
    
    document.getElementById('widthOfDisplay').innerHTML = (screenWidth).toFixed(2); // width of screen
    document.getElementById('heightOfDisplay').innerHTML = (screenHeight).toFixed(2); // height of screen
    document.getElementById('sqmOfDisplay').innerHTML =  screenSizeSqm; // screen size in sqm
    document.getElementById('screenWidthInPixels').innerHTML = pixelsPerWidth.toLocaleString(); // pixel count per width
    document.getElementById('screenHeightInPixels').innerHTML = pixelsPerHeight.toLocaleString(); // pixel cont per height
    document.getElementById('totalCountOfPixel').innerHTML = totalResolution; // total resolution
    document.getElementById('aspectRatioDecimal').innerHTML = aspectRatioDecimal; // aspect ratio in decimal
    document.getElementById('screenDiagonal').innerHTML = diagonalDisplaySize;  // screen diagonal
    document.getElementById('weightOfDisplay').innerHTML = screenWeight; // display weight
    document.getElementById('typicalConsumption').innerHTML = Math.floor(totalCabinets * 0.035 * 100) / 100; // consumption
    document.getElementById('maxConsumption').innerHTML = Math.floor(totalCabinets * 0.135 * 100) / 100; // maximal consumption
    
    document.getElementById('screenWidthM').innerHTML = (screenWidth).toFixed(3); // screen width in meters
    document.getElementById('screenHeightM').innerHTML = (screenHeight).toFixed(3); // screen height in meters 
    document.getElementById('screenWidthFt').innerHTML = (screenWidth * 3.2808).toFixed(2); // screen height in feets
    document.getElementById('screenHeightFt').innerHTML = (screenHeight * 3.2808).toFixed(2); // screen height in feets
    document.getElementById('screenWidthIn').innerHTML = (screenWidth * 39.3700787).toFixed(2); //screen width in inches
    document.getElementById('screenHeightIn').innerHTML = (screenHeight * 39.3700787).toFixed(2); // screen height in inches
    document.getElementById('screenAreaM2').innerHTML = screenSizeSqm; //screen area in m2
    document.getElementById('screenAreaFt2').innerHTML = (screenSizeSqm * 10.7639104).toFixed(2); // screen area in feet2
    document.getElementById('diagonalDispSizeM').innerHTML = diagonalDisplaySize; // diagonal screen size in meters
    document.getElementById('diagonalDispSizeIn').innerHTML = (diagonalDisplaySize * 39.3700787).toFixed(2); // diagonal screen size in inches
    document.getElementById('aspectRatioInDecimal').innerHTML = aspectRatioDecimal; // aspect ration in decimal 
    document.getElementById('cabinetsHorizontally').innerHTML = cabinetsHorizontally; // cabinets horizontally
    document.getElementById('cabinetsVertically').innerHTML = cabinetsVertically; // cabinets vertically
    document.getElementById('totalCabinets').innerHTML = totalCabinets; // total cabinets 
    document.getElementById('screenHorRes').innerHTML = pixelsPerWidth; // screen horizontal resolution
    document.getElementById('screenVerRes').innerHTML = pixelsPerHeight; // screen vertical resolution
    document.getElementById('screenTotRes').innerHTML = totalResolution; // screen total resolution
    document.getElementById('screenWeightKg').innerHTML = screenWeight; // screen weight in kilograms
    document.getElementById('screenWeightLb').innerHTML = (screenWeight * 2.205).toFixed(2); // screeb weight in lbs
    document.getElementById('screenGrossWeightKg').innerHTML = (screenGrossWeight).toFixed(2); // screen gross weight in kilograms
    document.getElementById('screenGrossWeightLb').innerHTML = (screenGrossWeight * 2.205).toFixed(2); // screen gross weight in lbs
}

function plusMinusOne(plusOrMinus, cabinetsDirection) {
    let inputValue = document.getElementById(cabinetsDirection).value;

    inputValue = parseInt(inputValue);
    if(plusOrMinus == 'plus' && inputValue < 300){ // +1 when click on plus button
        inputValue++;
    }
    if(plusOrMinus == 'minus' && inputValue > 1){ // -1 when click on minus button
        inputValue--;
    }

    document.getElementById(cabinetsDirection).value = inputValue;
}

function toggle(firstDiv, secondDiv, firstButtonId, secondButtonId) {
    let firstSection = document.getElementById(firstDiv);
    let secondSection = document.getElementById(secondDiv);
    let firstButton = document.getElementById(firstButtonId);
    let secondButton = document.getElementById(secondButtonId);

    if(firstSection.style.display == 'none'){
        firstSection.style.display = 'initial'; // show first div with tables
        secondSection.style.display = 'none'; // show second div with table
        
        // change properties of first button in parameter
        firstButton.style.border = 'none';
        firstButton.style.background = '#54B2E9';
        firstButton.style.color = '#fff';
        
        // change properties of second button in parameter
        secondButton.style.border = '1px solid #eee';
        secondButton.style.background = '#fff';
        secondButton.style.color = '#555';
    }
}