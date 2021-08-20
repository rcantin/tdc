$(function () {

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $('#documentlocation').val(document.location);


    function scrollIntoView(elemid) {
        scrollIntoView(elemid)
    }



    var linkoffset = 180;
    $('#navbar-scrollspy a').click(function(event) {
        event.preventDefault();
        window.location.hash = $(this).attr('href');
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -linkoffset);
    });





    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        var possiblebadguy = true;
        var $honeypot = $('#website');
        if (!$honeypot.val()) {
            possiblebadguy = false;
            submitContactForm();
        }
        if (possiblebadguy) {
            var response = prompt("There was an indicator that you might be a spam bot.  If you are not a spam bot, type the word \"Human\" in the field below and press OK.");
            if (response == 'HUMAN' || response == 'human' || response == 'Human' || response == 'hUMAN') {
                possiblebadguy == false;
                submitContactForm();
            } else {
                alert('Still seems you are a spam bot.  Action cancelled.');
            }
        }
    });


    function submitContactForm() {
//        console.log('Submitting form...');
        var form = $('#contactForm');
        var post_url = form.attr('action');
        var post_data = form.serialize();
        $.ajax({
            type: 'POST',
            url: '../fundraisingcontactsend.php',
            data: post_data,
            success: function(msg) {
                $(form).fadeOut(500, function(){
                    form.html(msg).fadeIn();
                });
            }
        });
    }


})




