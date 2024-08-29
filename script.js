document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', () => {
        let quantityInput = button.previousElementSibling;
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateItemTotal(button);
    });
});

document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', () => {
        let quantityInput = button.nextElementSibling;
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            updateItemTotal(button);
        }
    });
});

function updateItemTotal(button) {
    let cartItem = button.closest('.cart-item');
    let price = parseFloat(cartItem.querySelector('.price').innerText);
    let quantity = parseInt(cartItem.querySelector('input').value);
    let itemTotal = cartItem.querySelector('.item-total');
    itemTotal.innerText = (price * quantity).toFixed(2);
    updateTotalPrice();
}

function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.item-total').forEach(itemTotal => {
        total += parseFloat(itemTotal.innerText);
    });
    document.querySelector('.total-price').innerText = total.toFixed(2);
}
