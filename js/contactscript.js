$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  $("#documentlocation").val(document.location);

  function scrollIntoView(elemid) {
    scrollIntoView(elemid);
  }

  var linkoffset = 180;
  $("#navbar-scrollspy a").click(function(event) {
    event.preventDefault();
    window.location.hash = $(this).attr("href");
    $($(this).attr("href"))[0].scrollIntoView();
    scrollBy(0, -linkoffset);
  });

  $("#contactForm").on("submit", function(e) {
    e.preventDefault();

    if ($("#website").val()) {
      var response = prompt('There was an indicator that you might be a spam bot.  If you are not a spam bot, type the word "Human" in the field below and press OK.');
      if (response == "HUMAN" || response == "human" || response == "Human" || response == "hUMAN") {
        checkMessageLinks();
      } else {
        alert("Still seems you are a spam bot.  Action cancelled.");
      }
    } else {
      checkMessageLinks();
    }
  });

  function checkMessageLinks() {
    var $message = $("#contactmessage").val();
    if (~$message.indexOf("http") || ~$message.indexOf("://") || ~$message.indexOf("www.")) {
      alert("In order to protect against spam, we do not allow links to be submitted from the website.  Please remove the link from the message and try again.");
    } else {
      submitContactForm();
    }
  }

  function submitContactForm() {
    var form = $("#contactForm");
    var responsepanel = $("#responsepanel");
    var post_data = form.serialize();
    $.ajax({
      type: "POST",
      url: "contactsend.php",
      data: post_data,
      success: function(msg) {
        responsepanel.html(msg);
        // $(form).fadeOut(500, function() {
        //   form.html(msg).fadeIn();
        // });
      }
    });
  }
});
