//Grabbed all the elements from index.html
const pickedColor = document.getElementById("color-picker");
const colorCode = document.getElementById("colorCode");
const complementColorBox = document.getElementById("complementary-color-box");
const favouriteBox = document.getElementById("favourite-box");
const copyBtn = document.getElementById("copy-btn");
const saveBtn = document.getElementById("save-btn");

function getComplementoryColor(color){
    const base = parseInt(color.slice(1), 16);
    const compliment = (0xFFFFFF ^ base).toString(16).padStart(6, '0');

    return [`#${compliment}`];
}

pickedColor.addEventListener('input', ()=>{
    const selectedColor = pickedColor.value;
    updateColorDisplay(selectedColor);
    showComplementoryColor(selectedColor);
})


function updateColorDisplay(color){
    colorCode.textContent = color;
    colorCode.style.color = color;
}

function showComplementoryColor(color) {
    const complementColor = getComplementoryColor(color);
    complementColorBox.innerHTML = "";
    complementColor.forEach((color) => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("complementary-color-box");
        colorBox.style.backgroundColor = color;
        complementColorBox.appendChild(colorBox);
    });
}

