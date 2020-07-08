$(document).ready(function() {
    $('.slider-nav .checkbox').hover(function() {
        let imgData = $(this).attr('data-');


        $('.slider div').not('#' + imgData).hide(100);
        $('.slider #' + imgData).show(600);

        $(this).attr('checked', 'true');
    });
    $('.slider-nav .checkbox').mouseout(function() {
        if ($(this) != $('.slider-nav').first || $(this) != $('.slider-nav').last) {
            $(this).removeAttr('checked')
        }
    });


    $('.search-form .form-buttons p').click(function() {
        if ($(this).hasClass('selectedBut') == false) {
            $('.search-form .form-buttons p').removeClass('selectedBut');
            $(this).addClass('selectedBut');
        } else {
            $('.search-form .form-buttons p').addClass('selectedBut');
            $(this).removeClass('selectedBut');
        }
    });




    $('.listing>div>img').click(function() {
        let img = $(this);
        let src = img.attr('src');

        $(".main").append(`<div class='popup'><div class='popup-bg'><img src='${src}' class='popup_img' /></div></div>`);

        $(".popup").fadeIn(800);

        $(".popup").click(function() {

            $(".popup").fadeOut(800);

            setTimeout(function() {

                $(".popup").remove();

            }, 800);

        });
    })
})