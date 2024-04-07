$(document).ready(function(){
    $('.header').height($(window).height());

    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        },1000)
    } );
});

/*
 $(document).ready(function(){
    $('.header').height($(window).height());
        // Add smooth scrolling to all links
        $(".navbar a").on('click', function(event) {
          
            // Make sure this.hash has a value before overriding default behavior
            if ("#" !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
          
            // Store hash
            var hash = "#" + $(this).data('value');
          
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
             
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
*/  

   