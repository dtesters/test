const card = document.querySelector('.card');

// Change card background color on hover
card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = '#ADD8E6'; /* Orange */
});

card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = '#333'; /* Initial card background color */
});

// Change button background color on hover
const buttons = document.querySelectorAll('.animated-button');
buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#FF1493'; /* Pink */
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#0000FF'; /* Blue */
    });
});
