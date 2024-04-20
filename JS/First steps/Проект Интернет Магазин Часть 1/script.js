window.addEventListener('click', function(event) {
    const cartWrapper = document.querySelector('.cart-wrapper');

    function toggleCartStatus() {
        let totalPrice = 0;
        const cartEmpty = document.querySelector('[data-cart-empty]');
        const cartTotal = document.querySelector('.cart-total');
        const orderForm = document.querySelector('#order-form');
        const deliveryFeeElement = document.querySelector('.delivery-cost');

        if (cartWrapper.querySelectorAll('.cart-item').length > 0) {
            cartEmpty.classList.add('none');
            cartTotal.classList.remove('none');
            orderForm.classList.remove('none');
        } else {
            cartEmpty.classList.remove('none');
            cartTotal.classList.add('none');
            orderForm.classList.add('none');
        }

        cartWrapper.querySelectorAll('.cart-item').forEach(function(item) {
            const counter = parseInt(item.querySelector('[data-counter]').innerText);
            const priceOneItem = parseInt(item.querySelector('.price__currency').innerText);
            const price = counter * priceOneItem;
            totalPrice += price;
        });

        cartTotal.querySelector('.total-price').innerText = totalPrice;

        let deliveryFee = '300';
        if (totalPrice >= 1000) {
            deliveryFee = 'Бесплатно';
        }
        deliveryFeeElement.innerText = deliveryFee;
    }

    if (event.target.hasAttribute('data-action')) {
        const counterWrapper = event.target.closest('.counter-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');

        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
            if (event.target.closest('.cart-wrapper')) {
                toggleCartStatus();
            }
        } else if (event.target.dataset.action === 'minus') {
            if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
                if (event.target.closest('.cart-wrapper')) {
                    toggleCartStatus();
                }
            } else {
                event.target.closest('.cart-item').remove();
                toggleCartStatus();
            }
        }
    } else if (event.target.hasAttribute('data-cart')) {
        const cart = event.target.closest('.card');

        const productInfo = {
            id: cart.dataset.id,
            imgSrc: cart.querySelector('.product-img').getAttribute('src'),
            title: cart.querySelector('.item-title').innerText,
            itemsInBox: cart.querySelector('[data-items-in-box]').innerText,
            weight: cart.querySelector('.price__weight').innerText,
            price: cart.querySelector('.price__currency').innerText,
            counter: cart.querySelector('[data-counter]').innerText
        };

        const cartItemHtml = `
        <div class='cart-item' data-id='${productInfo.id}'>
            <div class='cart-item__top'>
                <div class='cart-item__img'>
                    <img src='${productInfo.imgSrc}' alt=''>
                </div>
                <div class='cart-item__desc'>
                    <div class='cart-item__title'>${productInfo.title}</div>
                    <div class='cart-item__weight'>${productInfo.itemsInBox} / ${productInfo.weight}</div>
                    <!--cart-item__details-->
                    <div class='cart-item__details'>
                        <div class='items items--small counter-wrapper'>
                            <div class='items__control' data-action='minus'>-</div>
                            <div class='items__current' data-counter=''>${productInfo.counter}</div>
                            <div class='items__control' data-action='plus'>+</div>
                        </div>
                        <div class='price'>
                            <div class='price__currency'>${productInfo.price}</div>
                        </div>
                    </div>
                    <!-- cart-item__details -->
                </div>
            </div>
        </div>`;

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerHTML = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
        }
        cart.querySelector('[data-counter]').innerText = '1';
        toggleCartStatus();
    }
});
