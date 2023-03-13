// Smooth scrolling
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
    scrollTop: target.offset().top
    }, 1000);
    }
    });
    // Form validation
    $('form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    } else {
    alert('Thank you for your message!');
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
    }
    });
    