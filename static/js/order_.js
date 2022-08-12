const fileInput = document.querySelector('.fileInput');
const fileName = document.querySelector('.fileName');


fileInput.addEventListener('change', (e) => {
    fileName.innerText = e.target.value;
})