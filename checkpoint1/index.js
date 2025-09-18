// Shopping cart DOM logic
window.addEventListener('DOMContentLoaded', function () {
    // Helper to get price as number from '70 $' etc
    function parsePrice(str) {
        return parseFloat(str.replace(/[^\d.]/g, ''));
    }

    // Update total price
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.card-body').forEach(cardBody => {
            const priceEl = cardBody.querySelector('.unit-price');
            const qtyEl = cardBody.querySelector('.quantity');
            if (priceEl && qtyEl) {
                const price = parsePrice(priceEl.textContent);
                const qty = parseInt(qtyEl.textContent);
                total += price * qty;
            }
        });
        document.querySelector('.total').textContent = total + ' $';
    }

    // Like (heart) toggle
    function toggleHeart(heart) {
        heart.classList.toggle('liked');
        if (heart.classList.contains('liked')) {
            heart.style.color = 'red';
        } else {
            heart.style.color = 'black';
        }
    }

    // Event delegation for all products
    document.querySelector('.list-products').addEventListener('click', function (e) {
        // Plus button
        if (e.target.classList.contains('fa-plus-circle')) {
            const qtyEl = e.target.parentElement.querySelector('.quantity');
            qtyEl.textContent = parseInt(qtyEl.textContent) + 1;
            updateTotal();
        }
        // Minus button
        if (e.target.classList.contains('fa-minus-circle')) {
            const qtyEl = e.target.parentElement.querySelector('.quantity');
            let qty = parseInt(qtyEl.textContent);
            if (qty > 0) {
                qtyEl.textContent = qty - 1;
                updateTotal();
            }
        }
        // Delete button
        if (e.target.classList.contains('fa-trash-alt')) {
            const cardBody = e.target.closest('.card-body');
            if (cardBody) {
                cardBody.remove();
                updateTotal();
            }
        }
        // Heart button
        if (e.target.classList.contains('fa-heart')) {
            toggleHeart(e.target);
        }
    });

    // Initialize all hearts to black
    document.querySelectorAll('.fa-heart').forEach(heart => {
        heart.style.color = 'black';
    });

    updateTotal();
});
