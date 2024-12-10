// Navbar background color change on scroll

$(document).ready(function() {
    

    $(window).scroll(function() {

        var currentScroll = $(this).scrollTop(); 
        var limit_value=250;

        if (currentScroll > limit_value) {
            // scrolling down
            console.log(currentScroll)
            console.log("Scrolling down");
            $(".navbar").css("background-color", "black");
        } 
        
        else {
            // scrolling up
            console.log("Scrolling up");
            $(".navbar").css("background-color", "transparent");
        }

       
    });
});
