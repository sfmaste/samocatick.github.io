$(document).ready(function() {
    let totalCount = 0;

    $('.addToCart').click(function() {
        const productName = $(this).data('product');
        $('#cart').append(
            '<li class ="card-item">' + '<img src="img/butter (1).svg" id="photo" alt="photo" width="200px">' + productName + '<div class="level"><p>287руб</p> <button class="removeFromCart" data-product="Масло сливочное">Удалить</button></div>'
        );
        totalCount++;
        $('#totalCount').text(totalCount);
    });

    $('#cart').on('click', '.removeFromCart', function() {
        $(this).closest('.card-item').remove();
        totalCount--;
        $('#totalCount').text(totalCount);
    });
});