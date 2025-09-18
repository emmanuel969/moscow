// Generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Wait for the DOM to be fully loaded
window.addEventListener('DOMContentLoaded', function() {
    // Select the color-box and change-color-btn elements
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    // Add event listener to change-color-btn
    if (changeColorBtn && colorBox) {
        changeColorBtn.addEventListener('click', function() {
            colorBox.style.backgroundColor = getRandomColor();
        });
    }
});
