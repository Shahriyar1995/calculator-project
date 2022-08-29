let displayBox = document.querySelector('.display');
let list = document.querySelectorAll('.show-display');

function showDisplay(event) {
    const press = event.target.innerText;

    if (displayBox.innerText == 0) {
        return displayBox.innerText = press
    } else {
        return displayBox.innerText += press
    }
}

list.forEach(item => {
    item.addEventListener("click", showDisplay);
})

//////////////////////////////////////////////////////////////////////////////

function calculate() {
    let result = displayBox.innerText;
    displayBox.innerText = eval(result);
}
document.querySelector('.calculate').addEventListener('click', calculate);

//////////////////////////////////////////////////////////////////////////////


function allClear() {
    displayBox.innerText = 0;
}
document.querySelector('.all-clear').addEventListener('click', allClear);

///////////////////////////////////////////////////////////////////////

function clearLast() {
    const string = displayBox.innerText;
    const edit = string.substring(0, string.length - 1);
    if (displayBox.innerText.length > 1) {
        return displayBox.innerText = edit;
    } else {
        return displayBox.innerText = 0
    }
}
document.querySelector('.clear-last').addEventListener('click', clearLast);

//////////////////////////////////////////////////////////////////////////////
