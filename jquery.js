var burger = $('.burger');


$('h1')
    .text('Le meilleur burger')
    .click(function() {
        alert('clic sur mon h1');
    })
    .click(function() {
        alert('deuxième clic sur mon h1');
    })
    .css({
        backgroundColor: 'yellow',
        fontSize: '14px',
        color: 'black',
    });

var h2 = $('h2').eq(1);
h2.text(h2.text() + ' nouveau texte');
$('#top').css('width', '79%');

$('.meatball:eq(1)').addClass('pickle')
    .width('500px').removeClass('pickle');

var newCheese = $('.cheese').first().clone();
$('.patty').first().after(newCheese);

$('.burger > div').click(function() {
    $(this).css('background', 'orange');
});
