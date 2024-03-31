const wrapper = document.querySelector('.wrapper'); // Correct if .wrapper is a class
const question = document.querySelector('.question'); // Assuming .question is a class, use querySelector
const yesBtn = document.querySelector('.yes-btn'); // Assuming .yes-btn is a class, use querySelector
const noBtn = document.querySelector('.no-btn'); // Assuming .no-btn is a class, use querySelector

// If .question, .yes-btn, and .no-btn are IDs, not classes, use getElementById without the dot.
// For example:
// const question = document.getElementById('question'); // Assuming 'question' is an ID

const wrapperReact = wrapper.getBoundingClientRect();
const noBtnReact = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I really adore you<3';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperReact.width - noBtnReact.width));
    const j = Math.floor(Math.random() * (wrapperReact.height - noBtnReact.height));
    noBtn.style.position = 'absolute'; // Ensure the button is positioned absolutely within its relative container
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
