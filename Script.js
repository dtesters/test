// JavaScript code for handling RGB animations
function rgbAnimation(element, property, speed) {
    let currentColor = [255, 0, 0]; // Initial color (red)
    const targetColor = [0, 255, 0]; // Target color (green)

    const interval = setInterval(function () {
        let done = true;
        for (let i = 0; i < 3; i++) {
            if (currentColor[i] !== targetColor[i]) {
                done = false;
                currentColor[i] += currentColor[i] < targetColor[i] ? 1 : -1;
            }
        }

        if (done) {
            clearInterval(interval);
        }

        element.style[property] = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
    }, speed);
}

// Apply RGB animations to elements
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const buttons = document.querySelectorAll('.button');
const card = document.querySelector('.card');

rgbAnimation(title, 'color', 100); // Title text color
rgbAnimation(description, 'color', 100); // Description text color

buttons.forEach(function (button) {
    rgbAnimation(button, 'backgroundColor', 200); // Button background color
});

rgbAnimation(card, 'backgroundColor', 200); // Card background color
