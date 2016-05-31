/**
 * Created by Tharun Reddy on 2/13/16.
 */
$(document).ready(function ()
{
    $('.myImages').first().addClass('active');
    $('.myImages').hide();
    $('.active').show();


    //$( ".myImages" ).each(function() {
    //    $('.active').removeClass('active').addClass('previouslyActive');
    //    if ($('.previouslyActive').is(':last-child'))
    //    {
    //        $('.myImages').first().addClass('active');
    //    }
    //    else
    //    {
    //        $('.previouslyActive').next().addClass('active');
    //    }
    //
    //    $('.previouslyActive').removeClass('previouslyActive').delay(10000);
    //    $('.myImages').fadeOut(10000);
    //    $('.active').fadeIn(10000);
    //});



    $('#nextButton').click(function ()
    {
        $(this).data('clicked', true);
        if($('#nextButton').data('clicked')) {
            $('.active').removeClass('active').addClass('previouslyActive');
            if ($('.previouslyActive').is(':last-child'))
            {
                $('.myImages').first().addClass('active');
            }
            else
            {
                $('.previouslyActive').next().addClass('active');
            }

            $('.previouslyActive').removeClass('previouslyActive');
            $('.myImages').fadeOut();
            $('.active').fadeIn();
        }
    });




    //Ref: http://jsfiddle.net/HsEne/15/
    $('#previousButton').click(function () {

        $('.active').removeClass('active').addClass('previouslyActive');
        if ($('.previouslyActive').is(':first-child')) {
            $('.myImages').last().addClass('active');
        }
        else
        {
            $('.previouslyActive').prev().addClass('active');
        }
        $('.previouslyActive').removeClass('previouslyActive');
        $('.myImages').fadeOut();
        $('.active').fadeIn();
    });

    $('#button1').click(function ()
    {
        $('.active').removeClass('active');
        $('.myImages').first().addClass('active');
        $('.myImages').hide();
        $('.active').show();
    });

    $('#button2').click(function ()
    {
        $('.active').removeClass('active');
        $('.myImages:nth-child(2)').addClass('active');
        $('.myImages').hide();
        $('.active').show();
    });

    $('#button3').click(function ()
    {

        $('.active').removeClass('active');
        $('.myImages:nth-child(3)').addClass('active');
        $('.myImages').hide();
        $('.active').show();
    });

    $('#button4').click(function ()
    {
        $('.active').removeClass('active');
        $('.myImages:nth-child(4)').addClass('active');
        $('.myImages').hide();
        $('.active').show();
    });

    $('#button5').click(function ()
    {

        $('.active').removeClass('active');
        $('.myImages:nth-child(5)').addClass('active');
        $('.myImages').hide();
        $('.active').show();
    });

    $('#button6').click(function ()
    {

        $('.active').removeClass('active');
        $('.myImages:nth-child(6)').addClass('active');
        $('.myImages').hide();
        $('.active').show();
    });


});


$(document).keydown(function(e){
    if (e.keyCode == 37) {
        $('.active').removeClass('active').addClass('previouslyActive');
        if ($('.previouslyActive').is(':first-child')) {
            $('.myImages').last().addClass('active');
        }
        else
        {
            $('.previouslyActive').prev().addClass('active');
        }
        $('.previouslyActive').removeClass('previouslyActive');
        $('.myImages').fadeOut();
        $('.active').fadeIn();
    }
    if (e.keyCode == 39) {
        $('.active').removeClass('active').addClass('previouslyActive');
        if ($('.previouslyActive').is(':last-child'))
        {
            $('.myImages').first().addClass('active');
        }
        else
        {
            $('.previouslyActive').next().addClass('active');
        }

        $('.previouslyActive').removeClass('previouslyActive');
        $('.myImages').fadeOut();
        $('.active').fadeIn();
    }
    if (e.keyCode == 38) {
        $('.active').removeClass('active').addClass('previouslyActive');
        if ($('.previouslyActive').is(':first-child')) {
            $('.myImages').last().addClass('active');
        }
        else
        {
            $('.previouslyActive').prev().addClass('active');
        }
        $('.previouslyActive').removeClass('previouslyActive');
        $('.myImages').fadeOut();
        $('.active').fadeIn();
    }
    if (e.keyCode == 40) {
        $('.active').removeClass('active').addClass('previouslyActive');
        if ($('.previouslyActive').is(':last-child'))
        {
            $('.myImages').first().addClass('active');
        }
        else
        {
            $('.previouslyActive').next().addClass('active');
        }

        $('.previouslyActive').removeClass('previouslyActive');
        $('.myImages').fadeOut();
        $('.active').fadeIn();
    }
});