const firstBox = document.querySelector('[data-first-box]');
const secondBox = document.querySelector('[data-second-box]');
const ratingBox = document.querySelector('[data-rating-box]');
const numBtns = document.querySelectorAll('[data-num-btn]');
const submitBtn = document.querySelector('[data-submit]');
const thankuText = document.querySelector('[data-text]');

const arrOfRatings = Array.from(numBtns).forEach(item => {
    item.addEventListener('click', (e) => {
        let selecting = e.target;

        submitBtn.addEventListener('click', () => {
            firstBox.style.display = 'none';
            secondBox.style.display = 'grid';
            thankuText.innerHTML = `We are incredibly grateful that you took the time out to leave us a ${selecting.value}-star review. 
            We really appreciate you being a customer and helping to share the word about us.`
        });
    });    
});
