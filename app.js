// jQuery usage
$('#convert').click(function () {
    var quantity = $('#quantity').val();
    var origin = $('#measure-from').val();
    var destination = $('#measure-to').val();

    $('#result-box').show();

    htmlConverter('#result', quantity, origin, destination);

});